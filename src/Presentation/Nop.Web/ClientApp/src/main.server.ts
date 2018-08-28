import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js';
import { renderModule, renderModuleFactory } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { createServerRenderer } from 'aspnet-prerendering';
import { AppServerModule } from './app/app.server.module';
export { AppServerModule } from './app/app.server.module';
import { ngAspnetCoreEngine, IEngineOptions, createTransferScript } from '@nguniversal/aspnetcore-engine';

enableProdMode();

export default createServerRenderer(params => {
  const { LAZY_MODULE_MAP } = (module as any).exports;
      /*
      * How can we access data we passed from .NET ?
      * you'd access it directly from `params.data` under the name you passed it
      * ie: params.data.WHATEVER_YOU_PASSED
      * -------
      * We'll show in the next section WHERE you pass this Data in on the .NET side
      */

  // Platform-server provider configuration
  const setupOptions: IEngineOptions = {
    appSelector: '<app-root></app-root>',
    ngModule: AppServerModule,
    request: params,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP),
      /* Other providers you want to pass into the App would go here
      *    { provide: CookieService, useClass: ServerCookieService }

      * ie: Just an example of Dependency injecting a Class for providing Cookies (that you passed down from the server)
        (Where on the browser you'd have a different class handling cookies normally)
      */
    ]
  };

  // ***** Pass in those Providers & your Server NgModule, and that's it!
  return ngAspnetCoreEngine(setupOptions).then(response => {

    // Want to transfer data from Server -> Client?

    // Add transferData to the response.globals Object, and call createTransferScript({}) passing in the Object key/values of data
    // createTransferScript() will JSON Stringify it and return it as a <script> window.TRANSFER_CACHE={}</script>
    // That your browser can pluck and grab the data from
    response.globals.transferData = createTransferScript({
      someData: 'Transfer this to the client on the window.TRANSFER_CACHE {} object',
      fromDotnet: params.data.thisCameFromDotNET // example of data coming from dotnet, in HomeController
    });

    return ({
      html: response.html,
      globals: response.globals
    });

  });
});
