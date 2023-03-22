import { Text } from 'paaskit';
import style from './title.module.css';
import React from 'react';

type Props = {
    children: React.ReactNode,
    desc: string,
};

const title: React.FC<Props> = ({children, desc}) => {
    return (
        <div className={style.block}>
            <Text className={style.color} type={'title'}>{children}</Text>
            <Text type={'p'}>{desc}</Text>
        </div>
    );
};

export default title;
