import { importProvidersFrom, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ApiModule, Configuration } from './api';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CarOutline, SearchOutline } from '@ant-design/icons-angular/icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const icons = [ CarOutline, SearchOutline ];

export function apiConfig() {
  return new Configuration({
    basePath: environment.apiUrl
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ApiModule.forRoot(apiConfig)
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(NzIconModule.forRoot(icons)),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
