import style from './apps.module.css';
import Title from '../../components/titleHeader/titleHeader';
import TechMetrics from '../../components/techMetrics/techMetrics';
import plus from '../../assets/plus.svg';
import viteLogo from '/vite.svg';
import { Text, Header, Button } from 'paaskit';
import AppsTable from '../../components/table/apps/apps';
import ModalState, {Modals} from '../../models/modal';
import NodesStore from '../../models/nodes';
import React from 'react';

const Resourses = () => {
    React.useEffect(() => {
        NodesStore.fetch();
    }, []);

    return (
        <>
            <div className={style.title}>
                <Title desc={'В этом разделе находится список приложений развернутых в кластере'}>
                    Список приложения
                </Title>
            </div>
            <AppsTable />
        </>
    );
};

export default Resourses;
