import React from 'react';
import { Text, Button } from 'paaskit';
import style from './sshform.module.css';
import { Store } from 'react-notifications-component';
import { useForm } from 'react-hook-form';
import Loader from '../loader/loader';


const SSHForm: React.FunctionComponent = () => {
    const [isDeploed, setDeploy] = React.useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // @ts-ignore
    const onSubmit = async (data) => {
        data.port = Number(data.port);

        try {
            await fetch('http://89.208.220.55:8091/deploy-app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
        } catch {
            Store.addNotification({
                title: "Ошибка!",
                message: "Проверьте корректность введенных данных",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });
            return;
        };

        Store.addNotification({
            title: "Успех!",
            message: "Сервис успешно начал деплой бинарника. Чтобы открыть админ панель зайдите по http на ваш домен",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
        });

        setDeploy(data.ip);
    };

    return (
        <div className={style.block}>
            <Text type='h2'>Введите данные для подключения по SSH к Вашему серверу и разверните нашу систему</Text>
            <Text type='pDesc'>Наши сервера в автоматическом режиме подключатся по SSH к Вашему серверу и установят последнюю версию нашего Control-plane, предоставив Вам готовый к использованию сервис</Text>

            {!!isDeploed ?
                <form className={style.form2} onSubmit={handleSubmit(onSubmit)}>
                    <Text type={'formLabel'}>IP адрес</Text>
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

                    <Text type={'formLabel'}>Порт</Text>
                    <input className={style.input + (errors.port ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Порт для SSH'} {...register('port', {
                        required: true,
                    })} />
                    <div className={style.errorBlock}>
                        {errors?.port?.type === 'required' && (
                            <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
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
                        <Button type={'input'} callback={handleSubmit(onSubmit)}>
                            Добавить
                        </Button>
                    </div>

                    <input type="submit" style={{display: 'none'}} />
                </form>
            :
                <Loader />
            }
        </div>
    );
};

export default SSHForm;
