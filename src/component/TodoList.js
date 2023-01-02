function TodoList() {
  return (
    <div className="todoList">
      <h2>Todos</h2>
      <div className="todo">
        <input type="checkbox" id="react"></input>
        <label for="react"> Learn React</label>
      </div>

      <div className="todo">
        <input type="checkbox" id="awesome"></input>
        <label for="awesome"> Be Awesome !</label>
      </div>
    </div>
  );
}

export default TodoList;
