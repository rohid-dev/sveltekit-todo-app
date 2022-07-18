<script>
  import { page } from '$app/stores';
</script>

<nav class="flex flex-col p-4">
  <a href="/" class="text-2xl font-bold mb-4">Todo App</a>
  <a class="{`nav-item ${$page.routeId === '' ? 'selected' : ''}`}" href="/">
    All Todos
  </a>
  <a
    class="{`nav-item ${$page.routeId === 'favourites' ? 'selected' : ''}`}"
    href="/favourites">Favourites</a
  >
  <a
    class="{`nav-item ${$page.routeId === 'completed' ? 'selected' : ''}`}"
    href="/completed">Completed</a
  >
  <a
    class="{`nav-item ${$page.routeId === 'deleted' ? 'selected' : ''}`}"
    href="/deleted">Deleted</a
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
