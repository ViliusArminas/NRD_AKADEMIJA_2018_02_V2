import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InventoryTypesModel } from '../../../../models/inventory/inventory-types.model';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-inventory-filter-buttons',
    template: `
    <div class="container">
        <button type="button" class="btn btn-primary"
        (click)="setTypeFilter()"> All</button>
        <button *ngFor="let t of inventoryTypesInDifferentComponent$ | async" type="button" class="btn btn-primary mr-1"
        (click)="setTypeFilter(t.id)">{{t.name}}</button>
    </div>
    `
})

export class InventoryFilterComponent implements OnInit {

    @Input() inventoryTypesInDifferentComponent$: Observable<InventoryTypesModel[]>;

    @Output() filterEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    setTypeFilter(typeId) {
        this.filterEvent.emit(typeId);
    }
}
