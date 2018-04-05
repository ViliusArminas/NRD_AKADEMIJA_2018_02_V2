import { Component, AfterViewInit, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { AuthService } from './services/auth/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef,
    private authService: AuthService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.authService.handleAuthentication();
  }

  routeToInventory() {
    this.router.navigate(['inventory']);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }


}
