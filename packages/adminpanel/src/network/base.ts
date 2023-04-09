import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = document.location.origin.replace(':5173', '') + '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

axios.interceptors.response.use((res) => res, (error) => {
    if (!error.response) {
        toast.error('Сервер не отвечает', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }

    return Promise.reject(error);
});
