import style from '../modal.module.css';
import config from './config.module.css';
import { Text, Button } from 'paaskit';
import svg from '../../../assets/warning.svg';
import ModalState from '../../../models/modal';

const ConfigModal = () => {
    return (
        <div className={style.block + ' ' + config.block}>
            <img src={svg} alt={'node icon'} />
            <div className={style.title}>
                <Text type={'modalTitle'}>
                    Это конфиг Вашего кластера
                </Text>
            </div>
            <div className={style.desc}>
                <Text type={'tableDesc'}>
                    В этом модальном окне можно посмотреть конфиг развернутого кластера
                </Text>
            </div>
        </div>
    );
};

export default ConfigModal;
