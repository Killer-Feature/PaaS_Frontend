import style from './createNode.module.css';
import svg from '../../assets/createNode.svg';
import { Text } from 'paaskit';

const CreateNode = () => {
    return (
        <div className={style.block}>
            <img src={svg} alt={'Ass node icon'} />
            <div className={style.title}>
                <Text type={'modalTitle'}>
                    Введите данные сервера
                </Text>
            </div>
            <div className={style.desc}>
                <Text type={'tableDesc'}>
                    На вашей машине должен быть установлен OpenSSH и открыт 22 порт
                </Text>
            </div>
        </div>
    );
};

export default CreateNode;