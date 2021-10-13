import React, { useEffect, useState } from 'react';
import dataService from './dataService';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/Card';

function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state)

  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    dataService.getAll().then(res => {
      dispatch({
        type: 'DATA_INIT',
        data: res
      })
    })
  }, [dispatch])
  console.log(data)

  const like = card => {
    console.log(card)
    const updatedCard = { ...card, liked: !card.liked }
    console.log(updatedCard)
    dispatch({
      type: 'LIKE',
      data: updatedCard
    })
  }

  return (
    <div className="App">
      <label class="switch">
        <input onChange={() => setFiltered(!filtered)} type="checkbox" />
        <span class="slider round"></span>
      </label>
      <div className='card-container'>
        {!filtered ? data.map(el => 
          <Card 
            name={el.name}
            weight={el.info.weight}
            height={el.info.height}
            img={el.info.sprites.front_default}
            abilities={el.info.abilities} 
            key={el.name}
            liked={el}
            handleClick={() => like(el)} 
          />) : data.filter(n => n.liked).map(el => 
            <Card 
            name={el.name}
            weight={el.info.weight}
            height={el.info.height}
            img={el.info.sprites.front_default}
            abilities={el.info.abilities} 
            key={el.name}
            liked={el}
            handleClick={() => like(el)} 
          />
          )}
      </div>
    </div>
  );
}

export default App;
