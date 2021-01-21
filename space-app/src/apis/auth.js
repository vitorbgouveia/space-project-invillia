import axios from "axios";
import { history } from "../history";
import * as jsonwebtoken from "jsonwebtoken";

const authUrl = "http://localhost:3001";

const isLogged = () => {

  const token = localStorage.getItem('token');
  const decodedToken = jsonwebtoken.decode(token);

  if(!decodedToken || (decodedToken.exp < ((new Date()).getTime() / 1000))) {
    return false;
  }

  return true;
};

const login = async ({ login, password }) => {
  return await axios
    .post(`${authUrl}/auth`, { login, password })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userNickName", response.data.userNickName);
      localStorage.setItem("userEmail", response.data.userEmail);
      localStorage.setItem("userId", response.data.userId);
    });
};

const logout = async () => {
  return await axios
    .post(`${authUrl}/logout`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then(() => {
      localStorage.clear();
      history.push('/login');
    });
};

export { isLogged, login, logout };
