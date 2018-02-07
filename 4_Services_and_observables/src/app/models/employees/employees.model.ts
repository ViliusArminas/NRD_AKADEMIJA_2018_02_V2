import { InventoryModel } from '../inventory/inventory.model';
import { InventoryViewModel } from '../inventory/inventory-view.model';

export class EmployeeModel {
    id: Number;
    firstName: String;
    // inventory: InventoryModel[];
    inventory: InventoryViewModel[];
}
