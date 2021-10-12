import axios from 'axios'

const url= 'https://pokeapi.co/api/v2/pokemon'

const getAll = async () => {
  const response = await axios.get(url, {
    headers: {'Access-Control-Allow-Origin': '*'}
  })
  const data = response.data.results.map(async el => {
    const info = await axios.get(el.url)
    return { name: el.name, info: info.data }
  })
  const results = await Promise.all(data)
  return results
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }