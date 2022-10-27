import { Provider } from 'react-redux';
import { configureS } from 't';
import AppRouter from './comps/appRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
