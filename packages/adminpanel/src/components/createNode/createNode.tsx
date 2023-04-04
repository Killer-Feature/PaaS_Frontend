import style from './createNode.module.css';
import svg from '../../assets/createNode.svg';
import { Text } from 'paaskit';

const CreateNode = () => {
    return (
        <div className={style.block}>
            <img src={svg} alt={'Ass node icon'} />
            <Text className={style.title} type={'modalTitle'}>
                Введите данные сервера
            </Text>
        </div>
    );
};

export default CreateNode;