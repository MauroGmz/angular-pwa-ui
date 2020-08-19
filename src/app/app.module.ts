import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CameraComponentComponent } from './camera-component/camera-component.component';
import { PhotoComponent } from './photo/photo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponentComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
