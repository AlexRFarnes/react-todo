import { useTodosStore } from "../../store/todos";
import styles from "./index.module.css";
import { useState, useRef } from "react";

export default function InputSection() {
  const { addTodo } = useTodosStore();
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo.trim() === "") {
      setError("Todo cannot be empty");
      inputRef.current?.focus();
      return;
    }

    addTodo(todo);
    setTodo("");
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    setError("");
  };

  return (
    <section className={styles.inputSection}>
      <h2 className={styles.title}>Add a new todo</h2>
      <form className={styles.form} onSubmit={handleAddTodo}>
        <input
          className={styles.input}
          ref={inputRef}
          type="text"
          placeholder="Add a new todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button className={styles.button} type="submit">
          Add Todo ➕
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </section>
  );
}
