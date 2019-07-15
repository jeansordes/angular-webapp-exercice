import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataStoreService } from '../data-store.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-adminpage',
    templateUrl: './adminpage.component.html'
})
export class AdminpageComponent {
    firstnameCtrl = new FormControl('', Validators.required);
    lastnameCtrl = new FormControl('', Validators.required);
    birthdateCtrl = new FormControl('', Validators.required);
    emailCtrl = new FormControl('', Validators.required); // check email format
    roleCtrl = new FormControl('', Validators.required); // Operator, Guest, Administrator
    maxDate = new Date();

    constructor(private dataStore: DataStoreService, title: Title) {
        title.setTitle('Administration | Web App exercice');
    }

    formIsValid() {
        return this.firstnameCtrl.valid &&
            this.lastnameCtrl.valid &&
            this.birthdateCtrl.valid &&
            this.emailCtrl.valid &&
            this.roleCtrl.valid;
    }

    submitHandler() {
        // transform all in JSON
        const filename = this.firstnameCtrl.value + '_' + this.lastnameCtrl.value + '_userinfos.json';
        this.dataStore.downloadFile({
            firstname: this.firstnameCtrl.value,
            lastname: this.lastnameCtrl.value,
            birthdate: this.birthdateCtrl.value,
            email: this.emailCtrl.value,
            role: this.roleCtrl.value
        }, filename);
    }
}
