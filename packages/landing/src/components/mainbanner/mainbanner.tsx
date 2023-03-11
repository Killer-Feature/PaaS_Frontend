import React from 'react';
import { Text } from 'paaskit';
import macBook from '../../assets/macbook.jpeg';
import style from './mainbanner.module.css';

const MainBanner: React.FunctionComponent = () => {
    return (
        <div className={style.block}>
            <div className={style.textBlock}>
                <Text type='h1'>Мы помогаем делать девопс простым</Text>
                <div className={style.desc}>
                    <Text type='pDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Text>
                </div>
            </div>
            <img src={macBook} className={style.img} alt="MacBook" />
        </div>
    );
};

export default MainBanner;