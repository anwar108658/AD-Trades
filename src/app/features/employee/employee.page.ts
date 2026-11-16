import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonNote,
  IonSearchbar,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { callOutline, closeOutline, peopleOutline, personAddOutline, searchOutline } from 'ionicons/icons';

interface Employee {
  id: string;
  name: string;
  initials: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonAvatar,
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonNote,
    IonSearchbar,
    IonTitle,
    IonToast,
    IonToolbar,
  ],
})
export class EmployeePage {
  private readonly fb = inject(FormBuilder);
  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
    cnic: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{7}-?\d$/)]],
  });

  readonly employees: Employee[] = [
    {
      id: 'EMP-1001',
      name: 'Sophia Bennett',
      initials: 'SB',
      email: 'sophia.bennett@adtrade.com',
      phone: '+1 (608) 555-0142',
    },
    {
      id: 'EMP-1002',
      name: 'Liam Carter',
      initials: 'LC',
      email: 'liam.carter@adtrade.com',
      phone: '+1 (608) 555-0186',
    },
    {
      id: 'EMP-1003',
      name: 'Olivia Martinez',
      initials: 'OM',
      email: 'olivia.martinez@adtrade.com',
      phone: '+1 (608) 555-0127',
    },
    {
      id: 'EMP-1004',
      name: 'Noah Williams',
      initials: 'NW',
      email: 'noah.williams@adtrade.com',
      phone: '+1 (608) 555-0163',
    },
    {
      id: 'EMP-1005',
      name: 'Ava Johnson',
      initials: 'AJ',
      email: 'ava.johnson@adtrade.com',
      phone: '+1 (608) 555-0191',
    },
    {
      id: 'EMP-1006',
      name: 'Ethan Davis',
      initials: 'ED',
      email: 'ethan.davis@adtrade.com',
      phone: '+1 (608) 555-0138',
    },
    {
      id: 'EMP-1007',
      name: 'Isabella Wilson',
      initials: 'IW',
      email: 'isabella.wilson@adtrade.com',
      phone: '+1 (608) 555-0175',
    },
    {
      id: 'EMP-1008',
      name: 'Mason Brown',
      initials: 'MB',
      email: 'mason.brown@adtrade.com',
      phone: '+1 (608) 555-0114',
    },
  ];

  searchTerm = '';
  isAddModalOpen = false;
  isToastOpen = false;
  private nextEmployeeId = 1009;

  constructor() {
    addIcons({
      callOutline,
      closeOutline,
      peopleOutline,
      personAddOutline,
      searchOutline,
    });
  }

  get filteredEmployees(): Employee[] {
    const query = this.searchTerm.trim().toLowerCase();
    if (!query) {
      return this.employees;
    }

    return this.employees.filter((employee) =>
      [employee.name, employee.email, employee.phone].some((value) => value.toLowerCase().includes(query)),
    );
  }

  openAddModal(): void {
    this.isAddModalOpen = true;
  }

  closeAddModal(): void {
    this.isAddModalOpen = false;
  }

  onAddModalDismiss(): void {
    this.form.reset();
  }

  addEmployee(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { fullName, email, phone } = this.form.getRawValue();
    const name = fullName.trim();
    this.employees.unshift({
      id: `EMP-${this.nextEmployeeId++}`,
      name,
      initials: name
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join(''),
      email: email.trim(),
      phone: phone.trim(),
    });

    this.searchTerm = '';
    this.closeAddModal();
    this.isToastOpen = true;
  }
}
