import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorfurntureComponent } from './outdoorfurnture.component';

describe('OutdoorfurntureComponent', () => {
  let component: OutdoorfurntureComponent;
  let fixture: ComponentFixture<OutdoorfurntureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorfurntureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorfurntureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
