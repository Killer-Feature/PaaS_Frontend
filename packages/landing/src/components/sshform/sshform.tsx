import React from 'react';
import { Text, Button } from 'paaskit';
import style from './sshform.module.css';
import { Store } from 'react-notifications-component';


const SSHForm: React.FunctionComponent = () => {
    // @ts-ignore
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(event);

        const data = {
            ip: event.target.elements.ip.value,
            port: Number(event.target.elements.port.value),
            user: event.target.elements.user.value,
            password: event.target.elements.password.value,
        };
        try {
            await fetch('http://localhost:8090/deploy-app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
        } catch {};

        Store.addNotification({
            title: "Успех!",
            message: "Сервис успешно начал деплой бинарника",
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
    };

    return (
        <div className={style.block}>
            <Text type='h2'>Введите данные для подключения по SSH к Вашему серверу и разверните нашу систему</Text>
            <Text type='pDesc'>Наши сервера в автоматическом режиме подключатся по SSH к Вашему серверу и установят последнюю версию нашего Control-plane, предоставив Вам готовый к использованию сервис</Text>

            <form className={style.form} onSubmit={onSubmit}>
                <input type='text' name='ip' placeholder='IP адресс'></input>
                <input type='text' name='port' placeholder='Port'></input>
                <input type='text' name='user' placeholder='Пользователь'></input>
                <input type='password' name='password' placeholder='Пароль'></input>
                <input type='submit' className={style.submit} id={'pzd-reshenie'}></input>
                <Button callback={() => document.getElementById('pzd-reshenie')?.click()}>
                    Развернуть систему
                </Button>
            </form>
        </div>
    );
};

export default SSHForm;