import { authHeader } from "../_helpers";
import axios from 'axios';

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(email) {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email })
  // };

  // return fetch(
  //   `${process.env.VUE_APP_API_URL}/users/authenticate`,
  //   requestOptions
  // )
  //   .then(handleResponse)
  //   .then(user => {
  //     // login successful if there's a jwt token in the response
  //     if (user.token) {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem("user", JSON.stringify(user));
  //     }

  //     return user;
  //   });

  return axios
    .post("http://localhost:8081/api/login", { email: email })
    .then(result => {
      console.log('login success');
      return result;

    })
    .catch(error => {
      console.error(error);
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(user)
  // };

  // return fetch(
  //   `${process.env.VUE_APP_API_URL}/users/register`,
  //   requestOptions
  // ).then(handleResponse);

  return axios
    .post("http://localhost:8081/api/users", user)
    .then(result => {
      console.log("register success");
      return result;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${process.env.VUE_APP_API_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/users/${id}`,
    requestOptions
  ).then(handleResponse);
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/users/${user.id}`,
    requestOptions
  ).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/users/${id}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  console.log(response);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
