import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todos-app">
      <TodoInput addTodo={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default Todos;
