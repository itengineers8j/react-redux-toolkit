import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement } from './redux/counterSlice';
function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.counter.count);
  return (
    <div className="App">
      <h1>React Redux Toolkit</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
