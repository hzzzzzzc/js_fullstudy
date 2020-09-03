import axios from 'axios';

const baseUrl = '';

// eslint-disable-next-line import/prefer-default-export
export function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params,
    // eslint-disable-next-line consistent-return
    }).then((res) => {
      const { errno, data } = res.data;
      // 解构error = res.data.error,data = res.data.data
      if (errno === 0) {
        return data;
      }
    }).catch((err) => {
      console.log(err);
    });
  };
}
