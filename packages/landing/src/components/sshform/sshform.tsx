import React from 'react';
import { Text } from 'paaskit';
import style from './sshform.module.css';
import { Store } from 'react-notifications-component';


const SSHForm: React.FunctionComponent = () => {
    // @ts-ignore
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(event);

        const data = {
            ip: event.target.elements.ip.value,
            port: event.target.elements.port.value,
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
            <Text type='h2'>Введите ключ SSH и разверните нашу систему</Text>
            <Text type='pDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

            <form className={style.form} onSubmit={onSubmit}>
                <input type='text' name='ip' placeholder='IP адресс'></input>
                <input type='text' name='port' placeholder='Port'></input>
                <input type='text' name='user' placeholder='Пользователь'></input>
                <input type='password' name='password' placeholder='Пароль'></input>
                <input type='submit'></input>
            </form>
        </div>
    );
};

export default SSHForm;