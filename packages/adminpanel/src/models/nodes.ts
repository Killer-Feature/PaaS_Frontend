import {makeAutoObservable} from 'mobx';
import NodesNet from '../network/node';

export type NodeType = {
    id: number,
    name: string,
    ip: string,
    clusterID: number,
    login?: string,
    password?: string,
};

type NodesType = Array<NodeType>;

class NodesStore {
    nodes: NodesType = [];
    isLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    async fetch() {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.nodes = await NodesNet.getNodes();
        }
    };

    async addNode(node: NodeType) {
        node.ip = node.ip + ':22';

        node.id = await NodesNet.addNode(node);

        this.nodes.push(node);
    };

    async removeNode(id: number)  {
        await NodesNet.removeNode(id);

        this.nodes = this.nodes.filter((el) => el.id !== id);
    }

    async addNodeToCluster(id: number)  {
        await NodesNet.addNodeToCluster(id);

        this.nodes.forEach((el) => {
            if (el.id === id) {
                el.clusterID = 10;
            };
        });
    }
};

export default new NodesStore();
