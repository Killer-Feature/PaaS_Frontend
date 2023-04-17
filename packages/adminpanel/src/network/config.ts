import axios from 'axios';

const ConfigNet = { 
    get: async () => {
        return (await axios.get('/getAdminConfig')).data;
    },
};

export default ConfigNet;
