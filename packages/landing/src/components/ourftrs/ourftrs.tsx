import { Text, PurpleLinks } from 'paaskit';
import style from './ourftrs.module.css';

const OurFtrs = () => (
    <div className={style.block}>
        <PurpleLinks text1={'Тут будет какой-то важный текст'} />
        <Text type={'h2'}>Тут будет написано почему стоит нами пользоваться</Text>
        <div className={style.desc}>
            <Text type={'pDesc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </div>
        <div className={style.ftrs}>
            <div className={style.ftrsPart}></div>
            <div className={style.ftrsPart}></div>
            <div className={style.ftrsPart}></div>
            <div className={style.ftrsPart}></div>
            <div className={style.ftrsPart}></div>
            <div className={style.ftrsPart}></div>
        </div>
    </div>
);

export default OurFtrs;