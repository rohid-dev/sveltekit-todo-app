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
      id: Date.now().toString(),
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
  class="flex h-16 items-center gap-4 border-t border-gray-100 px-4"
  on:submit="{onSubmit}"
>
  <input
    type="text"
    placeholder="Add something to do..."
    class="h-12 w-full flex-1 rounded-md bg-gray-100 px-4 text-lg"
    bind:value="{title}"
  />
  <button
    type="submit"
    class="h-12 rounded-md bg-blue-500 px-4 text-lg font-medium text-white"
    >Add</button
  >
</form>
