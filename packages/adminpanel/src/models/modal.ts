import {makeAutoObservable} from 'mobx';

export enum State {
    Open,
    Opening,
    Close,
    Closing,
};

export enum Modals {
    CreateNode,
};

class Modal {
    state: State = State.Close;
    type: null | Modals = null;
    context: any = null;
    readonly duration = 300;

    constructor() {
        makeAutoObservable(this);
    };

    open(type: Modals, context = null) {
        this.type = type;
        this.state = State.Opening;
        this.context = context;

        setTimeout(() => {
            this.state = State.Open;
        }, this.duration);
    };

    close() {
        this.state = State.Closing;

        setTimeout(() => {
            this.type = null;
            this.state = State.Close;
            this.context = null;
        }, this.duration);
    };
};

export default new Modal();
