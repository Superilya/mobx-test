import { observable, action, makeObservable } from 'mobx';

export class InputListStore {
    @observable list: Array<string> = observable.array();

    @action add(item: string) {
        this.list.unshift(item);
    }
}
