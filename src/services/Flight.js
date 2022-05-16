import Client from './api'

export const GetAllFlights = async () => {
  
    const res = await Client.get('/flights')
    return res.data
}

export const searchFlight = async (flightType, ticketType, flight1, flight2) => {
    if (ticketType === 'one way') {
        const res = await Client.get('/flights/search', {params: {type: flightType, ...flight1}})
        return res.data
    } else {        
        const res1 = await Client.get('/flights/search', {
            params: {type: flightType, ...flight1}
        })
        const res2 = await Client.get('/flights/search', {
            params: {type: flightType, ...flight2}
        })
        const data = {  flights: res1.data,
                        returnFlights: res2.data 
                    }
        return data
    }
}