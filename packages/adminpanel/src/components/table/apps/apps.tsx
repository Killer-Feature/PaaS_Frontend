import style from '../table.module.css';
import resoursesStyle from './apps.module.css';
import { useState, useEffect } from 'react';
import { Text, Button } from 'paaskit';
import diamond from '../../../assets/diamond.svg';
import juk from '../../../assets/juk.svg';
import trash from '../../../assets/trash.svg';
import pan from '../../../assets/pan.svg';
import ResoursesStore from '../../../models/resourses';
import React from 'react';
import AppsNet from '../../../network/apps';

export type Apps = Array<{
    name: string,
    type: string,
    age: string,
    created: string,
}>;

const Resourses = () => {
    const [data, setData] = React.useState<Apps>([]);

    useEffect(() => {
        AppsNet.get().then((data) => setData(data));
    }, []);

    return (
        <div className={style.block + ' ' + resoursesStyle.block}>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Название</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Статус</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Создан</Text></div>
            <div className={style.head + ' ' + style.border}><Text type={'tableHead'}>Продолжительность работы</Text></div>

            {data.length === 0 &&
                <div className={style.empty}>
                    Нет приложений
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
                                {el.created}
                            </Text>
                        </div>
                        <div className={((i !== data.length - 1) ? style.border : '') + ' ' + style.line}>
                            <Text type={'tableDesc'}>
                                {el.age}
                            </Text>
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default Resourses;