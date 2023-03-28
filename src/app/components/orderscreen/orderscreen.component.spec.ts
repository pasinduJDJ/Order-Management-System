import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderscreenComponent } from './orderscreen.component';

describe('OrderscreenComponent', () => {
  let component: OrderscreenComponent;
  let fixture: ComponentFixture<OrderscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
