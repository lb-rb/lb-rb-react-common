import _superagent from 'superagent';
import superagentUse from 'superagent-use';

const superagent = superagentUse(_superagent);

superagent.use((req) => {
  req.set('X-API-Key', API_KEY)
     .set('Accept', 'application/json')
     .set('Content-Type', 'application/json')
  return req;
})

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body),
};

const Test = {
  create: (data) =>
    requests.post('/tests', data),
};

export {
  Test,
};
