import './App.scss';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export const URL = process.env.REACT_APP_URL || 'http://localhost:8000';
export default App;
