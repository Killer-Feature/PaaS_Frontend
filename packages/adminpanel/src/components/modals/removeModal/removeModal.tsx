import style from '../modal.module.css';
import remove from './removeModal.module.css';
import { Text, Button } from 'paaskit';
import svg from '../../../assets/remove.svg';
import ModalState from '../../../models/modal';

const RemoveModal = () => {
    return (
        <div className={style.block + ' ' + remove.block}>
            <img src={svg} alt={'Ass node icon'} />
            <div className={style.title}>
                <Text type={'modalTitle'}>
                    Удалить {ModalState.context.name}?
                </Text>
            </div>
            <div className={style.desc}>
                <Text type={'tableDesc'}>
                    {ModalState.context.description}
                </Text>
            </div>

            <div className={style.buttons + ' ' + remove.buttons}>
                <Button type={'input'} isSec callback={() => ModalState.close()}>
                    Отмена
                </Button>
                <Button type={'input'} isDanger callback={() => {
                    ModalState.context.callback();
                    ModalState.close();
                }}>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default RemoveModal;
