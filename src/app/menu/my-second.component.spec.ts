import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondComponent } from './my-second.component';

describe('MySecondComponent', () => {
  let component: MySecondComponent;
  let fixture: ComponentFixture<MySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
