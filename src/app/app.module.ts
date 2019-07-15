import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatSidenavModule, MatDividerModule,
    MatListModule, MatToolbarModule, MatIconModule,
    MatTableModule, MatSortModule, MatPaginatorModule
} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilespageComponent } from './filespage/filespage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DrawerLayoutComponent } from './drawer-layout/drawer-layout.component';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        LoginpageComponent,
        FilespageComponent,
        AdminpageComponent,
        NotFoundComponent,
        DrawerLayoutComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
