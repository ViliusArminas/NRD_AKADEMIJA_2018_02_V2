import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/list/employees.component';
import { InventoryComponent } from './components/inventory/list/inventory.component';
import { AppRoutingModule } from './app.routing.module';
import { EmployeeService } from './services/employees/employees.service';
import { HttpModule } from '@angular/http';
import { InventoryService } from './services/inventory/inventory.service';
import { EmployeesDetailsComponent } from './components/employees/details/employees-details.component';
import { InventoryTypeFilterPipe } from './pipes/inventory-type-filter.pipe';
import { InventoryFilterComponent } from './components/inventory/list/filter/inventory-filter.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    InventoryComponent,
    EmployeesDetailsComponent,
    InventoryTypeFilterPipe,
    InventoryFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [EmployeeService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
