import style from '../table.module.css';
import resoursesStyle from './resourses.module.css';
import { useState, useEffect } from 'react';
import { Text, Button } from 'paaskit';
import diamond from '../../../assets/diamond.svg';
import juk from '../../../assets/juk.svg';
import trash from '../../../assets/trash.svg';
import pan from '../../../assets/pan.svg';
import ResoursesStore from '../../../models/resourses'
import { observer } from 'mobx-react-lite';
import Modal, {Modals} from '../../../models/modal';

const Resourses = observer(() => {
    const data = ResoursesStore.resourses;

    useEffect(() => {
        ResoursesStore.fetch();
    }, []);

    return (
        <div className={style.block + ' ' + resoursesStyle.block}>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Статус</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Последний деплой</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Первый деплой</Text></div>
            <div className={style.head + ' ' + style.border}></div>

            {data.length === 0 &&
                <div className={style.empty}>
                    Нет подключенных ресурсов
                </div>
            }

            {data.map((el, i) => {
                return (
                    <>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <div className={style.icon + ' ' + style.iconGray}>
                                <img src={juk} />
                            </div>

                            <div>
                                <Text type={'tableTitle'}>
                                    {el.name}
                                </Text>
                                <Text type={'tableDesc'}>
                                    {el.type}
                                </Text>
                            </div>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                        <div className={style.status}>
                                <Text type={'tableHead'}>
                                    Запущена
                                </Text>
                            </div>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <Text type={'tableDesc'}>
                                {el.lastDeployed}
                            </Text>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <Text type={'tableDesc'}>
                                {el.firstDeployed}
                            </Text>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line + ' ' + style.actions}>
                            <img className={style.pointer} onClick={() => Modal.open(Modals.Remove, {
                                callback: () => ResoursesStore.removeResourse(el.type),
                                name: 'ресурс',
                                description: 'Это действие безвозвратно удалит ресурс из базы данных и из кластера'
                            })} src={trash} />
                            <img src={pan} />
                        </div>
                    </>
                );
            })}
        </div>
    );
});

export default Resourses;