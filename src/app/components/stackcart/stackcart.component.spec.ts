import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackcartComponent } from './stackcart.component';

describe('StackcartComponent', () => {
  let component: StackcartComponent;
  let fixture: ComponentFixture<StackcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
