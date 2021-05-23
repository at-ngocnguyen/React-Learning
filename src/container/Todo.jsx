import React, { useState } from 'react';
import TodoForm from 'components/todo/TodoForm/TodoForm';
import TodoList from 'components/todo/TodoList/TodoList';


function Todo(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
  ]);
  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    if(formValues){
      const newTodoList = [...todoList];
      const newTodo = { id: todoList.length + 1, ...formValues }
      newTodoList.push(newTodo);
      setTodoList(newTodoList);
    } else {
      alert('Please input value');
    }
  }
  return (
    <div>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default Todo;
