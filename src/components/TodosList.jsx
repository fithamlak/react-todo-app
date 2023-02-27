import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(
  {
    todosProps,
    handleChange,
    delTodo,
    setUpdate,
  },
) {
  return (
    <ul>
      {
        todosProps.map((item) => (
          <TodoItem
            key={item.id}
            itemProp={item}
            handleChange={handleChange}
            delTodo={delTodo}
            setUpdate={setUpdate}
          />
        ))
      }
    </ul>
  );
}

TodosList.defaultProps = {
  todosProps: [],
  handleChange: () => {},
  delTodo: () => {},
  setUpdate: () => {},
};

TodosList.propTypes = {
  todosProps: PropTypes.instanceOf(Array),
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
