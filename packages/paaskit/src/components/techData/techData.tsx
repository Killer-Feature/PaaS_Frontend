import style from './techData.module.css';
import Text from '../text/text';
import React from 'react';

type Props = {
    type: 'Purple' | 'Gray',
    icon: string,
    data: string,
    desc: string,
};

const TechData: React.FC<Props> = ({type, icon, data, desc}) => {
    return (
        <div className={style.block + ' ' + style['block' + type]}>
            <div className={style.icon + ' ' + style['icon' + type]}>
                <img src={icon} />
            </div>
            <div className={style.text}>
                <Text type={'title'}>{data}</Text>
                <Text type={'techDesc'}>{desc}</Text>
            </div>
        </div>
    );
};

export default TechData;