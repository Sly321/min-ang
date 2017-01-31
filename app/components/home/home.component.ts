/**
 * Class home
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: 'app/components/home/home.component.html',
	styleUrls: ['app/components/home/home.css']
})
export class Home {
	heyhoworld: string = "heyho";

	constructor() {
	}

	ngOnInit() {
	}
}
