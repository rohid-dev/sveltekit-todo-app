<script lang="ts">
  import type { ITodo } from '../models/todo';
  import { todos } from '../stores/todos';

  export let title = '';
  export let isCompleted = false;
  export let isFavourite = false;

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (!title) return;

    const todo: ITodo = {
      id: Date.now().toLocaleString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      title,
      isCompleted,
      isFavourite,
    };

    todos.update((v) => [...v, todo]);
    title = '';
  };
</script>

<form
  class="border-t border-gray-100 px-4 h-16 flex items-center gap-4"
  on:submit="{onSubmit}"
>
  <input
    type="text"
    placeholder="Add something to do..."
    class="flex-1 w-full bg-gray-100 px-4 h-12 rounded-md text-lg"
    bind:value="{title}"
  />
  <button
    type="submit"
    class="bg-blue-500 text-white px-4 h-12 rounded-md font-medium text-lg"
    >Add</button
  >
</form>
