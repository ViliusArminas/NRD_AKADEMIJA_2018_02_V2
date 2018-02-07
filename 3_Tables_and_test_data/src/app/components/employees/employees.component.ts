import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employees/employees.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-employees-component',
    templateUrl: 'employees.component.html'
})

export class EmployeesComponent implements OnInit {

    viewEmployeeIndex: any;

    employees: EmployeeModel[] = [
        {
            id: 1,
            firstName: 'Mindaugas',
            inventory: [
                {
                    id: 1,
                    name: 'Dell monitor',
                },
                {
                    id: 2,
                    name: 'Logitech mouse',
                },
                {
                    id: 3,
                    name: 'Dell computer',
                },
                {
                    id: 7,
                    name: 'Logitech keyboard',
                },
            ]
        },
        {
            id: 1,
            firstName: 'Kęstutis',
            inventory: [
                {
                    id: 5,
                    name: 'Asus monitor',
                },
                {
                    id: 2,
                    name: 'Logitech mouse',
                },
                {
                    id: 3,
                    name: 'Dell computer',
                },
            ]
        },
        {
            id: 1,
            firstName: 'Linas',
            inventory: []
        }
    ];

    employeeHeaders: any[] = [
        { col: 'no', label: '#' },
        { col: 'firstName', label: 'First Name' },
        { col: 'inventorySize', label: 'Inventory Size' }
    ];

    constructor(private modalService: NgbModal) { }

    ngOnInit() { }

    open(modal, eployeeIndex) {
        this.modalService.open(modal);
        this.viewEmployeeIndex = eployeeIndex;
        console.log(this.viewEmployeeIndex);
    }
}
