import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodosState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
  clearCompletedTodos: () => void;
  markAllCompleted: () => void;
}

export const useTodosStore = create<TodosState>()(
  persist(
    set => ({
      todos: [],
      addTodo: (text: string) =>
        set(state => {
          const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
          };
          return { todos: [...state.todos, newTodo] };
        }),
      toggleTodo: (id: number) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id: number) =>
        set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
      updateTodo: (id: number, text: string) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, text: text } : todo
          ),
        })),
      clearCompletedTodos: () =>
        set(state => ({ todos: state.todos.filter(todo => !todo.completed) })),
      markAllCompleted: () =>
        set(state => ({
          todos: state.todos.map(todo => ({ ...todo, completed: true })),
        })),
    }),
    { name: "todos", storage: createJSONStorage(() => localStorage) }
  )
);
