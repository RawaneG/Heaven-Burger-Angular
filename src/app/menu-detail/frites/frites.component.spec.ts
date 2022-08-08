import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritesComponent } from './frites.component';

describe('FritesComponent', () => {
  let component: FritesComponent;
  let fixture: ComponentFixture<FritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
