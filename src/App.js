import './App.css';
import AddList from './components/AddItem';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react'
import { Context } from './context/Context';

function App() {

  const [todos, setTodos] = useState([])

  // GET запрос
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  // POST
  function addNewTodo(title) {
    let newList = {
      userId: Date.now(),
      id: Date.now(),
      title,
      completed: false
    }
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify(newList),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(res => res.json())
      .then(data => setTodos([newList, ...todos]))
  }

  // PUT
  function changeCompleted(id) {
    let changedTasks = todos.map(elem => {
      if (elem.id === id) {
        elem.completed = !elem.completed
      }
      return elem
    })
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(changedTasks),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(res => res.json())
      .then(data => setTodos(changedTasks))
  }

  // DELETE
  function deleteTask(id) {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => setTodos(todos.filter(elem => elem.id !== id)))
  }

  return (
    <Context.Provider value={{ changeCompleted, deleteTask }}>
      <div>
        <AddList
          addNewTodo={addNewTodo}
        />
        <TodoList
          todos={todos}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
