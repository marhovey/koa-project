import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

let tokens = [];
let cancelToken = axios.CancelToken;
let cancel = (token) => {
  let ind = tokens.findIndex(
    item =>
      item.requestName === `${token.url}&${token.method}`
  );
  if (ind !== -1) {
    tokens[ind].f();
    tokens.splice(ind, 1)
  }
};

axios.interceptors.request.use(
  config => {
    config.requestName = `${config.url}&${config.method}`
    cancel(config);
    config.cancelToken = new cancelToken((c) => {
      tokens.push({requestName: config.requestName, f: c})
    })
    return config
  },
  err => {
    return Promise.reject(err)
  }
);

axios.interceptors.response.use(
  res => {
    cancel(res.config)
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

export server = function (data) {
  return axios({
    url: `${data.url}`,
    method: data.type,
    data: data.data
  }).then(res => {
    if (res.data.errCode === 0) {
      return data.sucFunc(res.data)
    } else {
      data.errFunc()
    }
  }).catch(err => {
    data.errFunc()
  })
}