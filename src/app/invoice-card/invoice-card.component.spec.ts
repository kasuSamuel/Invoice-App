import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceCardComponent } from './invoice-card.component';
import { Store, StoreModule } from '@ngrx/store';


describe('InvoiceCardComponent', () => {
  let component: InvoiceCardComponent;
  let fixture: ComponentFixture<InvoiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceCardComponent,StoreModule.forRoot({})]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
