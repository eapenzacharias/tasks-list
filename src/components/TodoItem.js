import React from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

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

TodoItem.defaultProps = {
  todo: { id: 0, title: '', completed: false },
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
