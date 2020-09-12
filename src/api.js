let BASE_URL;

const location = window.location.href

location.indexOf('localhost') > -1 ? BASE_URL = 'http://localhost:3001/api' : BASE_URL = 'https://myusers-api.vercel.app/api';

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const res = await response.json();
  const { data } = res;
  return data;
}

const api = {
  users: {
    list() {
      return callApi('/users');
    },
    create(badge) {
      return callApi(`/users`, {
        method: 'POST',
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      return callApi(`/users/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/users/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/users/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;