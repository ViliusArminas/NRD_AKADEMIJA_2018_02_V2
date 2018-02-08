import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employees/employees.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../../services/employees/employees.service';
import { Observable, BehaviorSubject } from 'rxjs/';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

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
        { col: 'email', label: 'Email' },
        { col: 'workplace', label: 'Workplace' },
        { col: 'inventorySize', label: 'Inventory Size' }
    ];

    constructor(private router: Router,
        private modalService: NgbModal,
        private employeeService: EmployeeService,
        public toastr: ToastsManager) { }

    ngOnInit() {
        this.refreshList();
    }

    refreshList() {
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

    openAddNew() {
        this.router.navigate(['/employees/new']);
    }

    delete(id) {
        this.employeeService.deleteItem(id).subscribe(res => {
            console.log(res);
            this.toastr.success('Employee deleted', 'Success!');
            this.refreshList();
        },
            (err) => {
                console.log(err);
            });
    }

    edit(id) {
        this.router.navigate(['/employees/' + id]);
    }
}
