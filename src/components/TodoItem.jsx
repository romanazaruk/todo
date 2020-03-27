import React, { useContext } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  const { removeTodo } = useContext(Context);
  return (
    <li className="todoItem">
      <span className={classes.join("")}>
        <input
          type="checkbox"
          checked={todo.completed}
          className="inputItem"
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <DeleteIcon
        className="deleteIcon"
        onClick={removeTodo.bind(null, todo.id)}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default TodoItem;
