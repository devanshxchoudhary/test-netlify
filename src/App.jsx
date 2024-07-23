import { useState, useEffect, memo } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          {
            title: "First Todo",
            description: "This is the description for first todo",
          },
          {
            title: "Second Todo",
            description: "This is the description for second todo",
          },
          {
            title: "Third Todo",
            description: "This is the description for third todo",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addNewTodo() {
    setTodos([
      ...todos,
      {
        title: "new todo title",
        description: "new todo description",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addNewTodo}>Add new todo</button>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

const Todo = memo(function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
});

export default App;
