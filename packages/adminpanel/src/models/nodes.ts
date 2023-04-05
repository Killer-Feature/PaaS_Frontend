import {makeAutoObservable, runInAction} from 'mobx';

type NodesType = Array<{
    name: string,
    ip: string,
}>;

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
};

export default new NodesStore();
