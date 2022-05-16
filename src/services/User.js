import Client from './api'

export const LogInUser = async (data) => {
  
    const res = await Client.post('/users/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.user))
    return res.data.user
}

export const RegisterUser = async (data) => {
      const res = await Client.post('/users/register', data)
      return res.data
  }

export const UpdateUser = async (userId, data) => {
    const res = await Client.put(`/users/${userId}`, data)
    return res.data.payload
}

export const DeleteUser = async (userId, password) => {
    console.log(userId, password, "Delete User")
    const res = await Client.delete(`/users/${userId}`, {data: {password: password}})
    return res.data.user
}

export const getTicketsByUserId = async (userId) => {
    const res = await Client.get(`/tickets/${userId}`)
    return res.data
}

