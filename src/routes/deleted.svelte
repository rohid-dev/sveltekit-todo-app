<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import { todos } from '../stores/todos';
  import type { ITodo } from '../models/todo';
  import { onDestroy } from 'svelte';

  export let allTodos: ITodo[] = [];

  const unsubscribe = todos.subscribe((t) => {
    allTodos = t.filter((t) => t.isDeleted);
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="flex flex-col w-full h-full">
  <TodoList data="{allTodos}" />
</div>
