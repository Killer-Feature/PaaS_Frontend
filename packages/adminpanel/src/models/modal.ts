import {makeAutoObservable} from 'mobx';

export enum State {
    Open,
    Opening,
    Close,
    Closing,
};

export enum Modals {
    NodeCreate,
};

class Modal {
    state: State = State.Close;
    type: null | Modals = null;
    readonly duration = 300;

    constructor() {
        makeAutoObservable(this);
    };

    open(type: Modals) {
        this.type = type;
        this.state = State.Opening;

        setTimeout(() => {
            this.state = State.Open;
        }, this.duration);
    };

    close() {
        this.state = State.Closing;

        setTimeout(() => {
            this.type = null;
            this.state = State.Close;
        }, this.duration);
    };
};

export default new Modal();
