/**
 * Routes
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { Home } from './components/home/home.component';
import { Login } from './components/login/login.component';
import { Authentification } from './services/authentification/authentification.service';

export const routes = [
  { path: '',           component: Login },
  { path: 'login',      component: Login },
  { path: 'home',       component: Home, canActivate: [Authentification] },
  { path: '**',         component: Login },
];
