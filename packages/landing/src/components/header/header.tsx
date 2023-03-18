import React from 'react';
import { Text } from 'paaskit';
import style from './header.module.css';
import gitHub from '../../assets/github.svg';

const Header: React.FunctionComponent = () => {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <Text type='h3'>Huginn</Text>
                <div className={style.nav}>
                    <Text type='menu'>О нас</Text>
                    <Text type='menu'>Быстрый старт</Text>
                    <Text type='menu'>Документация</Text>
                    <Text type='menu'>Контакты</Text>
                    <div className={style.line}></div>
                    <img src={gitHub} className={style.github} alt={'github'} />
                </div>
            </div>
        </div>
    );
};

export default Header;