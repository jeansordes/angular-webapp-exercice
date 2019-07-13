import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
    selector: 'app-filespage',
    templateUrl: './filespage.component.html'
})
export class FilespageComponent implements OnInit {

    constructor(private router: Router, private dataStore: DataStoreService) {
        if (!dataStore.isUserConnected()) {
            router.navigateByUrl('/login');
        }
    }

    ngOnInit() {
    }

}
