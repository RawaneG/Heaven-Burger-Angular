import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaLivraisonComponent } from './ma-livraison.component';

describe('MaLivraisonComponent', () => {
  let component: MaLivraisonComponent;
  let fixture: ComponentFixture<MaLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
