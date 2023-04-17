import style from '../modal.module.css';
import warning from './warning.module.css';
import { Text, Button } from 'paaskit';
import svg from '../../../assets/warning.svg';
import ModalState from '../../../models/modal';

const WarningModal = () => {
    return (
        <div className={style.block + ' ' + warning.block}>
            <img src={svg} alt={'node icon'} />
            <div className={style.title}>
                <Text type={'modalTitle'}>
                    {ModalState.context.title}
                </Text>
            </div>
            <div className={style.desc}>
                <Text type={'tableDesc'}>
                    {ModalState.context.description}
                </Text>
            </div>
        </div>
    );
};

export default WarningModal;
