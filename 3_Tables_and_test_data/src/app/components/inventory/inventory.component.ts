import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryModel } from '../../models/inventory/inventory.model';

@Component({
    selector: 'app-inventory-component',
    templateUrl: 'inventory.component.html'
})

export class InventoryComponent implements OnInit {

    inventory: InventoryModel[] =
        [
            {
                id: 1,
                name: 'Dell monitor',
                amount: 5,
                taken: 5
            },
            {
                id: 5,
                name: 'Asus monitor',
                amount: 10,
                taken: 2
            },
            {
                id: 2,
                name: 'Logitech mouse',
                amount: 12,
                taken: 4
            },
            {
                id: 3,
                name: 'Dell computer',
                amount: 4,
                taken: 2
            },
            {
                id: 7,
                name: 'Logitech keyboard',
                amount: 5,
                taken: 2
            },
        ];

    inventoryHeaders: any[] = [
        { col: 'no', label: '#' },
        { col: 'name', label: 'Name' },
        { col: 'stock', label: 'Left In Stock' }
    ];

    constructor() { }

    ngOnInit() { }

    countItemsLeft(amount, left) {
        return amount - left;
    }
}
