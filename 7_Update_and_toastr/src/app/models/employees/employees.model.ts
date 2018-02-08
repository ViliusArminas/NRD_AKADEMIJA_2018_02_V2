import { InventoryModel } from '../inventory/inventory.model';
import { InventoryViewModel } from '../inventory/inventory-view.model';

export class EmployeeModel {
    id: number;
    firstName: string;
    // inventory: InventoryModel[];
    inventory: InventoryViewModel[];
}
