import React, { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Navbar from './Navbar';
import NotMatch from '../pages/NotMatch';
import About from '../pages/About';
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

  const Home = () => (
    <>
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
    </>
  );

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
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
};

export default TodoContainer;
