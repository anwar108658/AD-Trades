import { TestBed, type ComponentFixture } from '@angular/core/testing';

import { EmployeePage } from './employee.page';

describe('EmployeePage', () => {
  let component: EmployeePage;
  let fixture: ComponentFixture<EmployeePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter employees by search text and status', () => {
    component.searchTerm = 'sophia';
    expect(component.filteredEmployees.map((employee) => employee.id)).toEqual(['EMP-1001']);

    component.searchTerm = '';
    component.selectedStatus = 'On leave';
    expect(component.filteredEmployees.map((employee) => employee.id)).toEqual(['EMP-1003']);
  });

  it('should paginate the employee list', () => {
    expect(component.paginatedEmployees).toHaveLength(component.pageSize);
    expect(component.totalPages).toBe(2);

    component.nextPage();

    expect(component.currentPage).toBe(2);
    expect(component.paginatedEmployees.map((employee) => employee.id)).toEqual(['EMP-1008']);

    component.previousPage();
    expect(component.currentPage).toBe(1);
  });
});
