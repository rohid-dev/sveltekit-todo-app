<script>
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { todos } from '../stores/todos';
  export let allTodoCount = 0;
  export let completedTodoCount = 0;
  export let favouriteTodoCount = 0;
  export let deletedTodoCount = 0;

  const unsubscribe = todos.subscribe((value) => {
    allTodoCount = value.filter((todo) => !todo.isDeleted).length;
    completedTodoCount = value.filter(
      (todo) => !todo.isDeleted && todo.isCompleted
    ).length;
    favouriteTodoCount = value.filter(
      (todo) => !todo.isDeleted && todo.isFavourite
    ).length;
    deletedTodoCount = value.filter((todo) => todo.isDeleted).length;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<nav class="flex flex-col p-4">
  <a href="/" class="mb-4 text-2xl font-bold">Todo App</a>
  <a
    class="{`nav-item ${$page.routeId === '@todos' ? 'selected' : ''}`}"
    href="/"
  >
    <span class="flex-1">All Todos</span>
    <span>{allTodoCount}</span>
  </a>
  <a
    class="{`nav-item ${
      $page.routeId === 'favourites@todos' ? 'selected' : ''
    }`}"
    href="/favourites"
  >
    <span class="flex-1">Favourites</span>
    <span>{favouriteTodoCount}</span>
  </a>
  <a
    class="{`nav-item ${
      $page.routeId === 'completed@todos' ? 'selected' : ''
    }`}"
    href="/completed"
  >
    <span class="flex-1">Completed</span>
    <span>{completedTodoCount}</span>
  </a>
  <a
    class="{`nav-item ${$page.routeId === 'deleted@todos' ? 'selected' : ''}`}"
    href="/deleted"
  >
    <span class="flex-1">Deleted</span>
    <span>{deletedTodoCount}</span></a
  >
</nav>

<style>
  .nav-item {
    @apply flex h-10 w-full items-center rounded-md px-4 hover:bg-gray-200;
  }
  .nav-item.selected {
    @apply bg-blue-500 text-white;
  }
</style>
