import React, { useState } from 'react';
import TodosList from './TodosList';
import Header from './Header';

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

  const handleChange = (id) => {
    const objIndex = state.todos.findIndex((obj) => obj.id === id);
    const updatedTodo = state.todos;
    updatedTodo[objIndex].completed = !state.todos[objIndex].completed;
    setState({
      todos: updatedTodo,
    });
  };

  return (
    <>
      <Header />
      <ul>
        <TodosList todos={state.todos} handleChangeProps={handleChange} />
      </ul>
    </>
  );
};

export default TodoContainer;
