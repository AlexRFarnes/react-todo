import styles from "./index.module.css";

interface Props {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
}

export default function FilterSection({ filter, setFilter }: Props) {
  return (
    <section className={styles.filterSection}>
      <h2 className={styles.title}>Filter</h2>
      <div className={styles.filters}>
        <div className={styles.group}>
          <input
            type="radio"
            name="filter"
            id="all"
            value="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
          />
          <label htmlFor="all">All</label>
        </div>
        <div className={styles.group}>
          <input
            type="radio"
            name="filter"
            id="active"
            value="active"
            checked={filter === "active"}
            onChange={() => setFilter("active")}
          />
          <label htmlFor="active">Active</label>
        </div>
        <div className={styles.group}>
          <input
            type="radio"
            name="filter"
            id="completed"
            value="completed"
            checked={filter === "completed"}
            onChange={() => setFilter("completed")}
          />
          <label htmlFor="completed">Completed</label>
        </div>
      </div>
    </section>
  );
}
