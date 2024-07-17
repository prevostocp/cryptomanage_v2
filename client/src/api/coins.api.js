import axios from 'axios'

const coinsApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/cryptos/api/v1/coins/'
})

export const getAllCoins = () => coinsApi.get('/')
export const getCoin = (id) => coinsApi.get(`/${id}/`)
export const createCoin = (coin) => coinsApi.post('/', coin)
export const deleteCoin = (id) => coinsApi.delete(`/${id}`)
export const updateCoin = (id, coin) => coinsApi.put(`/${id}/`, coin)
