import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <h1>TodoList App</h1>
      <TodoApp/>
    </div>
  );
}
export default App;


// components:
// 1. TodoApp: todos 
// 2. TodoForm => form + button: add todo
// 3. TodoList : todos.map(...)=>