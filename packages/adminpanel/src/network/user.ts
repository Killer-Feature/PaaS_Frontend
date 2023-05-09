import axios from 'axios';

const LoginNet = { 
    signIn: (data) => {
        return (axios.post('/login', data));
    },
    logout: () => {
        axios.get('/logout');
    }
};

export default LoginNet;
