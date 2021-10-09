import axios from 'axios'

const url= 'https://http.cat/404'

const getAll = async () => {
  const response = await fetch(url, {
    mode: 'cors'
  })
  return response.json()
}

export default { getAll }