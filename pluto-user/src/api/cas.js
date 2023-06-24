import http from './http'

export const registerUser = (data, cb) => {
  return http.post('/register', data, cb)
}

export const validateUser = (token, cb) => {
  return http.get(`/verify?token=${token}`, cb)
}

export const loginUser = (data, cb) => {
  return http.post('/login', data, cb)
}

export const updatePassword = (data, cb) => {
  return http.post('/update-password', data, cb)
}
