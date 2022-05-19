// import { authHeader } from "../helpers/auth-header";


function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        location.reload(true);
      }

      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    }

    return data;
  });
}

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(handleResponse)
    .then((users) => {
      return users;
    });
}
function getOrders() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(handleResponse)
    .then((orders) => {
      return orders;
    });
}


export default {
  getUsers,
  getOrders
};