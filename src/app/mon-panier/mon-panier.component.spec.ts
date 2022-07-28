import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPanierComponent } from './mon-panier.component';

describe('MonPanierComponent', () => {
  let component: MonPanierComponent;
  let fixture: ComponentFixture<MonPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
