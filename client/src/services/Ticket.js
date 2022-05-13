import Client from './api'

export const BookTicket = async (user, passenger, flight) => {
    const res = Client.post('/tickets', {user, passenger, flight})
    return res.data
}