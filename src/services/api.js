import axios from 'axios'

const ApiProduct = axios.create({
    baseURL: 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'
})

export default ApiProduct

