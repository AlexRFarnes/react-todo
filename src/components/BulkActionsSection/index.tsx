import styles from "./index.module.css";

interface Props {
  clearCompletedTodos: () => void;
  markAllCompleted: () => void;
}

export default function BulkActionsSection({
  clearCompletedTodos,
  markAllCompleted,
}: Props) {
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
