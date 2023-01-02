import React, { useState } from "react";

function TodoList() {
  const initialTodos = [
    { content: "My first todo", id: 1, status: "true" },
    { content: "My second todo", id: 2, status: "false" },
    { content: "My third todo", id: 3, status: "true" },
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="todoList">
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked /> {todo.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
