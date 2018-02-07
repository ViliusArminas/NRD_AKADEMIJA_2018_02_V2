import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employees/employees.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../services/employees/employees.service';
import { Observable, BehaviorSubject } from 'rxjs/';

@Component({
    selector: 'app-employees-component',
    templateUrl: 'employees.component.html'
})

export class EmployeesComponent implements OnInit {

    loading = false;

    employees$: Observable<EmployeeModel[]>;
    employeeInventory$: Observable<any>;

    employeeHeaders: any[] = [
        { col: 'no', label: '#' },
        { col: 'firstName', label: 'First Name' },
        { col: 'inventorySize', label: 'Inventory Size' }
    ];

    constructor(private modalService: NgbModal,
        private employeeService: EmployeeService) { }

    ngOnInit() {
        this.loading = true;

        this.employeeService.getList().subscribe((data: EmployeeModel[]) => {
            this.employees$ = Observable.of(data);
            this.loading = false;
        });
    }

    open(modal, employeeIndex) {
        this.modalService.open(modal);
        this.employeeInventory$ = this.employees$.map(arr => arr[employeeIndex].inventory);
    }
}
