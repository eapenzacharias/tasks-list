/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [state, setState] = useState({
    title: '',
  });

  const { addTodoItem } = props;

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      title: '',
    });
    if (state.title.trim()) {
      addTodoItem(state.title);
      setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={state.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
