import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWodComponent } from './add-wod.component';

describe('AddWodComponent', () => {
  let component: AddWodComponent;
  let fixture: ComponentFixture<AddWodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
