import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html'
})

export class LoginpageComponent {
    usernameCtrl = new FormControl('', [Validators.required]);
    passwordCtrl = new FormControl('', [Validators.required]);

    constructor(private router: Router, private dataStore: DataStoreService, title: Title) {
        if (dataStore.isUserConnected()) {
            router.navigateByUrl('/');
        }
        title.setTitle('Log in | Web App exercice');
    }

    submitHandler() {
        if (this.usernameCtrl.valid && this.passwordCtrl.valid) {
            this.dataStore.setUsername(this.usernameCtrl.value);
            this.router.navigateByUrl('/files');
        }
    }

    displayHelp() {
        alert('This is a demo version, and you don\'t need any account to login, you can simply enter any credentials to log in');
    }
}
