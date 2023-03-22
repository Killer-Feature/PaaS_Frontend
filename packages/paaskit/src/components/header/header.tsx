import React from 'react';
import Text from '../text/text';
import style from './header.module.css';
import gitHub from '../../assets/github.svg';

type Props = {
    children?: React.ReactNode
};

const Header: React.FC<Props> = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <Text type='h3'>Huginn</Text>
                <div className={style.nav}>
                    {children}
                    <div className={style.line}></div>
                    <img src={gitHub} className={style.github} alt={'github'} />
                </div>
            </div>
        </div>
    );
};

export default Header;