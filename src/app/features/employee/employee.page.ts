import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

type EmployeeStatus = 'Active' | 'On leave' | 'Inactive';
type AvatarColor = 'blue' | 'purple' | 'green' | 'orange' | 'pink';

interface Employee {
  id: string;
  name: string;
  initials: string;
  email: string;
  role: string;
  department: string;
  phone: string;
  joinDate: string;
  status: EmployeeStatus;
  avatarColor: AvatarColor;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
  imports: [
    FormsModule,
    IonAvatar,
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonIcon,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
  ],
})
export class EmployeePage {
  readonly employees: Employee[] = [
    {
      id: 'EMP-1001',
      name: 'Sophia Bennett',
      initials: 'SB',
      email: 'sophia.bennett@adtrade.com',
      role: 'Operations Manager',
      department: 'Operations',
      phone: '+1 (608) 555-0142',
      joinDate: 'Mar 12, 2022',
      status: 'Active',
      avatarColor: 'blue',
    },
    {
      id: 'EMP-1002',
      name: 'Liam Carter',
      initials: 'LC',
      email: 'liam.carter@adtrade.com',
      role: 'Sales Representative',
      department: 'Sales',
      phone: '+1 (608) 555-0186',
      joinDate: 'Jul 08, 2023',
      status: 'Active',
      avatarColor: 'purple',
    },
    {
      id: 'EMP-1003',
      name: 'Olivia Martinez',
      initials: 'OM',
      email: 'olivia.martinez@adtrade.com',
      role: 'Finance Specialist',
      department: 'Finance',
      phone: '+1 (608) 555-0127',
      joinDate: 'Jan 19, 2021',
      status: 'On leave',
      avatarColor: 'green',
    },
    {
      id: 'EMP-1004',
      name: 'Noah Williams',
      initials: 'NW',
      email: 'noah.williams@adtrade.com',
      role: 'Customer Support Lead',
      department: 'Support',
      phone: '+1 (608) 555-0163',
      joinDate: 'Oct 02, 2022',
      status: 'Active',
      avatarColor: 'orange',
    },
    {
      id: 'EMP-1005',
      name: 'Ava Johnson',
      initials: 'AJ',
      email: 'ava.johnson@adtrade.com',
      role: 'People Coordinator',
      department: 'People',
      phone: '+1 (608) 555-0191',
      joinDate: 'May 15, 2024',
      status: 'Active',
      avatarColor: 'pink',
    },
    {
      id: 'EMP-1006',
      name: 'Ethan Davis',
      initials: 'ED',
      email: 'ethan.davis@adtrade.com',
      role: 'Field Officer',
      department: 'Operations',
      phone: '+1 (608) 555-0138',
      joinDate: 'Feb 27, 2023',
      status: 'Inactive',
      avatarColor: 'blue',
    },
    {
      id: 'EMP-1007',
      name: 'Isabella Wilson',
      initials: 'IW',
      email: 'isabella.wilson@adtrade.com',
      role: 'Accountant',
      department: 'Finance',
      phone: '+1 (608) 555-0175',
      joinDate: 'Sep 11, 2021',
      status: 'Active',
      avatarColor: 'purple',
    },
    {
      id: 'EMP-1008',
      name: 'Mason Brown',
      initials: 'MB',
      email: 'mason.brown@adtrade.com',
      role: 'Sales Representative',
      department: 'Sales',
      phone: '+1 (608) 555-0114',
      joinDate: 'Apr 22, 2024',
      status: 'Active',
      avatarColor: 'green',
    },
  ];

  readonly pageSize = 7;
  searchTerm = '';
  selectedStatus = 'all';
  currentPage = 1;

  get filteredEmployees(): Employee[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.employees.filter((employee) => {
      const matchesStatus = this.selectedStatus === 'all' || employee.status === this.selectedStatus;
      const matchesQuery =
        !query ||
        [employee.name, employee.id, employee.email, employee.role, employee.department, employee.phone].some((value) =>
          value.toLowerCase().includes(query),
        );

      return matchesStatus && matchesQuery;
    });
  }

  get paginatedEmployees(): Employee[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredEmployees.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredEmployees.length / this.pageSize));
  }

  get visibleStart(): number {
    return this.filteredEmployees.length ? (this.currentPage - 1) * this.pageSize + 1 : 0;
  }

  get visibleEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredEmployees.length);
  }

  get activeEmployeeCount(): number {
    return this.employees.filter((employee) => employee.status === 'Active').length;
  }

  get onLeaveEmployeeCount(): number {
    return this.employees.filter((employee) => employee.status === 'On leave').length;
  }

  get departmentCount(): number {
    return new Set(this.employees.map((employee) => employee.department)).size;
  }

  previousPage(): void {
    this.currentPage = Math.max(1, this.currentPage - 1);
  }

  nextPage(): void {
    this.currentPage = Math.min(this.totalPages, this.currentPage + 1);
  }
}
