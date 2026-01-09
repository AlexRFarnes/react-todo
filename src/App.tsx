import styles from "./App.module.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import TodoList from "./components/TodoList";
import FilterSection from "./components/FilterSection";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";
import BulkActionsSection from "./components/BulkActionsSection";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: number, text: string) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, text: text } : todo))
    );
  };

  const clearCompletedTodos = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const markAllCompleted = () => {
    setTodos(prev => prev.map(todo => ({ ...todo, completed: true })));
  };

  return (
    <div className={styles.app}>
      <Header title="ToDo List" />
      <InputSection addTodo={addTodo} />
      <FilterSection filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <BulkActionsSection
        clearCompletedTodos={clearCompletedTodos}
        markAllCompleted={markAllCompleted}
      />
    </div>
  );
}

export default App;
