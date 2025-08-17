import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficefurntureComponent } from './officefurnture.component';

describe('OfficefurntureComponent', () => {
  let component: OfficefurntureComponent;
  let fixture: ComponentFixture<OfficefurntureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficefurntureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficefurntureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
