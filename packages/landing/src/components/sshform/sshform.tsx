import React from 'react';
import { Text, Button } from 'paaskit';
import style from './sshform.module.css';
import { Store } from 'react-notifications-component';


const SSHForm: React.FunctionComponent = () => {
    const [isDeploed, setDeploy] = React.useState(false);

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

            {!isDeploed ?
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
            :
                <Text type='pDesc'>
                    <br/><br/><br/><br/><br/>
                    Приложение успешно <b>развернуто</b>.<br/> Перейдите по ссылке <a href={'http://' + isDeploed + ':8090/'}>{'http://' + isDeploed + ':8090/'}</a>, чтобы открыть админ панель.
                </Text>
            }
        </div>
    );
};

export default SSHForm;