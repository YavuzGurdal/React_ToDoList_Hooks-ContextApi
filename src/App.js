

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>

      <form autoComplete="off">
        <input type="text" name="todos" id="todos" required placeholder="What to do?" />
        <button type="submit">Create</button>
      </form>

      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="" />
            To do
          </label>
          <button>Edit</button>
        </li>
        <li>
          <label htmlFor="" >
            <input type="checkbox" id="" />
            To do
          </label>
          <button>Edit</button>
        </li>
      </ul>

      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          ALL TODOS
        </label>
        <p>You have 0 to do</p>
        <button id="delete">Delete</button>
      </div>

    </div>
  );
}

export default App;
