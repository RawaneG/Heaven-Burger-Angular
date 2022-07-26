import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDetailComponent } from './burger-detail.component';

describe('BurgerDetailComponent', () => {
  let component: BurgerDetailComponent;
  let fixture: ComponentFixture<BurgerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
