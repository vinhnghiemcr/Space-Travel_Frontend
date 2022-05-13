import Client from './api'

export const getVehicle = async (type, id) => {
    if (type === "aircraft") {
        const res = await Client.get(`aircrafts/${id}`)
        return res.data
    }
}