import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscreenComponent } from './productscreen.component';

describe('ProductscreenComponent', () => {
  let component: ProductscreenComponent;
  let fixture: ComponentFixture<ProductscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
