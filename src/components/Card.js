

const Card = props => {
  return(
    <div className='card'>
      <div className='title-container'>
        <div className='header-container'>
          <h3>{props.name}</h3>
          <button style={props.liked ? {'color': '#FF6C6C'} : {}} onClick={props.handleClick} className='like'>
            <p>&#10084;</p>
          </button>
        </div>
        <img src={props.img} alt={props.name} />
      </div>
      <div className='stats-container'>
        <p>height: {props.height}</p>
        <p>weight: {props.weight}</p>
      </div>
      <div className='abilities-container'>
        <strong>abilities:</strong>
        <ul>{props.abilities.map(el => <li>{el.ability.name}</li>)}</ul>
      </div>
    </div>
  )
}

export default Card