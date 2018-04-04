import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employees/employees.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
    selector: 'app-employees-details',
    templateUrl: 'employees-details.component.html'
})

export class EmployeesDetailsComponent implements OnInit {

    firstName: string;
    employeeInventory: any[] = [];
    activateId: number;

    emaill: any;

    inventoryItems: any[];

    constructor(private service: EmployeeService,
        private router: Router,
        private inventoryService: InventoryService,
        private activeRoute: ActivatedRoute,
        public toastr: ToastsManager) { }

    ngOnInit() {
        this.inventoryService.getInventoryList().subscribe((res: any) => {
            this.inventoryItems = res;
        });


        this.activeRoute.params.subscribe((params: Params) => {
            this.activateId = params['id'];
        });

        if (this.router.url.match('new')) {
            this.firstName = '';
            this.employeeInventory = [];
        } else if (this.activateId > 0) {
            this.service.get(this.activateId).subscribe((res: any) => {
                this.firstName = res.firstName;
                this.employeeInventory = res.inventory;
            });
        }


    }

    addNew(form) {
        if (!form.invalid) {
            const result = {
                firstName: this.firstName,
                inventory: this.employeeInventory
            };
            if (this.router.url.match('new')) {
                this.service.insert(result).subscribe((res: any) => {
                    this.toastr.success('Inserted successfully!');
                    this.router.navigate(['/employees']);

                }
                );
            } else if (this.activateId > 0) {
                this.service.update(result, this.activateId).subscribe((res: any) => {
                    this.toastr.success('Updated successfully!');
                    this.router.navigate(['/employees']);

                });
            }
        } else {
            this.toastr.error('Form is invalid!!!');
        }
    }

    addToEmployee(inventory) {
        this.employeeInventory.push(inventory);
    }

    remove(index) {
        this.employeeInventory.splice(index, 1);
    }
}
