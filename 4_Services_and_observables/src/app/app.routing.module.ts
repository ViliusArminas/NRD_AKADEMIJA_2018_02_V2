import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { InventoryComponent } from './components/inventory/inventory.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'inventory', component: InventoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
