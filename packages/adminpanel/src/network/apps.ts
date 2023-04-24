import axios from 'axios';
import { Apps } from '../components/table/apps/apps';

const AppsNet = { 
    get: async () => {
        return <Apps>(await axios.get('/getServices')).data;
    },
};

export default AppsNet;
