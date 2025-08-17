import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningroomComponent } from './diningroom.component';

describe('DiningroomComponent', () => {
  let component: DiningroomComponent;
  let fixture: ComponentFixture<DiningroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiningroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiningroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
