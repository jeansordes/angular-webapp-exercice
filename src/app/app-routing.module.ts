import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FilespageComponent } from './filespage/filespage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'login', component: LoginpageComponent},
    { path: 'files', component: FilespageComponent},
    { path: 'admin', component: AdminpageComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
