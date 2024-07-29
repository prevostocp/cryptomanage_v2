import axios from 'axios'

const entidadApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/cryptos/api/v1/'
})

export const getAllRegisters = (entidad) => entidadApi.get(`${entidad}/`)
export const getRegister = (entidad, id) => entidadApi.get(`${entidad}/${id}/`)
export const createRegister = (entidad, coin) => entidadApi.post(`${entidad}/`, coin)
export const deleteRegister = (id, entidad) => entidadApi.delete(`${entidad}/${id}`)
export const updateRegister = (name, id, entidad) => entidadApi.put(`${name}/${id}/`, entidad)
