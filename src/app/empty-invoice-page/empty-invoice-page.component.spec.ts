import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyInvoicePageComponent } from './empty-invoice-page.component';

describe('EmptyInvoicePageComponent', () => {
  let component: EmptyInvoicePageComponent;
  let fixture: ComponentFixture<EmptyInvoicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyInvoicePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyInvoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
