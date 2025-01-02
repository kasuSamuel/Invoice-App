import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvoiceFullFormPageComponent } from './create-invoice-full-form-page.component';

describe('CreateInvoiceFullFormPageComponent', () => {
  let component: CreateInvoiceFullFormPageComponent;
  let fixture: ComponentFixture<CreateInvoiceFullFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInvoiceFullFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInvoiceFullFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
