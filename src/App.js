import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AppRouter from './comps/appRouter';
import './App.css';
import counterSlice from './features/counterSlice';

const myStore = configureStore({
  reducer: {
    counterSlice
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
