import Client from './api'

export const GetVehicle = async (type, id) => {
    if (type === "aircraft") {
        const res = await Client.get(`aircrafts/${id}`)
        return res.data
    } else if (type === "rocket") {
        const res = await Client.get(`rockets/${id}`)
        return res.data
    } else return null
}