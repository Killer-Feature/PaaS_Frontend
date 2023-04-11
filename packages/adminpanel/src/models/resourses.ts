import {makeAutoObservable} from 'mobx';
import ResourseNet from '../network/resourse';

export type ResourseType = {
    id: number,
    name: string,
    ip: string,
    clusterID: number,
    isMaster: boolean,
    login?: string,
    password?: string,
};

type ResoursesType = Array<ResourseType>;

class ResoursesStore {
    resourses: ResoursesType = [];
    isLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };
};

export default new ResoursesStore();
