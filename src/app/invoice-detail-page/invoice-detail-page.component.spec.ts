import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';  // Import StoreModule to configure the store
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute
import { InvoiceDetailPageComponent } from './invoice-detail-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('InvoiceDetailPageComponent', () => {
  let component: InvoiceDetailPageComponent;
  let fixture: ComponentFixture<InvoiceDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}), 
HttpClientModule      ],
providers: [
  {
    provide: ActivatedRoute,
    useValue: { snapshot: { paramMap: { get: () => 'mock-id' } } }  // Mock the ActivatedRoute
  }
]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
