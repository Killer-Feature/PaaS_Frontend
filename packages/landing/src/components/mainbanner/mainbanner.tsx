import React from 'react';
import { Text, PurpleLinks } from 'paaskit';
import MacBook from '../macbook/macbook';
import style from './mainbanner.module.css';

const MainBanner: React.FunctionComponent = () => {
    return (
        <div className={style.block}>
            <div className={style.textBlock}>
                <PurpleLinks
                    text1={'Быстрый старт'}
                    text2={'Разверните нашу систему в пару кликов'}
                />
                <Text type='h1'>Мы делаем DevOps простым </Text>
                <div className={style.desc}>
                    <Text type='pDesc'>Развернем production ready kubernetes кластер и настрим Ваш собственный PaaS</Text>
                </div>
            </div>
            <MacBook />
            <div className={style.gardient} />
        </div>
    );
};

export default MainBanner;