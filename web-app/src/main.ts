import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


if (process.env.ENV === 'production') {
	console.log('PROD MODE ');
	enableProdMode();
} else {
	console.log('DEV MODE ');
}
platformBrowserDynamic().bootstrapModule(AppModule);
