import {makeAutoObservable} from 'mobx';
import NodesNet from '../network/node';

export type NodeType = {
    name: string,
    ip: string,
    login?: string,
    password?: string, 
};

type NodesType = Array<NodeType>;

class NodesStore {
    nodes: NodesType = [];

    constructor() {
        makeAutoObservable(this);
    };

    async fetch() {
        this.nodes = await NodesNet.getNodes();
    };

    async addNode(node: NodeType) {
        node.ip = node.ip + ':22';

        await NodesNet.addNode(node);

        this.nodes.push(node);
    };
};

export default new NodesStore();
