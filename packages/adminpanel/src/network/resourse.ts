import axios from 'axios';
import { ResourseType } from '../models/resourses';

const ResourseNet = { 
    getResourses: async () => {
        return (await axios.get('/getResources')).data;
    },
    createResourse: async (data: {type: string, name: string}) => {
        return (await axios.post('/addResource', data)).data;
    },
    removeResourse: async (type: string, name: string) => {
        return (await axios.post('/removeResource', {
            type,
            name,
        })).data;
    },
};

export default ResourseNet;
