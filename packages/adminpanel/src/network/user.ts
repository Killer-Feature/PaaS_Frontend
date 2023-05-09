import axios from 'axios';

const LoginNet = { 
    signIn: (data) => {
        return (axios.post('/login', data));
    },
};

export default LoginNet;
