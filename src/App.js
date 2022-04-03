
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const increment = ()=>{
    dispatch({
      type: 'INC'
    })
  }
  const decrement = ()=>{
    dispatch({
      type: 'DEC'
    })
  }
  const add = ()=>{
    dispatch({
      type: 'ADD'
    })
  }

  return (
    <div className="App">
      <h2>counter :</h2>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
