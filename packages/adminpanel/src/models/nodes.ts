import {makeAutoObservable, runInAction} from 'mobx';

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

    fetch() {
        fetch('http://localhost:8091/api/getClusterNodes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {
                this.nodes = response;
            });
    };

    addNode(node: NodeType) {
        node.ip = node.ip + ':22';

        this.nodes.push(node);

        fetch('http://localhost:8091/api/addNode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(node),
        });
    };
};

export default new NodesStore();
