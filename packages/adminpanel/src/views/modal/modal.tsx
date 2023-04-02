import ModalState, { State } from '../../models/modal';
import {observer} from 'mobx-react-lite';

const Modal = observer(() => {
    if (ModalState.state === State.Close) {
        return null;
    };

    return (
        <div>

        </div>
    );
});

export default Modal;