import { Component } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router, private dataStore: DataStoreService) { }

    logout() {
        this.dataStore.clear();
        this.router.navigateByUrl('/login');
    }

    isFirstLayout() {
        return this.router.url === '/' || this.isLoginPage();
    }

    isLoginPage() {
        return this.router.url === '/login';
    }
}
