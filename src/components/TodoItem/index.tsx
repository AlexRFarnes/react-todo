import { format } from "date-fns";
import type { Todo } from "../../App";
import styles from "./index.module.css";
import { useState, useRef } from "react";
import EditTodoForm from "../EditTodoForm";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodo,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodo(todo.id);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleSaveEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    updateTodo(todo.id, editedText);
  };

  const handleCancelEditTodo = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  const handleEditTodo = () => {
    setIsEditing(true);
    inputRef.current?.focus();
  };

  return (
    <li className={styles.todoItem}>
      {isEditing ? (
        <EditTodoForm
          editedText={editedText}
          handleInputChange={handleInputChange}
          handleSaveEditTodo={handleSaveEditTodo}
          handleCancelEditTodo={handleCancelEditTodo}
          ref={inputRef}
        />
      ) : (
        <>
          <input
            type="checkbox"
            onChange={handleToggleTodo}
            checked={todo.completed}
          />
          <div className={styles.todoContent}>
            <span className={styles.todoText}>{todo.text}</span>
            <span className={styles.todoDateContainer}>
              Created:
              <span className={styles.todoDate}>
                {format(new Date(todo.createdAt), "dd, MMMM, yyyy HH:mm")}
              </span>
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${styles.editButton}`}
              onClick={handleEditTodo}>
              ✏️
            </button>
            <button
              className={`${styles.button} ${styles.deleteButton}`}
              onClick={handleDeleteTodo}>
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
}
