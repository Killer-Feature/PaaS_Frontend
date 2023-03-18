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
                <Text type='h1'>Мы помогаем делать девопс простым</Text>
                <div className={style.desc}>
                    <Text type='pDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Text>
                </div>
            </div>
            <MacBook />
            <div className={style.gardient} />
        </div>
    );
};

export default MainBanner;