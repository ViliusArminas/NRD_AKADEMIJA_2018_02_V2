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
import { AuthService } from './services/auth/auth.service';
import { CallbackComponent } from './components/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    InventoryComponent,
    EmployeesDetailsComponent,
    InventoryTypeFilterPipe,
    InventoryFilterComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [EmployeeService, InventoryService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
