import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './purpleLinks.module.css';
import Text from '../text/text';

interface Props {
    text1: string,
    link1?: string,
    text2: string,
    link2?: string,
};

const PurpleLinks = (props: Props) => (
    <div className={style.block}>
        <div className={style.left}>
            <Text>
                {props.text1}
            </Text>
        </div>
        <div className={style.right}>
            <Text>
                {props.text2}
                <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
            </Text>
        </div>
    </div>
);

export default PurpleLinks;