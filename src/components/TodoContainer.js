import React, { useState } from 'react';
import TodosList from './TodosList';
// import PropTypes from 'prop-types';

const TodoContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  });

  return (
    <>
      <h1>To-Do List</h1>
      <ul>
        <TodosList todos={state.todos} />
      </ul>
    </>
  );
};

export default TodoContainer;
