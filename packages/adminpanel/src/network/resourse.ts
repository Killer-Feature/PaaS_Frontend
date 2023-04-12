import axios from 'axios';
import { ResourseType } from '../models/resourses';

const ResourseNet = { 
    getResourses: async () => {
        return (await axios.get('/getResources')).data;
    },
};

export default ResourseNet;
