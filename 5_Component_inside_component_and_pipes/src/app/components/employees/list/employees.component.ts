import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employees/employees.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../../services/employees/employees.service';
import { Observable, BehaviorSubject } from 'rxjs/';
import { Router } from '@angular/router';
import { ToastModule } from 'ng2-toastr/src/toast.module';
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
        { col: 'inventorySize', label: 'Inventory Size' }
    ];

    constructor(private router: Router,
        private modalService: NgbModal,
        private employeeService: EmployeeService,
        private tostr: ToastsManager) { }

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

    edit(id) {
        this.router.navigate(['/employees/' + id]);
    }

    remove(id) {
        this.employeeService.delete(id).subscribe((res: any) => {
            this.tostr.warning('Deleted Successfully!');
            this.refreshList();
        });
    }
}
