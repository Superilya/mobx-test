import { observable, action, makeObservable } from 'mobx';

export class SelectedSuggestionStore {
    public data: string | null = null;

    constructor() {
        makeObservable(this, {
            data: observable,
            set: action
        });
    }

    set(item: string) {
        this.data = item;
    }
}
