import { Text, PurpleLinks } from 'paaskit';
import style from './ourftrs.module.css';
import juk from '../../assets/ftrs-juk.svg';
import ingress from '../../assets/ftrs-ingress.svg';
import monitoring from '../../assets/ftrs-monitoring.svg';
import resourses from '../../assets/ftrs-resourses.svg';
import apps from '../../assets/ftrs-apps.svg';
import len from '../../assets/ftrs-len.svg';

const OurFtrs = () => {
    const ftrs = [
        {
            icon: juk,
            title: 'Встроенный деплой K8S cluster',
            text: 'Основной функционал нашего приложения позволяет вам разворачивать k8s кластер на популярных Linux дистрибутивов в автоматическом режиме',
        },
        {
            icon: ingress,
            title: 'Ingress controller',
            text: 'Развернем NGINX и настроем его в качестве Ingress Controller’а для приема внешнего трафика, а также позволим в автоматическом режиме добавлять ingress правила для ваших приложений',
        },
        {
            icon: monitoring,
            title: 'Мониторинг',
            text: 'Автоматическое подключение мониторинга состояния всего кластрера и каждого Вашего сервера. (Prometheus+Grafana+Node_exporter) ',
        },
        {
            icon: resourses,
            title: 'Управление ресурсами',
            text: 'Мы помогаем в автоматическом режиме разворачивать множество различных ресурсов в числе которых есть: PostgreSQL, Redis и Kafka',
        },
        {
            icon: apps,
            title: 'Учет приложений',
            text: 'Мониторим все Ваши развернутые приложения, позволяя в автоматическом режиме настроить ингресс правила для приема внешнего трафика',
        },
        {
            icon: len,
            title: 'Удобный UI на русском языке',
            text: 'Удобный интерфейс на русском языке позволяет полноценно пользоваться нашим приложениям любым людям',
        },
    ];

    return (
        <div className={style.block}>
            <PurpleLinks text1={'Собственный kubernetes это просто'} />
            <Text type={'h2'}>Первый удобный российский Open Source PaaS</Text>
            <div className={style.desc}>
                <Text type={'pDesc'}>Позвляет развернуть k8s на Ваших серверах, настраивая все необходимые механизмы за Вас</Text>
            </div>
            <div className={style.ftrs}>
                {ftrs.map((el) => (
                    <div className={style.ftrsPart}>
                        <img src={el.icon} />
                        <Text type={'ftrsTitle'}>{el.title}</Text>
                        <Text type={'ftrsDesc'}>{el.text}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default OurFtrs;