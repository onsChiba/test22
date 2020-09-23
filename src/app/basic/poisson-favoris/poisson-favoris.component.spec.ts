import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoissonFavorisComponent } from './poisson-favoris.component';

describe('PoissonFavorisComponent', () => {
  let component: PoissonFavorisComponent;
  let fixture: ComponentFixture<PoissonFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoissonFavorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoissonFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
