const base = 'http://39499d47.ngrok.io'
import axios from 'axios';


const http= {
  get: function(url, token, param = {}) { return axios.get(base+url, {
    headers: { Authorization: `JWT ${token}` }
  })},
  post: function(url, data = {}, token=null){ return axios.post(base+url, 
    data
  )}
};

export default http 
