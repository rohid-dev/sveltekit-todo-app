import type { ITodo } from 'src/models/todo';
import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const todos = writable<ITodo[]>([], (set) => {
  if (browser) {
    const todos = localStorage.getItem('todos');
    console.log({ todos });
    if (todos) {
      set(JSON.parse(todos));
    }
  }
});

if (browser) {
  todos.subscribe((value) => {
    localStorage.setItem('todos', JSON.stringify(value));
  });
}
