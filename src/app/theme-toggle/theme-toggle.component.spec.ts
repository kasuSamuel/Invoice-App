import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeToggleComponent } from './theme-toggle.component';
import { DataService } from '../shared/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ThemeToggleComponent', () => {
  let component: ThemeToggleComponent;
  let fixture: ComponentFixture<ThemeToggleComponent>;
  let dataService: DataService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeToggleComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);

    // Mocking DataService methods
    jest.spyOn(dataService, 'getTheme').mockReturnValue('light');
    jest.spyOn(dataService, 'setTheme').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks(); // Ensure clean slate between tests
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isDarkMode to false when theme is light', () => {
    component.ngOnInit();
    expect(component.isDarkMode).toBe(false);
  });

  it('should initialize isDarkMode to true when theme is dark', () => {
    jest.spyOn(dataService, 'getTheme').mockReturnValue('dark');
    component.ngOnInit();
    expect(component.isDarkMode).toBe(true);
  });

  it('should toggle theme to dark mode', () => {
    component.isDarkMode = false;
    component.toggleTheme();
    expect(component.isDarkMode).toBe(true);
    expect(dataService.setTheme).toHaveBeenCalledWith('dark');
  });

  it('should toggle theme back to light mode', () => {
    component.isDarkMode = true;
    component.toggleTheme();
    expect(component.isDarkMode).toBe(false);
    expect(dataService.setTheme).toHaveBeenCalledWith('light');
  });

  it('should call getTheme from DataService during initialization', () => {
    component.ngOnInit();
    expect(dataService.getTheme).toHaveBeenCalled();
  });

  it('should call setTheme from DataService when toggling theme', () => {
    component.toggleTheme();
    expect(dataService.setTheme).toHaveBeenCalledTimes(1);
  });
});
