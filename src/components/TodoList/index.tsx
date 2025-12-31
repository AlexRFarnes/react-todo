import type { Todo } from "../../App";
import styles from "./index.module.css";
import TodoItem from "../TodoItem";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodo,
}: Props) {
  return (
    <section className={styles.todoListSection}>
      <h2>Task List</h2>
      {todos.length === 0 ? (
        <p>Add a new task to get started</p>
      ) : (
        <ul className={styles.todoList}>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
