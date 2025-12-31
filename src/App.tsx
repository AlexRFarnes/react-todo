import styles from "./App.module.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: number, text: string) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, text: text } : todo))
    );
  };

  return (
    <div className={styles.app}>
      <Header title="ToDo List" />
      <InputSection addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
