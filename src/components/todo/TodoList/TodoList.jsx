import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import './TodoList.scss'
function TodoList(props) {
  const { todos, onTodoClick } = props
  function handleDelete(todo) {
    onTodoClick(todo)
  }
  return (
    <ListGroup as="ul">
      {todos.map(todo => (
        <ListGroup.Item key={todo.id} className="todo_list" as="li">
          <p> {todo.title}</p>
          <Button variant="outline-danger" onClick={() => handleDelete(todo)}>Delete</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
