import Client from './api'

export const LogInUser = async (data) => {
  
    const res = await Client.post('/users/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.user
}

export const RegisterUser = async (data) => {
      const res = await Client.post('/users/register', data)
      return res.data
  }

export const UpdateUser = async (userId, data) => {
    const res = await Client.put(`/users/${userId}`, data)
    return res.data
}

export const DeleteUser = async (userId, passwordBody) => {
    const res = await Client.delete(`/users/${userId}`, passwordBody)
    return res.data
}

export const getTicketsByUserId = async (userId) => {
    const res = await Client.get(`/tickets/${userId}`)
    return res.data
}

