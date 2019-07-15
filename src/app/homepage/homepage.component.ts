import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

    constructor(private router: Router, private dataStore: DataStoreService) { }

    logout() {
        this.dataStore.logout();
        this.router.navigateByUrl('/login');
    }

    ngOnInit() {
    }

}
