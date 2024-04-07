import axios from 'axios'
const baseUrl = process.env.MONGODB_URI

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newVenture) => {
  const request = axios.post(baseUrl, newVenture)
  return request.then(response => response.data)
}

export default { getAll, create }