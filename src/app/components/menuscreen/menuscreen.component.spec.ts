import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuscreenComponent } from './menuscreen.component';

describe('MenuscreenComponent', () => {
  let component: MenuscreenComponent;
  let fixture: ComponentFixture<MenuscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
