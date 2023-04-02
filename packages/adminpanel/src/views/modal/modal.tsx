import ModalState, { State } from '../../models/modal';
import {observer} from 'mobx-react-lite';
import style from './modal.module.css';

const Modal = observer(() => {
    if (ModalState.state === State.Close) {
        return null;
    };

    return (
        <div className={style.block}>

        </div>
    );
});

export default Modal;