import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/list/employees.component';
import { InventoryComponent } from './components/inventory/list/inventory.component';
import { EmployeesDetailsComponent } from './components/employees/details/employees-details.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'employees/new', component: EmployeesDetailsComponent },
    { path: 'employees/edit', component: EmployeesDetailsComponent },
    { path: 'inventory', component: InventoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
