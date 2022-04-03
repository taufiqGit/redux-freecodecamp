
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/index'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const increment = ()=>{
    dispatch(actions.increment())
  }
  const decrement = ()=>{
    dispatch(actions.decrement())
  }
  const add = ()=>{
    dispatch(actions.add(20))
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
