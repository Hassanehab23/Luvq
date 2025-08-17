import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentedComponent } from './documented.component';

describe('DocumentedComponent', () => {
  let component: DocumentedComponent;
  let fixture: ComponentFixture<DocumentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
