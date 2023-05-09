import axios from 'axios';

const LoginNet = { 
    // @ts-ignore
    signIn: (data) => {
        return (axios.post('/login', data));
    },
    logout: () => {
        axios.get('/logout');
    }
};

export default LoginNet;
