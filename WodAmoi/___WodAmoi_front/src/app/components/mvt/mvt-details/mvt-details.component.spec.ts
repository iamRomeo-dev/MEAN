import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtDetailsComponent } from './mvt-details.component';

describe('MvtDetailsComponent', () => {
  let component: MvtDetailsComponent;
  let fixture: ComponentFixture<MvtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
