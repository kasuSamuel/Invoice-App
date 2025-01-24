import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';
import { Invoice } from './invoice.interface';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle sidebar visibility', (done) => {
    // Initially, it should be false (hidden)
    service.sidebarVisibility$.subscribe((visibility) => {
      expect(visibility).toBeFalsy(); // Assuming the initial state is false
    });

    // Toggle sidebar visibility to true
    service.toggleSidebar();

    // After the first toggle, it should be true
    service.sidebarVisibility$.subscribe((visibility) => {
      expect(visibility).toBeTruthy();
    });

    // Toggle sidebar visibility back to false
    service.toggleSidebar();

    // After the second toggle, it should be false again
    service.sidebarVisibility$.subscribe((visibility) => {
      expect(visibility).toBeFalsy();
      done();  // Signal to Jasmine that the async operation is done
    });
  });

  it('should show the sidebar when toggled once', (done) => {
    // Initially, it should be false (hidden)
    service.sidebarVisibility$.subscribe((visibility) => {
      expect(visibility).toBeFalsy(); // Assuming initial state is false
    });

    // Toggle sidebar visibility to true
    service.toggleSidebar();

    // After the first toggle, it should be true
    service.sidebarVisibility$.subscribe((visibility) => {
      expect(visibility).toBeTruthy();
      done();  // Signal that the async operation has finished
    });
  });


  it('should initialize with a light theme if no theme is saved', () => {
    const savedTheme = service.getTheme();
    expect(savedTheme).toBeNull();
    service.initTheme();
    expect(document.body.getAttribute('data-theme')).toBe('light');
    service.setTheme('dark');
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    service.setTheme('light');
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });



it('should update filtered count', (done) => {
  const count = 5;
  service.filteredCount$.subscribe((filteredCount) => {
    expect(filteredCount).toBe(count);
    done();
  });
  service.setFilteredCount(count);
});

});

