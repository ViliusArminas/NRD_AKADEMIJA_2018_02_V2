import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/list/employees.component';
import { InventoryComponent } from './components/inventory/list/inventory.component';
import { EmployeesDetailsComponent } from './components/employees/details/employees-details.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard], data: { expectedScopes: ['read:employees'] } },
    { path: 'employees/new', component: EmployeesDetailsComponent, canActivate: [AuthGuard], data: { expectedScopes: ['write:employees'] } },
    { path: 'employees/:id', component: EmployeesDetailsComponent, canActivate: [AuthGuard], data: { expectedScopes: ['write:employees'] } },
    { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard], data: { expectedScopes: ['read:inventory'] } },
    { path: 'callback', component: CallbackComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
