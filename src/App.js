import React, { useEffect } from 'react';
import logo from './logo.svg';
import dataService from './dataService';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import store from './store';

function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state)

  useEffect(() => {
    dataService.getAll().then(res => {
      dispatch({
        type: 'DATA_INIT',
        data: res
      })
    })
  }, [])
  console.log(data)
  return (
    <div className="App">
      <ul>
        {data.map(el => {
          console.log(el.quote)
          return(
            <li>{el.quote}</li>
          )
          
        })}
      </ul>
    </div>
  );
}

export default App;
