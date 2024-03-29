import { useState } from 'react';
import PropTypes from 'prop-types';

function InputTodo({ addTodoItem }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
}

InputTodo.defaultProps = {
  addTodoItem: () => {},
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func,
};

export default InputTodo;
