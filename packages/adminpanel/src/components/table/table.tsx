import style from './table.module.css';
import { useState, useEffect } from 'react';
import { Text } from 'paaskit';
import diamond from '../../assets/diamond.svg';
import juk from '../../assets/juk.svg';
import trash from '../../assets/trash.svg';
import pan from '../../assets/pan.svg';

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
                setData([
                    {
                        name: 'Моя любимая тачка',
                        ip: '192.168.2.150',
                    },
                    {
                        name: 'Моя не любимая тачка',
                        ip: '192.168.2.152',
                    },
                ]);
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
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            {(i === 0)
                                ?
                                    <div className={style.icon + ' ' + style.iconGreen}>
                                        <img src={diamond} />
                                    </div>
                                :
                                    <div className={style.icon + ' ' + style.iconGray}>
                                        <img src={juk} />
                                    </div>
                            }   

                            <div>
                                <Text type={'tableTitle'}>
                                    {el.name}
                                </Text>
                                <Text type={'tableDesc'}>
                                    {(i === 0) ? 'Мастер тачка' : 'Славе тачка'}
                                </Text>
                            </div>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <Text type={'tableDesc'}>
                                {el.ip}
                            </Text>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <div className={style.status}>
                                <Text type={'tableHead'}>
                                    Запущена
                                </Text>
                            </div>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <a href={'http://' + el.ip.split(':')[0] + ':3000/'}>
                                <Text type={'tableDesc'}>
                                    {'http://' + el.ip.split(':')[0] + ':3000/'}
                                </Text>
                            </a>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <Text type={'tableDesc'}>
                                Очень хороший кластер
                            </Text>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line + ' ' + style.actions}>
                            <img src={trash} />
                            <img src={pan} />
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default Table;