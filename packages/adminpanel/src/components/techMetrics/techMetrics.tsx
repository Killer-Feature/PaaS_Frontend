import style from './techMetrics.module.css';
import { TechData } from 'paaskit';
import nodes from '../../assets/nodes.svg';
import bigJuk from '../../assets/bigJuk.svg';
import ram from '../../assets/ram.svg';
import folder from '../../assets/folder.svg';
import internet from '../../assets/internet.svg';

const TechMetrics = () => {
    return (
        <div className={style.block}>
            <TechData
                type='Purple'
                icon={nodes}
                data={12}
                desc={'Размер кластера'}
            />
            <TechData
                type='Gray'
                icon={bigJuk}
                data={'12/23'}
                desc={'Использование CPU'}
            />
            <TechData
                type='Blue'
                icon={ram}
                data={'3/8'}
                desc={'Использование RAM'}
            />
            <TechData
                type='Green'
                icon={folder}
                data={'33/64'}
                desc={'Использование памяти'}
            />
            <TechData
                type='Aqua'
                icon={internet}
                data={123}
                desc={'Сетевая нагрузка'}
            />
        </div> 
    );
};

export default TechMetrics;