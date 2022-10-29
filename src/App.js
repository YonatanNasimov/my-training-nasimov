import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AppRouter from './comps/appRouter';
import todoSlice from './features/todoSlice';
import './App.css';

const myStore = configureStore({
  reducer: {
    todoSlice
  }
})

function App() {
  return (
    <Provider store={myStore}>
      <AppRouter />
    </Provider>
  );
}

export default App;
