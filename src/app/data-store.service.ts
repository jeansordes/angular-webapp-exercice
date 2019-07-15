import { Injectable } from '@angular/core';

export class FileStruct {
    filename: string;
    author: string;
    createdOn: Date;
}

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {
    private ls = window.localStorage;

    constructor() {
        if (!this.ls.username) {
            this.ls.username = '';
        }
        if (!this.ls.localFiles || !Array.isArray(this.toJSON(this.ls.localFiles))) {
            this.ls.localFiles = '[]';
        }
    }

    // utils
    fromJSON(o): string {
        return JSON.stringify(o);
    }

    toJSON(o: string) {
        return JSON.parse(o);
    }

    timeSince(date: Date): string {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + ' years ago';
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + ' months ago';
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + ' days ago';
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + ' hours ago';
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + ' min. ago';
        }
        return Math.floor(seconds) + ' sec. ago';
    }

    // current user
    logout() {
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

    // files
    getFiles() {
        return this.toJSON(this.ls.localFiles).map(el => ({ ...el, createdOn: new Date(el.createdOn) }));
    }

    addFile(filenameInput: string) {
        this.ls.localFiles = this.fromJSON([...this.getFiles(),
        { filename: filenameInput, author: this.getUsername(), createdOn: new Date() }]);
    }
}
