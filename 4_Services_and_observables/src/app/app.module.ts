import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AppRoutingModule } from './app.routing.module';
import { EmployeeService } from './services/employees/employees.service';
import { HttpModule } from '@angular/http';
import { InventoryService } from './services/inventory/inventory.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [EmployeeService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
