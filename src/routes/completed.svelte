<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import AddTodoForm from '../components/AddTodoForm.svelte';
  import { todos } from '../stores/todos';
  import type { ITodo } from '../models/todo';
  import { onDestroy } from 'svelte';

  export let allTodos: ITodo[] = [];

  const unsubscribe = todos.subscribe((t) => {
    allTodos = t.filter((t) => !t.isDeleted && t.isCompleted);
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="flex flex-col w-full h-full">
  <TodoList data="{allTodos}" />
  <AddTodoForm isCompleted />
</div>
