import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {

  constructor(title: Title) {
    title.setTitle('404 Not found | Web App exercice');
  }

}
