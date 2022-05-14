import Client from './api'

export const GetDestination = async (type, id) => {
    if (type === "airport") {
        const res = await Client.get(`airports/${id}`)
        return res.data
    } else if (type === "planet") {
        const res = await Client.get(`planets/${id}`)
        return res.data
    } else return null
}