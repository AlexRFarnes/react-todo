import { forwardRef } from "react";
import styles from "./index.module.css";

interface Props {
  editedText: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEditTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCancelEditTodo: () => void;
}

const EditTodoForm = forwardRef<HTMLInputElement, Props>(
  (
    { editedText, handleInputChange, handleSaveEditTodo, handleCancelEditTodo },
    ref
  ) => {
    return (
      <form className={styles.form} onSubmit={handleSaveEditTodo}>
        <input
          className={styles.input}
          ref={ref}
          type="text"
          value={editedText}
          onChange={handleInputChange}
        />
        <div className={styles.buttonContainerEdit}>
          <button
            className={`${styles.button} ${styles.saveButton}`}
            type="submit">
            ✔️
          </button>
          <button
            className={`${styles.button} ${styles.cancelButton}`}
            type="button"
            onClick={handleCancelEditTodo}>
            ❌
          </button>
        </div>
      </form>
    );
  }
);

export default EditTodoForm;
