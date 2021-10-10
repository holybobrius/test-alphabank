import axios from 'axios'

const url= 'https://placebear.com/200/300'

const getAll = async () => {
  const response = await axios.get(url, {
    headers: {'Access-Control-Allow-Origin': '*'}
  })
  return response.data
}

export default { getAll }