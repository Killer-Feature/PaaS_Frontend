import style from './resourses.module.css';
import Title from '../../components/titleHeader/titleHeader';
import TechMetrics from '../../components/techMetrics/techMetrics';
import plus from '../../assets/plus.svg'
import viteLogo from '/vite.svg'
import { Text, Header, Button } from 'paaskit';
import ResoursesTable from '../../components/table/resourses/resourses';
import ModalState, {Modals} from '../../models/modal';
import NodesStore from '../../models/nodes';

const Resourses = () => {
    return (
        <>
            <div className={style.title}>
                <Title desc={'В этом разделе находится конфигурация ресурсов приложения'}>
                    Конфигурация ресурсов
                </Title>
                <Button callback={() => {
                    if (NodesStore.isHasCluster) {
                        ModalState.open(Modals.CreateResourse);
                    } else {
                        ModalState.open(Modals.Warning, {
                            title: 'Нельзя создать ресурс!',
                            description: 'Вы не подключили ни одну тачку к кластеру, поэтому кластер не создан и добавить к нему ресурс невозможно'
                        });
                    }
                }}>
                    <img src={plus} alt={'plus'} />
                    <span>Добавить ресурс</span>
                </Button>
            </div>
            <ResoursesTable />
        </>
    );
};

export default Resourses;
