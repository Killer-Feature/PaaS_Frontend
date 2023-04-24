import {makeAutoObservable} from 'mobx';
import ResourseNet from '../network/resourse';

export type ResourseType = {
    name: string;
    type: string;
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

    async addResourse(resourse: {type: string, name: string}) {
        await ResourseNet.createResourse(resourse);

        this.isLoaded = false;
        this.fetch();
    }

    async removeResourse(type: string)  {
        const resourse = this.resourses.find((el) => el.type === type);

        if (resourse) {
            await ResourseNet.removeResourse(type, resourse.name);

            this.resourses = this.resourses.filter((el) => el.type !== type);
        }
    }

    clear() {
        this.isLoaded = false;
        this.fetch();
    }
};

export default new ResoursesStore();
