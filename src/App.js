import React, { useState } from "react";
import AddForm from "./component/AddForm";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  const completeHandler = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      })
    );
  };

  const deleteHandler = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  return (
    <React.Fragment>
      <div className="App">
        <AddForm todo={todo} setTodo={setTodo}></AddForm>
      </div>
      <div>
        {todo.map((item) => {
          return (
            <li key={item.id}>
              <input
                value={item.input}
                className={item.complete ? "textd" : "text"}
                onChange={(e) => e.preventDefault()}
              ></input>

              <button onClick={() => deleteHandler(item.id)}>Delete</button>
              <button onClick={() => completeHandler(item.id)}>
                {item.complete ? "Complete" : "Not Complete"}
              </button>
            </li>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default App;
