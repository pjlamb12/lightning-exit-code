import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'lightning-exit-code';

	@HostListener('window:unload', ['$event'])
	unloadHandler(event: Event) {
		console.log('Hello from unloadHandler, ', event);
	}

	@HostListener('window:beforeunload', ['$event'])
	beforeUnloadHandler(event: Event) {
		console.log('Hello from beforeUnloadHandler, ', event);
	}

	ngOnInit() {
		console.log('Hello from ngOnInit');
	}

	ngOnDestroy() {
		console.log('Hello from ngOnDestroy');
	}
}
