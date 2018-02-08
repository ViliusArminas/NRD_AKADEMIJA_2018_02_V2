import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../../../models/employees/employees.model';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { InventoryModel } from '../../../models/inventory/inventory.model';
import { Observable } from 'rxjs/';
import { EmployeeService } from '../../../services/employees/employees.service';


@Component({
    selector: 'app-employees-details',
    templateUrl: 'employees-details.component.html'
})

export class EmployeesDetailsComponent implements OnInit {

    activeParameter: any;
    action: any;
    loading = false;

    availableInventoryLoading = false;
    availableInventory: InventoryModel[];

    employee: EmployeeModel;

    constructor(private router: Router,
        private activateRoute: ActivatedRoute,
        private inventoryService: InventoryService,
        private employeeService: EmployeeService) { }

    ngOnInit() {

        this.loading = true;
        this.availableInventoryLoading = true;

        this.inventoryService.getInventoryList().subscribe((data: InventoryModel[]) => {
            this.availableInventory = data;
            this.availableInventoryLoading = false;
        });

        this.activateRoute.params.subscribe((params: Params) => {
            this.activeParameter = params['id'];
        });

        if (this.router.url.match('new')) {
            this.action = 'Add new';
            this.employee = new EmployeeModel;
            this.loading = false;
        } else if (this.activeParameter > 0) {
            this.action = 'Edit';
        } else {
            this.router.navigate(['/employees']);
        }
    }

    save() {
        this.employeeService.saveItem(this.employee).subscribe(res => {
            console.log(res);
            this.router.navigate(['/employees']);
        },
            (err) => {
                console.log(err);
            });
    }

    addForEmployee(inventoryItem, inventoryIndex) {
        if (!this.employee.inventory) {
            this.employee.inventory = [];
        }
        this.employee.inventory.push(inventoryItem);
        this.availableInventory[inventoryIndex].taken += 1;

    }

    removeFromEmployee(itemIndex) {

        this.availableInventory.forEach((element, index) => {
            if (element.id === this.employee.inventory[itemIndex].id) {
                element.taken -= 1;
            }
        });
        this.employee.inventory.splice(itemIndex, 1);
    }

    countItemsLeft(amount, left) {
        return amount - left;
    }
}
