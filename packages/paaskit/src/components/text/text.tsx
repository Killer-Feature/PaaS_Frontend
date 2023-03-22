import React from 'react';
import style from './text.module.css';

type Props = {
    children: React.ReactNode,
    type?: 'h1' | 'p' | 'h2' | 'h3'| 'pDesc' | 'menu' | 'title' | 'tableHead' | 'tableTitle' | 'tableDesc',
};

const Text: React.FunctionComponent<Props> = ({children, type}) => {
    return (
        <p className={style.main + ' ' + style[type ?? 'main']}>
            {children}
        </p>
    )
};

export default Text;
