import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const getInitialTodos = () => {
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
};

function TodosLogic() {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    }));
  };
  return (
    <>
      <InputTodo
        addTodoItem={addTodoItem}
      />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </>
  );
}

export default TodosLogic;
