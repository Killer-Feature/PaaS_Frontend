import style from './index.module.css';
import Title from '../../components/titleHeader/titleHeader';
import TechMetrics from '../../components/techMetrics/techMetrics';
import plus from '../../assets/plus.svg'
import viteLogo from '/vite.svg'
import { Text, Header, Button } from 'paaskit';
import Table from '../../components/table/nodes/table';
import ModalState, {Modals} from '../../models/modal';
import NodesStore from '../../models/nodes';

const Index = () => {
    return (
        <>
            <div className={style.title}>
                <Title desc={'Тут находится основная информация о вашем кластере и его ресурсах'}>
                    Общая панель управления
                </Title>
            </div>
            <TechMetrics />
            <div className={style.title}>
                <Title desc={'Тут находится список текущих машин вашего кластера'}>
                    Состояние кластера
                </Title>
                <div className={style.buttons}>
                    <Button isSec callback={() => {
                        if (NodesStore.isHasCluster) {
                            ModalState.open(Modals.Config);
                        } else {
                            ModalState.open(Modals.Warning, {
                                title: 'Нельзя посмотреть конфиг',
                                description: 'Вы не подключили ни одну тачку к кластеру, поэтому кластер не создан и открыть конфиг невозможно'
                            });
                        }
                    }}>
                        <span>Открыть конфиг</span>
                    </Button>
                    <Button callback={() => ModalState.open(Modals.CreateNode)}>
                        <img src={plus} alt={'plus'} />
                        <span>Добавить</span>
                    </Button>
                </div>
            </div>
            <Table />
        </>
    );
};

export default Index;
