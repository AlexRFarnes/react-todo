import styles from "./App.module.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import TodoList from "./components/TodoList";
import FilterSection from "./components/FilterSection";

import { useState } from "react";
import BulkActionsSection from "./components/BulkActionsSection";
import { useTodosStore } from "./store/todos";

function App() {
  const { todos } = useTodosStore();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div className={styles.app}>
      <Header title="ToDo List" />
      <InputSection />
      <FilterSection filter={filter} setFilter={setFilter} />
      <TodoList filteredTodos={filteredTodos} />
      <BulkActionsSection />
    </div>
  );
}

export default App;
