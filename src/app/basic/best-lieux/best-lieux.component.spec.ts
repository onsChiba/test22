import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestLieuxComponent } from './best-lieux.component';

describe('BestLieuxComponent', () => {
  let component: BestLieuxComponent;
  let fixture: ComponentFixture<BestLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestLieuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
