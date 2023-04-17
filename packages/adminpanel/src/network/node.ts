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
    removeNodeFromCluster: async (id: number) => {
        return (await axios.post('/removeNodeFromCluster', {
            id
        })).data;
    },
    addNodeToCluster: async (id: number) => {
        return (await axios.post('/addNodeToCluster', {
            id
        })).data;
    },
};

export default NodesNet;
