import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilespageComponent } from './filespage.component';

describe('FilespageComponent', () => {
  let component: FilespageComponent;
  let fixture: ComponentFixture<FilespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
