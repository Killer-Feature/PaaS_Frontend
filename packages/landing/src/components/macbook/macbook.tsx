import React from 'react';
import svg from '../../assets/macbook.svg';
import img from '../../assets/site-screen.png';
import style from './macbook.module.css';

const MacBook = () => {
    return (
        <div className={style.block}>
            <img src={svg} className={style.svg} alt="MacBook" />
            <img src={img} className={style.img} alt="MacBook" />
        </div>
    );
};

export default MacBook;