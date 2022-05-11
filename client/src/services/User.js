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