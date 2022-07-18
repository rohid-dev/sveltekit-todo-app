import type { ITodo } from 'src/models/todo';
import { writable } from 'svelte/store';

export const todos = writable<ITodo[]>([
  {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'This is a todo',
  },
  {
    id: '2',
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'This is an other todo',
    isCompleted: true,
  },
  {
    id: '3',
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'This is a todo with description',
    desc: 'This is a todo description',
  },
]);
