import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackcartitemComponent } from './stackcartitem.component';

describe('StackcartitemComponent', () => {
  let component: StackcartitemComponent;
  let fixture: ComponentFixture<StackcartitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackcartitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackcartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
