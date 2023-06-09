import ModalState, { State, Modals } from '../../models/modal';
import {observer} from 'mobx-react-lite';
import style from './modal.module.css';
import close from '../../assets/close.svg';
import CreateNode from '../../components/modals/createNode/createNode';
import RemoveModal from '../../components/modals/removeModal/removeModal';
import CreateResourse from '../../components/modals/createResourse/createResourse';
import WarningModal from '../../components/modals/warning/warning';
import ConfigModal from '../../components/modals/configViewer/config';

const modalsComponents: Record<Modals, () => JSX.Element> = {
    [Modals.CreateNode]: CreateNode,
    [Modals.Remove]: RemoveModal,
    [Modals.CreateResourse]: CreateResourse,
    [Modals.Warning]: WarningModal,
    [Modals.Config]: ConfigModal,
};

const Modal = observer(() => {
    if (ModalState.state === State.Close) {
        return null;
    };

    const CurrnetModal = (ModalState.type !== null) ? modalsComponents[ModalState.type] : () => null;

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
            } onClick={(e) => e.stopPropagation()}>
                <CurrnetModal />

                <img
                    src={close}
                    className={style.close}
                    alt={'Close icon'}
                    onClick={() => ModalState.close()}
                />
            </div>
        </div>
    );
});

export default Modal;
