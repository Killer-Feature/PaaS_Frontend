import style from './table.module.css';
import { useState, useEffect } from 'react';
import { Text } from 'paaskit';

type Data = Array<{
    ip: string,
    name: string,
}>;

const Table = () => {
    const [data, setData] = useState<Data>([]);

    useEffect(() => {
        fetch('http://localhost:8090/deploy-app', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {
                setData(response);
                
            })
            .catch(() =>{
                setData([{
                    name: 'Моя любимя тачка',
                    ip: '192.168.2.150',
                }]);
            });
    }, []);

    return (
        <div className={style.block}>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Публичный адрес</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Статус</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Ссылка на дашборд</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название кластера</Text></div>
            <div className={style.head + ' ' + style.border}></div>
            {data.map((el, i) => {
                return (
                    <>
                        <div className={style.border + ' ' + style.line}>{el.name}</div>
                        <div className={style.border + ' ' + style.line}>{el.ip}</div>
                        <div className={style.border + ' ' + style.line}>Запущена</div>
                        <div className={style.border + ' ' + style.line}>http://192.168.1.150:3367/</div>
                        <div className={style.border + ' ' + style.line}>Мой любимый кластер</div>
                        <div className={style.border + ' ' + style.line}></div>
                    </>
                );
            })}
        </div>
    );
};

export default Table;