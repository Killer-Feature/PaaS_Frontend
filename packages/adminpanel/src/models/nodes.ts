import {makeAutoObservable} from 'mobx';
import NodesNet from '../network/node';

export type NodeType = {
    id: number,
    name: string,
    ip: string,
    clusterID: number,
    isMaster: boolean,
    grafana_ip: string,
    login?: string,
    password?: string,
    deployed: undefined | {
        percent: number,
        msg: string,
    },
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

    async removeNodeFromCluster(id: number)  {
        await NodesNet.removeNodeFromCluster(id);

        const node = this.nodeById(id);

        if (!!node) {
            node.clusterID = 0;
            node.isMaster = false;
            node.grafana_ip = '';
        }
    }

    async addNodeToCluster(id: number)  {
        const clusetId = await NodesNet.addNodeToCluster(id);

        

        this.nodes.forEach((el) => {
            if (el.id === id) {
                el.clusterID = clusetId;

                if (this.nodes.some((el) => el.isMaster)) {
                    el.isMaster = true;
                }
            };
        });
    }

    get isHasCluster() {
        return this.nodes.some((el) => !!el.clusterID);
    }

    nodeById(id: number) {
        return this.nodes.find((node) => node.id === id);
    }

    setDeploy(id: number, percent: number, msg: string) {
        const node = this.nodeById(id);

        if (!node) {
            return;
        }

        if (percent === 100) {
            node.deployed = undefined;
            return;
        }

        node.deployed = {
            percent,
            msg,
        };
    }
};

export default new NodesStore();
