import axios from 'axios'

const stakingsApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/cryptos/api/v1/stakings/'
})

export const getAllStakings = () => stakingsApi.get('/')
export const getStakings = (id) => stakingsApi.get(`/${id}/`)
export const createStakings = (staking) => stakingsApi.post('/', staking)
export const deleteStakings = (id) => stakingsApi.delete(`/${id}`)
export const updateStakings = (id, staking) => stakingsApi.put(`/${id}/`, staking)