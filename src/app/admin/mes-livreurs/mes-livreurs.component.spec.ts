import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLivreursComponent } from './mes-livreurs.component';

describe('MesLivreursComponent', () => {
  let component: MesLivreursComponent;
  let fixture: ComponentFixture<MesLivreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesLivreursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesLivreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
