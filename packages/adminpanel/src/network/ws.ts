import axios from 'axios';
import { toast } from 'react-toastify';
import { MonitoringType } from '../models/monitoring';
import NodesStore from '../models/nodes';
import ResoursesStore from '../models/resourses';
import MonitoringStore from '../models/monitoring';

enum WSMsg {
    addNodeToCluster = 'addNodeToCluster',
    removeNodeFromCluster = 'removeNodeFromCluster',
    monitoring = 'Metrics',
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
        [WSMsg.monitoring]: this.handleMonitoring.bind(this),
    };

    constructor() {
        this.start();
    }

    private start() {
        if (!!axios.defaults.baseURL) {
            this.socket = new WebSocket(`ws${axios.defaults.baseURL.replace('http', '')}/getProgress`);

            console.log('Люто законектились с сервером: ', this.socket);

            this.socket.onmessage = this.msg.bind(this);
            this.socket.onerror = (err) => {
                console.log('Люто наошибались в вебсокете: ', err);
                this.start();
            };
            this.socket.onclose = (err) => {
                console.log('Люто назакрывали в вебсокет: ', err);
                this.start();
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
            ResoursesStore.clear();
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
            ResoursesStore.clear();
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

    private handleMonitoring(data: MonitoringType) {
        MonitoringStore.set(data);
    }
};

export default new WS;