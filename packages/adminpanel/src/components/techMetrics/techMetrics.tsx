import style from './techMetrics.module.css';
import { TechData } from 'paaskit';
import nodes from '../../assets/nodes.svg';
import bigJuk from '../../assets/bigJuk.svg';
import ram from '../../assets/ram.svg';
import folder from '../../assets/folder.svg';
import internet from '../../assets/internet.svg';
import NodesStore from '../../models/nodes';
import { observer } from 'mobx-react-lite';

const TechMetrics = observer(() => {
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
                data={0}
                desc={'Использование CPU'}
            />
            <TechData
                type='Blue'
                icon={ram}
                data={0}
                desc={'Использование RAM'}
            />
            <TechData
                type='Green'
                icon={folder}
                data={0}
                desc={'Использование памяти'}
            />
            <TechData
                type='Aqua'
                icon={internet}
                data={0}
                desc={'Сетевая нагрузка'}
            />
        </div> 
    );
});

export default TechMetrics;