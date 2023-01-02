import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>

      <main>
        <form>
          <input type="text" name="newTodo" placeholder='Type a new todo'/>
        </form>

        <form>
          <input type="submit" value="Submit" />
        </form>

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
      </main>
    </div>
  );
}

export default App;
