import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryModel } from '../../models/inventory/inventory.model';
import { Observable } from 'rxjs/';
import { InventoryService } from '../../services/inventory/inventory.service';


@Component({
    selector: 'app-inventory-component',
    templateUrl: 'inventory.component.html'
})

export class InventoryComponent implements OnInit {

    inventory$: Observable<InventoryModel[]>;

    loading = false;

    inventoryHeaders: any[] = [
        { col: 'no', label: '#' },
        { col: 'name', label: 'Name' },
        { col: 'stock', label: 'Left In Stock' }
    ];

    constructor(private inventoryService: InventoryService) { }

    ngOnInit() {
        this.loading = true;
        this.inventoryService.getList().subscribe((data: InventoryModel[]) => {
            this.inventory$ = Observable.of(data);
            this.loading = false;
        });
    }

    countItemsLeft(amount, left) {
        return amount - left;
    }
}
