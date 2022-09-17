import React, { useState } from "react";

const AddForm = ({ todo, setTodo }) => {
  const [input, setInput] = useState("");

  const completeDeleteHandler = () => {
    setTodo(todo.filter((item) => item.complete === false));
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo((item) => {
      return [
        ...item,
        { input: input, complete: false, id: Math.floor(Math.random() * 100) },
      ];
    });
    setInput("");
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="enter fruits name..."
          value={input}
          onChange={inputHandler}
        ></input>
        <button>Add</button>
      </form>
      <div>
        <button onClick={completeDeleteHandler}>DeleteComplete</button>
      </div>
    </div>
  );
};

export default AddForm;
