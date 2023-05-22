import React from 'react';
import { Text, PurpleLinks } from 'paaskit';
import style from './footer.module.css';

const Footer: React.FunctionComponent = () => {
    return (
        <div className={style.block}>
            <div className={style.text}><Text type={'tableHead'}>Killer Feature ©2023</Text></div>
        </div>
    );
};

export default Footer;
