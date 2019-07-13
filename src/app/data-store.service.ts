import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {
    private ls = window.localStorage;

    constructor() {
        if (!this.ls.username) {
            this.ls.username = '';
        }
    }

    clear() {
        this.ls.username = '';
    }

    setUsername(val: string) {
        this.ls.username = val;
    }

    getUsername() {
        return this.ls.username;
    }

    isUserConnected() {
        return this.ls.username !== '';
    }
}
