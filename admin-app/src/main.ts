import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


if (process.env.ENV === 'production') {
	enableProdMode();
	console.log('PROD MODE ');
} else {
	console.log('DEV MODE ');
}
platformBrowserDynamic().bootstrapModule(AppModule);