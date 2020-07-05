import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index'

function App() {
  const counter = useSelector(state => state.counter);
  const Logged = useSelector(state => state.isLogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => (dispatch(increment(5)))}> + </button>
      <button onClick={() => dispatch(decrement(2))}> - </button>

    <h3>Is user Logged? {Logged ? 'yes' : 'no'}</h3>
    </div>
  );
}

export default App;
