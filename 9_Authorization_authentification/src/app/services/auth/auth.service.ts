import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: 'HsxgxkInvvh3ZEWJ3HdRx03WrQ_akkjv',
        domain: 'var.eu.auth0.com',
        responseType: 'token id_token',
        audience: 'http://localhost:3000/',
        redirectUri: 'http://localhost:4200/callback',
        scope: 'openid read:employees'
    });

    constructor(public router: Router, public toastr: ToastsManager) { }

    public login(): void {
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.toastr.success('Logged in!');
                this.router.navigate(['/']);
            } else if (err) {
                console.log(err);
                this.toastr.error('Error while loging in');
                this.router.navigate(['/']);

            }
        });
    }

    private setSession(authResult): void {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.toastr.info('Logged out!');
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}
