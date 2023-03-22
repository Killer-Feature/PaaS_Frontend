import style from './table.module.css';
import { Text } from 'paaskit';

const Table = () => {
    return (
        <div className={style.block}>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Публичный адрес</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Статус</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Ссылка на дашборд</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название кластера</Text></div>
            <div className={style.head + ' ' + style.border}></div>
            <div className={style.border + ' ' + style.line}>Моя любимая тачка</div>
            <div className={style.border + ' ' + style.line}>192.168.1.150</div>
            <div className={style.border + ' ' + style.line}>Запущена</div>
            <div className={style.border + ' ' + style.line}>http://192.168.1.150:3367/</div>
            <div className={style.border + ' ' + style.line}>Мой любимый кластер</div>
            <div className={style.border + ' ' + style.line}></div>
        </div>
    );
};

export default Table;