import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-drawer-layout',
    templateUrl: './drawer-layout.component.html'
})
export class DrawerLayoutComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    public mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public router: Router, public dataStore: DataStoreService) {
        if (!dataStore.isUserConnected()) {
            router.navigateByUrl('/login');
        }
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
    logout() {
        this.dataStore.logout();
        this.router.navigateByUrl('/login');
    }

    toggleDrawer() {

    }
}
