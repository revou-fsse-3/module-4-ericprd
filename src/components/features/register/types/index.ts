export type RegisterRequestParams = {
  name: string
  email: string
  password: string
}

export type ResponseRegister = {
  id: string
  name: string
  email: string
  password: string
  updated_at: string
  created_at: string
}
