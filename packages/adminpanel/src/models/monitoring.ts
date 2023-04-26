import {makeAutoObservable} from 'mobx';

export type MonitoringType = {
    CpuTotal: number,
    CpuUsage: number,
    MemoryTotal: number,
    MemoryUsage: number,
    NetworkReceive: number,
    NetworkTransmit: number,
    RamTotal: number,
    RamUsage: number,
};

class MonitoringStore {
    monitoring: MonitoringType = {
        CpuTotal: 0,
        CpuUsage: 0,
        MemoryTotal: 0,
        MemoryUsage: 0,
        NetworkReceive: 0,
        NetworkTransmit: 0,
        RamTotal: 0,
        RamUsage: 0,
    };

    constructor() {
        makeAutoObservable(this);
    };

    set(monitoring: MonitoringType) {
        this.monitoring = monitoring;
    }
};

export default new MonitoringStore();
