import styles from "./index.module.css";
import TodoItem from "../TodoItem";
import type { Todo } from "../../store/todos";

interface Props {
  filteredTodos: Todo[];
}

export default function TodoList({ filteredTodos }: Props) {
  return (
    <section className={styles.todoListSection}>
      <h2>Task List</h2>
      {filteredTodos.length === 0 ? (
        <p>Add a new task to get started</p>
      ) : (
        <ul className={styles.todoList}>
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </section>
  );
}
