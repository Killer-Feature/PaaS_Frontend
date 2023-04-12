import {makeAutoObservable} from 'mobx';
import ResourseNet from '../network/resourse';

export type ResourseType = {
    name: string;
    status: string;
    lastDeployed: string;
    firstDeployed: string;
};

type ResoursesType = Array<ResourseType>;

class ResoursesStore {
    resourses: ResoursesType = [];
    isLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    async fetch() {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.resourses = await ResourseNet.getResourses();
        }
    }
};

export default new ResoursesStore();
