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

  it('should filter employees by name, email, and phone', () => {
    component.searchTerm = 'sophia';
    expect(component.filteredEmployees.map((employee) => employee.id)).toEqual(['EMP-1001']);

    component.searchTerm = 'liam.carter@';
    expect(component.filteredEmployees.map((employee) => employee.id)).toEqual(['EMP-1002']);

    component.searchTerm = '555-0127';
    expect(component.filteredEmployees.map((employee) => employee.id)).toEqual(['EMP-1003']);
  });

  it('should not add an employee while the form is invalid', () => {
    component.addEmployee();

    expect(component.employees).toHaveLength(8);
    expect(component.form.controls.fullName.touched).toBe(true);

    component.form.controls.cnic.setValue('12345-1234567');
    expect(component.form.controls.cnic.hasError('pattern')).toBe(true);
  });

  it('should add valid employee details to the searchable directory', () => {
    component.form.setValue({
      fullName: 'Jordan Lee',
      email: 'jordan@example.com',
      password: 'securepass123',
      phone: '+92 300 1234567',
      cnic: '12345-1234567-1',
    });

    component.addEmployee();

    expect(component.employees[0]).toEqual({
      id: 'EMP-1009',
      name: 'Jordan Lee',
      initials: 'JL',
      email: 'jordan@example.com',
      phone: '+92 300 1234567',
    });
    expect(component.searchTerm).toBe('');
    expect(component.isAddModalOpen).toBe(false);
    expect(component.isToastOpen).toBe(true);
    expect(component.filteredEmployees[0].name).toBe('Jordan Lee');
  });
});
