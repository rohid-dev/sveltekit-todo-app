<script lang="ts">
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { todos } from '../../stores/todos';
  import type { ITodo } from '../../models/todo';
  export let todo: ITodo | undefined = undefined;

  const unsubscribe = todos.subscribe((_todos) => {
    todo = _todos.find((t) => t.id === $page.params.id);
  });

  onDestroy(() => {
    unsubscribe();
  });

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    todos.update((value) =>
      value.map<ITodo>((v) => {
        if (todo && v.id === todo.id) {
          return {
            ...todo,
            updatedAt: new Date(),
          };
        }
        return v;
      })
    );
  };
</script>

{#if todo}
  <form class="p-4 flex flex-col items-start gap-4" on:submit="{onSubmit}">
    <p>Id: {todo.id}</p>
    <div>
      <label for="todo-title-input">Title</label>
      <input
        type="text"
        bind:value="{todo.title}"
        id="todo-title-input"
        class="input-field"
        placeholder="Todo Title"
      />
    </div>
    <div>
      <label for="todo-desc-input">Description</label>
      <textarea
        bind:value="{todo.desc}"
        id="todo-desc-input"
        placeholder="Todo Description"
        class="input-field"></textarea>
    </div>
    <div>
      <label for="todo-is-completed-checkbox">Is Completed</label>
      <input
        type="checkbox"
        bind:checked="{todo.isCompleted}"
        id="todo-is-completed-checkbox"
      />
    </div>
    <div>
      <label for="todo-is-favourite-checkbox">Is Favourite</label>
      <input
        type="checkbox"
        bind:checked="{todo.isFavourite}"
        id="todo-is-favourite-checkbox"
      />
    </div>
    <div>
      <label for="todo-is-deleted-checkbox">Is Deleted</label>
      <input
        type="checkbox"
        bind:checked="{todo.isDeleted}"
        id="todo-is-deleted-checkbox"
      />
    </div>
    <div>
      <p>
        <span>Created At: </span>
        <span>{todo.createdAt.toLocaleString()}</span>
      </p>
      <p>
        <span>Updated At: </span>
        <span>{todo.updatedAt.toLocaleString()}</span>
      </p>
    </div>
    <button
      type="submit"
      class="bg-blue-500 disabled:opacity-50 text-white px-4 h-10 rounded-md"
      >Update</button
    >
  </form>
{:else}
  <p>Todo not found</p>
{/if}

<style>
  label {
    @apply mb-2 inline-block;
  }
  .input-field {
    @apply flex w-full rounded-md border border-gray-100 p-4;
  }
</style>
