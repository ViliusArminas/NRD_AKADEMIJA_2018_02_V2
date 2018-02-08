import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryModel } from '../../../models/inventory/inventory.model';
import { Observable } from 'rxjs/';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { InventoryTypesModel } from '../../../models/inventory/inventory-types.model';


@Component({
    selector: 'app-inventory-component',
    templateUrl: 'inventory.component.html'
})

export class InventoryComponent implements OnInit {

    inventory$: Observable<InventoryModel[]>;
    inventoryTypes$: Observable<InventoryTypesModel[]>;

    loading = false;

    typeFilter: any;

    inventoryHeaders: any[] = [
        { col: 'no', label: '#' },
        { col: 'name', label: 'Name' },
        { col: 'stock', label: 'Left In Stock' }
    ];

    constructor(private inventoryService: InventoryService) { }

    ngOnInit() {
        this.loading = true;
        this.inventoryService.getInventoryList().subscribe((data: InventoryModel[]) => {
            this.inventory$ = Observable.of(data);

            this.inventoryService.getInventoryTypesList().subscribe((d: InventoryTypesModel[]) => {
                this.inventoryTypes$ = Observable.of(d);
            });
            this.loading = false;
        });
    }

    countItemsLeft(amount, left) {
        return amount - left;
    }

    setTypeFilter(typeId) {
        this.typeFilter = typeId;
    }

    /* // Perdaryta su pipe. -> inventory-type-filter.pipe.ts
    filterInventoryOfTypes(typeFilter) {
        if (typeFilter) {
            return this.inventory$.map(items => items.filter(i => i.type === typeFilter));
        }
        return this.inventory$;
    } */
}
