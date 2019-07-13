import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html'
})

export class LoginpageComponent implements OnInit {
    usernameCtrl = new FormControl('', [Validators.required]);
    passwordCtrl = new FormControl('', [Validators.required]);

    constructor(private router: Router, private dataStore: DataStoreService) {
        if (dataStore.isUserConnected()) {
            router.navigateByUrl('/');
        }
    }

    ngOnInit() { }

    submitHandler() {
        if (this.usernameCtrl.valid && this.passwordCtrl.valid) {
            this.dataStore.setUsername(this.usernameCtrl.value);
            this.router.navigateByUrl('/files');
        }
    }
}
