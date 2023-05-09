import style from './techMetrics.module.css';
import { TechData } from 'paaskit';
import nodes from '../../assets/nodes.svg';
import bigJuk from '../../assets/bigJuk.svg';
import ram from '../../assets/ram.svg';
import folder from '../../assets/folder.svg';
import internet from '../../assets/internet.svg';
import NodesStore from '../../models/nodes';
import MonitoringStore from '../../models/monitoring';
import { observer } from 'mobx-react-lite';

const formatMsg = (msg: string | Number) => {
    return String(msg).slice(0, 4);
}

const bitToKb = (number: number | string) => {
    return formatMsg(Number(number) * 1.25 * Math.pow(10, -3));
}

const bitToMb = (number: number | string) => {
    return Math.round(Number(number) * 1.25 * Math.pow(10, -6));
}

const bitToGb = (number: number | string) => {
    return formatMsg(Number(number) * 1.25 * Math.pow(10, -9));
}

const TechMetrics = observer(() => {
    const anime = MonitoringStore.monitoring;

    return (
        <div className={style.block}>
            <TechData
                type='Purple'
                icon={nodes}
                data={NodesStore.nodes.length}
                desc={'Размер кластера'}
            />
            <TechData
                type='Gray'
                icon={bigJuk}
                data={formatMsg(MonitoringStore.monitoring.CpuUsage) + '/' + MonitoringStore.monitoring.CpuTotal}
                desc={'Использование CPU'}
            />
            <TechData
                type='Blue'
                icon={ram}
                data={bitToMb(MonitoringStore.monitoring.RamUsage) + '/' + bitToMb(MonitoringStore.monitoring.RamTotal)}
                desc={'Использование RAM'}
                format={'MB'}
            />
            <TechData
                type='Green'
                icon={folder}
                data={bitToGb(MonitoringStore.monitoring.MemoryUsage) + '/' + bitToGb(MonitoringStore.monitoring.MemoryTotal)}
                desc={'Использование памяти'}
                format={'GB'}
            />
            <TechData
                type='Aqua'
                icon={internet}
                data={bitToKb(MonitoringStore.monitoring.NetworkTransmit + MonitoringStore.monitoring.NetworkReceive)}
                desc={'Сетевая нагрузка'}
                format={'KB'}
            />
        </div> 
    );
});

export default TechMetrics;