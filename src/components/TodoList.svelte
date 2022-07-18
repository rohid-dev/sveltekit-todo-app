<script lang="ts">
  import type { ITodo } from '../models/todo';
  import { todos } from '../stores/todos';
  import moment from 'moment';
  export let data: ITodo[];

  const toggleCompleted = (id: string) => {
    todos.update((prev) => [
      ...prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      }),
    ]);
  };
  const toggleDelete = (id: string) => {
    todos.update((prev) => [
      ...prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDeleted: !todo.isDeleted,
          };
        }
        return todo;
      }),
    ]);
  };
  const toggleFavourite = (id: string) => {
    todos.update((prev) => [
      ...prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isFavourite: !todo.isFavourite,
          };
        }
        return todo;
      }),
    ]);
  };
</script>

<div class="flex flex-1 flex-col overflow-y-auto p-4">
  <ul class="flex flex-col gap-2">
    {#each data as todo}
      <li class="flex w-full items-center gap-4 overflow-hidden px-4 py-1">
        <button
          class="action-btn complete-btn"
          class:active="{todo.isCompleted}"
          on:click="{() => toggleCompleted(todo.id)}"
        >
          {todo.isCompleted ? '✅' : '❎'}
        </button>
        <a href="{`/todo/${todo.id}`}" class="flex-1 text-start">
          <p class="{`truncate ${todo.isCompleted ? 'line-through' : ''}`}">
            {todo.title}
          </p>
          <p class="text-sm text-gray-600">
            <span>{moment(todo.createdAt).format('DD MMM, YYYY')}</span>
            {#if !!todo.desc}
              <span> • {todo.desc}</span>
            {/if}
          </p>
        </a>
        <button
          class="action-btn favourite-btn"
          class:active="{todo.isFavourite}"
          on:click="{() => toggleFavourite(todo.id)}">⭐</button
        >
        <button
          class="action-btn delete-btn"
          class:active="{todo.isDeleted}"
          on:click="{() => toggleDelete(todo.id)}"
          >{todo.isDeleted ? '♻️' : '🗑️'}</button
        >
      </li>
      <hr />
    {/each}
  </ul>
</div>

<style>
  .action-btn {
    @apply h-10 w-10 rounded-full text-xl;
  }
  .complete-btn {
    @apply bg-green-500;
  }
  .delete-btn {
    @apply bg-red-500;
  }
  .favourite-btn {
    @apply bg-yellow-500;
  }
  .complete-btn,
  .delete-btn,
  .favourite-btn {
    @apply bg-opacity-0 hover:bg-opacity-10;
  }
  .complete-btn.active,
  .delete-btn.active,
  .favourite-btn.active {
    @apply bg-opacity-20;
  }
</style>
