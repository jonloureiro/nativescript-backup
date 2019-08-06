import { fromObject, Observable } from "tns-core-modules/data/observable";
import { fetch } from "tns-core-modules/fetch"

const AUTH_URL = 'https://jonloureiro-smartplug.herokuapp.com/auth'


const user = fromObject({
  name: '',
  email: 'me@jonloureiro.dev',
  password: '123456',
})

const init = async (): Promise<boolean> => {
  const response = await fetch(`${AUTH_URL}/private`, {
    method: "GET",
  });
  return response.status === 200;
}

const register = async (name: string, email: string, password: string): Promise<boolean> => {
  const response = await fetch(`${AUTH_URL}/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" }
  });
  return response.status === 201;
}

const login = async (email: string, password: string): Promise<boolean> => {
  const response = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  });
  return response.status === 200;
}


export {
  user,
  init,
  register,
  login,
};
