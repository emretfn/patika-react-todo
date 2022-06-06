import { useState } from "react";

function TodoList({ todos, setTodos }) {
  const [status, setStatus] = useState("All");
  const classNameAdd = (todo) => {
    if (todo.done) {
      return "done";
    } else {
      return "not-done";
    }
  };

  const removeDone = () => {
    setTodos(todos.filter((todo) => todo.done === false));
  };

  const filtered = todos.filter((item) => {
    if (status === "All") {
      return item;
    } else if (status === "Active") {
      return item.done === false;
    } else if (status === "Completed") {
      return item.done === true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <div className="todoList">
        {filtered.map((todo, index) => {
          return (
            <div
              onClick={() => {
                setTodos(
                  filtered.map((el) =>
                    el.id === todo.id ? { ...el, done: !el.done } : el
                  )
                );
              }}
              className={classNameAdd(todo)}
              key={index}
            >
              {todo.todo}
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div>{filtered.length} items left</div>
        <div>
          <ul>
            <li
              className={status === "All" ? "active" : ""}
              onClick={() => setStatus("All")}
            >
              All
            </li>
            <li
              className={status === "Active" ? "active" : ""}
              onClick={() => setStatus("Active")}
            >
              Active
            </li>
            <li
              className={status === "Completed" ? "active" : ""}
              onClick={() => setStatus("Completed")}
            >
              Completed
            </li>
          </ul>
        </div>
        <div onClick={removeDone} className="clear-completed">
          Clear Completed
        </div>
      </div>
    </div>
  );
}
export default TodoList;
