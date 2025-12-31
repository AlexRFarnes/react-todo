import styles from "./index.module.css";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className={styles.header}>
      <h1>{title} ✔️</h1>
    </header>
  );
}
