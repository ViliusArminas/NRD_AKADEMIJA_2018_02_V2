// src/app/auth/auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router, public toastr: ToastsManager) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        const scopes = (route.data as any).expectedScopes;

        if (!this.auth.isAuthenticated() || !this.auth.userHasScopes(scopes)) {
            this.toastr.warning('You are not authorized to access this route!');
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

}