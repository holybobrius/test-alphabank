import axios from 'axios'

const url= 'https://pokeapi.co/api/v2/pokemon'

const getAll = async () => {
  const response = await axios.get(url, {
    headers: {'Access-Control-Allow-Origin': '*'}
  })
  return response.data
}

export default { getAll }