import React from 'react';
import PropTypes from 'prop-types';

const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.string.isRequired,
};

export default TodosList;
