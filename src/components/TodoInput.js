import { useState } from "react";

function TodoInput({ addTodo, todos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.todo === "") {
      return false;
    }
    addTodo([...todos, todo]);
    console.log(todo);

    setTodo(initialValue);
  };

  const initialValue = {
    done: false,
    todo: "",
    id: Math.floor(Math.random() * 1000),
  };

  const onChangeInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const [todo, setTodo] = useState(initialValue);

  return (
    <div>
      <form className="todoInput" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          className="new-todo"
          placeholder="Ne yapacan hacım?"
          autoFocus
          value={todo.todo}
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}
export default TodoInput;
