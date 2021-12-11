import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

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
      // eslint-disable-next-line no-alert
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

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
