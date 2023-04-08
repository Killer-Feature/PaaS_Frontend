import axios from 'axios';

axios.defaults.baseURL = document.location.origin.replace(':5173', '') + '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
