import React, { useState } from "react";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }
  return (
    <form className="todoInput" onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default AddTodo;
