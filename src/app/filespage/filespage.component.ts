import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface FileData {
    filename: string;
    author: string;
    createdOn: string;
}

@Component({
    selector: 'app-filespage',
    templateUrl: './filespage.component.html'
})
export class FilespageComponent implements OnInit {
    displayedColumns: string[] = ['filename', 'author', 'createdOn', 'download'];
    dataSource: MatTableDataSource<FileData>;

    filenameCtrl = new FormControl('');

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private dataStore: DataStoreService) { }

    ngOnInit() {
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.dataStore.getFiles());

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    downloadFile(file: FileData) {
        const tmp = document.createElement('a');
        tmp.download = file.filename + '_infos.txt';
        tmp.href = window.URL.createObjectURL(new Blob([JSON.stringify(file)], { type: 'application/json' }));
        tmp.click();
        tmp.remove();
    }

    submitHandler() {
        if (this.filenameCtrl.value !== '') {
            this.dataStore.addFile(this.filenameCtrl.value);

            this.filenameCtrl.setValue('');

            this.ngOnInit();
        }
    }

    ago(e: Date): string {
        return this.dataStore.timeSince(e);
    }
}
