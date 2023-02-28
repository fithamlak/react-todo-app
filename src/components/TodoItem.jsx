import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

function TodoItem(
  {
    itemProp,
    handleChange,
    delTodo,
    setUpdate,
  },
) {
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

TodoItem.defaultProps = {
  itemProp: null,
  handleChange: () => {},
  delTodo: () => {},
  setUpdate: () => {},
};

TodoItem.propTypes = {
  itemProp: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodoItem;
