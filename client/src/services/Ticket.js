import Client from './api'

export const BookTicket = async (passeger, flight) => {
    const res = Client.post('/tickets', {passeger, flight})
}