import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtsListComponent } from './mvts-list.component';

describe('MvtsListComponent', () => {
  let component: MvtsListComponent;
  let fixture: ComponentFixture<MvtsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvtsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
