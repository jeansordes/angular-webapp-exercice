import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})
export class HomepageComponent {

    constructor(public router: Router, public dataStore: DataStoreService, title: Title) {
        title.setTitle('Home page | Web App exercice');
    }

    logout() {
        this.dataStore.logout();
        this.router.navigateByUrl('/login');
    }
}
