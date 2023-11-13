import './App.scss';
//import { Home } from './pages/home/Home';
//import { List } from './components/list/List';
import { Task } from './components/task/Task';

function App() {
  return (
    <div className='App'>
      <h2>To Do</h2>
        <div className="container">
          <div>Hello world</div>
        </div>
    </div>
  );
}

export const URL = process.env.REACT_APP_URL || 'http://localhost:5001/tasks';
export default App;
