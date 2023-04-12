import style from '../modal.module.css';
import svg from '../../../assets/createNode.svg';
import { Text, Button } from 'paaskit';
import { useForm } from 'react-hook-form';
import ModalState from '../../../models/modal';
import ResourseStore, { ResourseType } from '../../../models/resourses';

const CreateResourse = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // @ts-ignore
    const onSubmit = (data) => {
        ResourseStore.addResourse(data);

        ModalState.close();
    };
    
    return (
        <div className={style.block}>
            <img src={svg} alt={'node icon'} />
            <div className={style.title}>
                <Text type={'modalTitle'}>
                    Введите данные ресурса
                </Text>
            </div>
            <div className={style.desc}>
                <Text type={'tableDesc'}>
                    Ресурс развернется на серверах добавленных в Ваш кластер
                </Text>
            </div>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <Text type={'formLabel'}>Название</Text>
                <input className={style.input + (errors.name ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Название ресурса в системе'} {...register('name', {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                })} />
                <div className={style.errorBlock}>
                    {errors?.name?.type === 'required' && (
                        <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                    )}
                    {errors?.name?.type === 'maxLength' && (
                        <Text type={'errorMsg'}>Длина названия должна быть менее 20 символов</Text>
                    )}
                    {errors?.name?.type === 'minLength' && (
                        <Text type={'errorMsg'}>Длина названия должна быть более 5 символов</Text>
                    )}
                </div>

                <Text type={'formLabel'}>Тип ресурса</Text>
                <select className={style.input + ' ' + style.select + (errors.type ? (' ' + style.errorInput) : '')} {...register('type', {
                    required: true,
                })}>
                    <option value="postgres">postgres</option>
                    <option value="redis">redis</option>
                    <option value="prometheus">prometheus</option>
                    <option value="grafana">grafana</option>
                    <option value="nginx-ingress-controller">nginx-ingress-controller</option>
                    <option value="metallb">metallb</option>
                </select>
                <div className={style.errorBlock}>
                    {errors?.type && (
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

export default CreateResourse;
