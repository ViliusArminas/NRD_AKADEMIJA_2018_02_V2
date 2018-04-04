import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { InventoryModel } from '../../models/inventory/inventory.model';
import { InventoryTypesModel } from '../../models/inventory/inventory-types.model';

@Injectable()
export class InventoryService {

    inventoryUrl = 'http://localhost:3000/inventory';
    inventoryTypesUrl = 'http://localhost:3000/inventory-types';

    constructor(private http: Http) { }

    getInventoryList(): Observable<InventoryModel[]> {
        return this.http.get(this.inventoryUrl)
            .map((res: Response) => res.json() as Observable<InventoryModel[]>)
            .catch((error: any) => Observable.throw(error));
    }

    getInventoryTypesList(): Observable<InventoryTypesModel[]> {
        return this.http.get(this.inventoryTypesUrl)
            .map((res: Response) => res.json() as InventoryTypesModel[])
            .catch((error: any) => Observable.throw(error));
    }
}
