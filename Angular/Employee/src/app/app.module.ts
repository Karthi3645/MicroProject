import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpoyeeService } from './empoyee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    EmpoyeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
