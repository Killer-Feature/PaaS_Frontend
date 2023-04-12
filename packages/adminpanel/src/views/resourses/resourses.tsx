import style from './resourses.module.css';
import Title from '../../components/titleHeader/titleHeader';
import TechMetrics from '../../components/techMetrics/techMetrics';
import plus from '../../assets/plus.svg'
import viteLogo from '/vite.svg'
import { Text, Header, Button } from 'paaskit';
import ResoursesTable from '../../components/table/resourses/resourses';
import ModalState, {Modals} from '../../models/modal';

const Resourses = () => {
    return (
        <>
            <div className={style.title}>
                <Title desc={'В этом разделе находится конфигурация ресурсов приложения'}>
                    Конфигурация ресурсов
                </Title>
                <Button callback={() => ModalState.open(Modals.CreateResourse)}>
                    <img src={plus} alt={'plus'} />
                    <span>Добавить ресурс</span>
                </Button>
            </div>
            <ResoursesTable />
        </>
    );
};

export default Resourses;
