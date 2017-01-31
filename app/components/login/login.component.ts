/**
 * Class login
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				31.1.2017				Created
 */

import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

import { Authentification } from '../../services/authentification/authentification.service';

@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.css']
})
export class Login {

    constructor(private router: Router, private http: Http) {
    }

    ngOnInit() {
    }

    login(event: any, username: string, password: string) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
            .subscribe(
            response => {
                localStorage.setItem('id_token', response.json().id_token);
                this.router.navigate(['home']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }

    signup(event: any) {
        event.preventDefault();
        this.router.navigate(['signup']);
    }
}
