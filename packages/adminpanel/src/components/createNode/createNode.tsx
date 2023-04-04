import style from './createNode.module.css';
import svg from '../../assets/createNode.svg';
import { Text } from 'paaskit';
import { useForm } from 'react-hook-form';

const CreateNode = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    
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

            <form className={style.form} onSubmit={handleSubmit(() => {})}>
                <Text type={'formLabel'}>IP адресс</Text>
                <input className={style.input} placeholder={'192.168.0.0'} {...register('adress', {
                    required: true,
                    pattern: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/i
                })} />
                {errors?.adress?.type === 'pattern' && (
                    <p>Хуй те на рыло. Адресс вводить умеешь ебланище?</p>
                )}
            </form>
        </div>
    );
};

export default CreateNode;