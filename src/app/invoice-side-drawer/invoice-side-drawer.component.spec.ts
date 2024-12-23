import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSideDrawerComponent } from './invoice-side-drawer.component';

describe('InvoiceSideDrawerComponent', () => {
  let component: InvoiceSideDrawerComponent;
  let fixture: ComponentFixture<InvoiceSideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceSideDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
