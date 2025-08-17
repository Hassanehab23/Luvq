import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsfurntureComponent } from './kidsfurnture.component';

describe('KidsfurntureComponent', () => {
  let component: KidsfurntureComponent;
  let fixture: ComponentFixture<KidsfurntureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsfurntureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsfurntureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
