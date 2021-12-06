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
    setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  const delTodo = (id) => {
    setState({
      todos: [
        ...state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  return (
    <>
      <Header />
      <ul>
        <TodosList
          todos={state.todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
      </ul>
    </>
  );
};

export default TodoContainer;
