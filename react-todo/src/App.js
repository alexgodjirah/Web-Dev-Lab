import './styles/App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import todoData from './data/todoData.json';

function App() {
  const [todos, setTodos] = useState(todoData);

  
  const handleAdd = (userInput) => {
    let copy = [...todos, {
      id: todos.length + 1, task: userInput, complete: false
    }];

    setTodos(copy);
  };

  const handleComplete = (id) => {
    let completedTodo = todos.map(todo => (
      todo.id === Number(id) ? {...todo, complete: !todo.complete} : {...todo}
    ));

    setTodos(completedTodo);
  }

  const clearCompletedTodo = () => {
    let filteredTodo = todos.filter(todo => (
      !todo.complete
    ));

    setTodos(filteredTodo);
  }

  return (
    <div>
      <div className='navbar'>
        <Navbar data={todos.length} />
      </div>

      <div className='body'>
        <div>
          <TodoForm handleAdd={handleAdd} />
        </div>

        <div className='todoList'>
          {
            todos.map(todo => {
              return (
                <>
                  <div key={todo.id} className={!todo.complete ? 'todoElement1' : 'todoElement2'}>
                    <h3 key={todo.id}>{todo.task}</h3>
                    <button className='taskButton' onClick={() => handleComplete(todo.id)}>Complete</button>
                  </div>
                </>
              )
            })
          }

          <button onClick={() => clearCompletedTodo()}>Clear To Do</button>
        </div>
      </div>
    </div>
  );
}

export default App;