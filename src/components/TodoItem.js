/* eslint-disable react/prop-types */
import React from 'react';
import { FaTrash } from 'react-icons/fa';
// import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    todo,
    handleChangeProps,
    deleteTodoProps,
  } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>
        <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
      </button>
    </li>
  );
};

export default TodoItem;
