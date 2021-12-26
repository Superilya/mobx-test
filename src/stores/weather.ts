import { observable, action, makeObservable } from 'mobx';
import { weatherApi } from '../api/weather';

export class WeatherStore {
    public lastInQueue: string | null = null;
    public data: string | null = null;
    public isLoading: boolean = false;

    constructor() {
        makeObservable(this, {
            lastInQueue: observable,
            data: observable,
            isLoading: observable,
            requestInQueue: action,
        })
    }

    requestInQueue(cityName: string) {
        if (this.isLoading) {
            this.lastInQueue = cityName;

            return;
        }

        this.isLoading = true;
        this.request(cityName)
    }

    private async request(cityName: string) {
        if (this.lastInQueue === cityName) {
            this.lastInQueue = null;
        }

        const result = await weatherApi.get(cityName);

        this.data = result;

        if (this.lastInQueue) {
            this.request(this.lastInQueue);
        }

        this.isLoading = false;
    }
}
