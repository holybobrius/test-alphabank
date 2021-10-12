import React, { useEffect } from 'react';
import dataService from './dataService';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/Card';

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
  }, [dispatch])
  console.log(data)
  return (
    <div className="App">
      {data ? data.map(el => 
        <Card 
          name={el.name}
          weight={el.info.weight}
          height={el.info.height}
          img={el.info.sprites.front_default}
          abilities={el.info.abilities} 
          key={el.name} 
        />) : ''}
    </div>
  );
}

export default App;
