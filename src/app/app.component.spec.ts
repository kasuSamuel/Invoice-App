import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        StoreModule.forRoot({}),
HttpClientModule      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here
});
