/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    todo,
    handleChangeProps,
  } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      {todo.title}
    </li>
  );
};

export default TodoItem;
