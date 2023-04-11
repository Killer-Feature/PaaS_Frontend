import style from '../table.module.css';
import { useState, useEffect } from 'react';
import { Text, Button } from 'paaskit';
import diamond from '../../../assets/diamond.svg';
import juk from '../../../assets/juk.svg';
import trash from '../../../assets/trash.svg';
import pan from '../../../assets/pan.svg';
import NodesStore from '../../../models/nodes'
import { observer } from 'mobx-react-lite';
import Modal, {Modals} from '../../../models/modal';

const Table = observer(() => {
    const data = NodesStore.nodes;

    useEffect(() => {
        NodesStore.fetch();
    }, []);

    return (
        <div className={style.block}>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Публичный адрес</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Статус</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Ссылка на дашборд</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название кластера</Text></div>
            <div className={style.head + ' ' + style.border}></div>

            {data.length === 0 &&
                <div className={style.empty}>
                    Подключенные сервера отсутвуют
                </div>
            }

            {data.map((el, i) => {
                return (
                    <>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            {(el.isMaster)
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
                            <a className={style.link} href={'http://' + el.ip.split(':')[0] + ':3000/'}>
                                <Text type={'tableDesc'}>
                                    {'http://' + el.ip.split(':')[0] + ':3000/'}
                                </Text>
                            </a>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            {!el.clusterID ? 
                                <Button isSec callback={() => NodesStore.addNodeToCluster(el.id)}>Добавить в кластер</Button>
                                :
                                <Text type={'tableDesc'}>
                                    Единственный кластер
                                </Text>
                            }
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line + ' ' + style.actions}>
                            <img className={style.pointer} onClick={() => Modal.open(Modals.Remove, {
                                callback: () => NodesStore.removeNode(el.id),
                                name: 'сервер',
                                description: 'Это действие безвозвратно удалит сервер из базы данных и из кластера'
                            })} src={trash} />
                            <img src={pan} />
                        </div>
                    </>
                );
            })}
        </div>
    );
});

export default Table;