

const Card = props => {
  return(
    <div className='card'>
      <h3>{props.name}</h3>
      <img src={props.img} alt={props.name} />
      <p>height: {props.height}</p>
      <p>weight: {props.weight}</p>
      <strong>abilities:</strong>
      <ul>{props.abilities.map(el => <li>{el.ability.name}</li>)}</ul>
    </div>
  )
}

export default Card