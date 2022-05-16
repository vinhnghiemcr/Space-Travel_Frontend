import Client from './api'

export const BookTicket = async (user, passenger, flight) => {
    const res = await Client.post('/tickets', {user, passenger, flight})
    console.log(res, "RES")
    return res.data
}

export const GetTicket = async (id) => {
    const res = await Client.get(`/tickets/${id}`)
    return res.data
}
export const UpdateTicket = async (id, qr) => {
    const res = await Client.put(`/tickets/qr/${id}`, {qr})
    return res.data
}

export const GetAllTicketsOfUser = async (id) => {
    const res = await Client.get(`tickets/user/${id}`)
    return res.data
}

export const CancelTicket = async (id) => {
    const res = await Client.delete(`tickets/${id}`)
    return res.data
}

export const UpdateTicketOfUser = async (id, paseenger) => {
    const res = await Client.put(`tickets/${id}`, paseenger)
    return res.data
}