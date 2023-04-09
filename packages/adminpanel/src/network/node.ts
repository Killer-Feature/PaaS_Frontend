import axios from 'axios';
import { NodeType } from '../models/nodes';

const NodesNet = { 
    getNodes: async () => {
        return (await axios.get('/getClusterNodes')).data;
    }, 
    addNode: async (data: NodeType) => {
        return (await axios.post('/addNode', data)).data;
    },
    removeNode: async (id: number) => {
        return (await axios.post('/removeNode', {
            id
        })).data;
    },
};

export default NodesNet;
