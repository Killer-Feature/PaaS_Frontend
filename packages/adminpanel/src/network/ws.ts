import axios from 'axios';
import { toast } from 'react-toastify';
import NodesStore from '../models/nodes';

enum WSMsg {
    addNodeToCluster = 'addNodeToCluster',
    removeNodeFromCluster = 'removeNodeFromCluster',
};

enum Status {
    Queue = 'in queue',
    Progress = 'in progress',
    Success = 'success',
    Error = 'error',
    Started = 'started',
    ConnectError = 'connection error',
};

type MsgData = {
    type: WSMsg.addNodeToCluster,
    payload: {
        percent: number,
        error: string,
        status: Status,
        nodeID: number,
        log: string,
    },
} | {
    type: WSMsg.removeNodeFromCluster,
    payload: {
        percent: number,
        error: string,
        status: Status,
        nodeID: number,
        log: string,
    },
};

class WS {
    private socket: WebSocket | null = null;
    private handleFunc: Record<WSMsg, (arg0: any) => void> = {
        [WSMsg.addNodeToCluster]: this.handleAddClusterToNode.bind(this),
        [WSMsg.removeNodeFromCluster]: this.handleRemoveNodeFromCluster.bind(this),
    };

    constructor() {
        if (!!axios.defaults.baseURL) {
            this.socket = new WebSocket(`ws${axios.defaults.baseURL.replace('http', '')}/getProgress`);

            console.log('Люто законектились с сервером: ', this.socket);

            this.socket.onmessage = this.msg.bind(this);
            this.socket.onerror = (err) => {
                console.log('Люто наошибались в вебсокете: ', err);
                if (!!axios.defaults.baseURL) {
                    this.socket = new WebSocket(`ws${axios.defaults.baseURL.replace('http', '')}/getProgress`);
                }
            };
            this.socket.onclose = (err) => {
                console.log('Люто назакрывали в вебсокет: ', err);
                if (!!axios.defaults.baseURL) {
                    this.socket = new WebSocket(`ws${axios.defaults.baseURL.replace('http', '')}/getProgress`);
                }
            };
        }
    }

    private msg(e: MessageEvent) {
        const msg: MsgData = JSON.parse(e.data);

		console.log('Люто пришло сообщение от сервера: ', msg);

		this.handleFunc[msg.type](msg.payload);
    }

    private handleAddClusterToNode(data: {
        percent: number,
        error: string,
        status: Status,
        nodeID: number,
        log: string,
    }) {
        NodesStore.setDeploy(data.nodeID, data.percent, 'Добавление сервера в k8s');

        switch (data.status) {
        case Status.Started:
            this.notifySender('Начался процесс добавления сервера в k8s', 'success');
            break;
        case Status.ConnectError:
        case Status.Error:
            this.notifySender('Ошибка при добавлении сервера в k8s', 'error');
            NodesStore.setDeploy(data.nodeID, 100, 'Добавление сервера в k8s');
            break;
        case Status.Success:
            this.notifySender('Сервер успешно добавлен в k8s', 'success');
            break;
        case Status.Queue:
            this.notifySender('Сервер встал в очередь на добавление в k8s', 'warning');
            break;
        };
    }

    private handleRemoveNodeFromCluster(data: {
        percent: number,
        error: string,
        status: Status,
        nodeID: number,
        log: string,
    }) {
        NodesStore.setDeploy(data.nodeID, data.percent, 'Удаление из k8s');

        switch (data.status) {
        case Status.Started:
            this.notifySender('Начался процесс удаления сервера из k8s', 'success');
            break;
        case Status.ConnectError:
        case Status.Error:
            this.notifySender('Ошибка при удалении сервера из k8s', 'error');
            NodesStore.setDeploy(data.nodeID, 100, 'Удаление из k8s');
            break;
        case Status.Success:
            this.notifySender('Сервер успешно удален из k8s', 'success');
            break;
        case Status.Queue:
            this.notifySender('Сервер встал в очередь на удаление из k8s', 'warning');
            break;
        };
    }

    private notifySender(msg: string, type: 'success' | 'error' | 'warning') {
        toast[type](msg, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }
};

export default new WS;