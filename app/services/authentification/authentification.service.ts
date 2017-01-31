/**
 * Class Authentification
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class Authentification implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        if (tokenNotExpired()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
