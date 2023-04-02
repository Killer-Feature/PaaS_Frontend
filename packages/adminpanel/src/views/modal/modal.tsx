import ModalState, { State } from '../../models/modal';
import {observer} from 'mobx-react-lite';
import style from './modal.module.css';

const Modal = observer(() => {
    if (ModalState.state === State.Close) {
        return null;
    };

    return (
        <div className={
            style.block
            + ((ModalState.state === State.Opening) ?  (' ' + style.backgroundOpening) : '')
            + ((ModalState.state === State.Closing) ?  (' ' + style.backgroundClosing) : '')
        } onClick={() => ModalState.close()}>
            <div className={
                style.modal
                + ((ModalState.state === State.Opening) ?  (' ' + style.modalOpening) : '')
                + ((ModalState.state === State.Closing) ?  (' ' + style.modalClosing) : '')
            } onClick={(e) => e.stopPropagation()}></div>
        </div>
    );
});

export default Modal;