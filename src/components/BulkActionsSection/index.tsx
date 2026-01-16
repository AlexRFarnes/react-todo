import styles from "./index.module.css";
import { useTodosStore } from "../../store/todos";

export default function BulkActionsSection() {
  const { clearCompletedTodos, markAllCompleted } = useTodosStore();

  return (
    <section className={styles.bulkActionsSection}>
      <h2 className={styles.title}>Actions</h2>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={clearCompletedTodos}>
          Clear Completed 🗑️
        </button>
        <button className={styles.button} onClick={markAllCompleted}>
          Mark All Complete ✖️
        </button>
      </div>
    </section>
  );
}
