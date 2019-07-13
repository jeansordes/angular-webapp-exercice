import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
    selector: 'app-adminpage',
    templateUrl: './adminpage.component.html'
})
export class AdminpageComponent implements OnInit {

    constructor(private router: Router, private dataStore: DataStoreService) {
        if (!dataStore.isUserConnected()) {
            router.navigateByUrl('/login');
        }
    }

    ngOnInit() {
    }

}
