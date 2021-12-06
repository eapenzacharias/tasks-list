import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const [state, setState] = useState({
    todos: [],
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

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({
      todos: [...state.todos, newTodo],
    });
  };

  useEffect(() => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = { todos: JSON.parse(temp) };
    if (loadedTodos) {
      setState(loadedTodos);
    }
  }, [setState]);

  useEffect(() => {
    const temp = JSON.stringify(state.todos);
    localStorage.setItem('todos', temp);
  }, [state.todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList
          todos={state.todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
