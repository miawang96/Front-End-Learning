import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000/';

export function get(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
