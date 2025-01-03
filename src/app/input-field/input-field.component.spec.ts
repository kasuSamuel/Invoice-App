import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputFieldComponent } from './input-field.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // Import ReactiveFormsModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;

    // Create the FormGroup and set it on the component (or pass it into the template)
    component.formGroup = new FormGroup({
      firstName: new FormControl(''),
    });

    // Ensure the input control name matches
    component.controlName = 'firstName'; // Make sure controlName is set correctly

    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form group and control', () => {
    if (component.formGroup) {
      expect(component.formGroup.contains('firstName')).toBe(true);
    } else {
      fail('formGroup is null');
    }
  });
});
