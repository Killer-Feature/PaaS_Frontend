import style from './createNode.module.css';
import svg from '../../assets/createNode.svg';
import { Text, Button } from 'paaskit';
import { useForm } from 'react-hook-form';
import ModalState from '../../models/modal';
import NodesStore, { NodeType } from '../../models/nodes';

const CreateNode = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // @ts-ignore
    const onSubmit = (data) => {
        NodesStore.addNode(data);

        ModalState.close();
    };
    
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

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <Text type={'formLabel'}>Название</Text>
                <input className={style.input + (errors.name ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Название сервера в системе'} {...register('name', {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                })} />
                <div className={style.errorBlock}>
                    {errors?.name?.type === 'required' && (
                        <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                    )}
                    {errors?.name?.type === 'maxLength' && (
                        <Text type={'errorMsg'}>Длинна названия должна быть менее 20 символов</Text>
                    )}
                    {errors?.name?.type === 'minLength' && (
                        <Text type={'errorMsg'}>Длинна названия должна быть более 5 символов</Text>
                    )}
                </div>

                <Text type={'formLabel'}>IP адресс</Text>
                <input className={style.input + (errors.ip ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'192.168.0.0'} {...register('ip', {
                    required: true,
                    pattern: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/i
                })} />
                <div className={style.errorBlock}>
                    {errors?.ip?.type === 'required' && (
                        <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                    )}
                    {errors?.ip?.type === 'pattern' && (
                        <Text type={'errorMsg'}>Вводите IP адреес по примеру 192.168.0.0</Text>
                    )}
                </div>

                <Text type={'formLabel'}>Логин</Text>
                <input className={style.input + (errors.login ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Имя пользователя ubuntu'} {...register('login', {
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                })} />
                <div className={style.errorBlock}>
                    {errors?.login?.type === 'required' && (
                        <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                    )}
                    {errors?.login?.type === 'pattern' && (
                        <Text type={'errorMsg'}>Логин должен состоять из букв латинского алфавита</Text>
                    )}
                </div>
                <input type="submit" style={{display: 'none'}} />

                <Text type={'formLabel'}>Пароль</Text>
                <input type={'password'} className={style.input + (errors.password ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Пароль пользователя ubuntu'} {...register('password', {
                    required: true,
                })} />
                <div className={style.errorBlock}>
                    {errors?.password?.type === 'required' && (
                        <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                    )}
                </div>

                <div className={style.buttons}>
                    <Button type={'input'} isSec callback={() => ModalState.close()}>
                        Отмена
                    </Button>
                    <Button type={'input'} callback={handleSubmit(onSubmit)}>
                        Добавить
                    </Button>
                </div>

                <input type="submit" style={{display: 'none'}} />
            </form>
        </div>
    );
};

export default CreateNode;