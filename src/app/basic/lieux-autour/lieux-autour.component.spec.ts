import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxAutourComponent } from './lieux-autour.component';

describe('LieuxAutourComponent', () => {
  let component: LieuxAutourComponent;
  let fixture: ComponentFixture<LieuxAutourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieuxAutourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxAutourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
