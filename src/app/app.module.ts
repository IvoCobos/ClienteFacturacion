import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { GenerateSaleComponent } from './generate-sale/generate-sale.component';
import { ClientsComponent } from './clients/clients.component';
import { ProvidersComponent } from './providers/providers.component';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { WineryComponent } from './winery/winery.component';
import { SalesNoteComponent } from './sales-note/sales-note.component';
import { RegisterProviderComponent } from './register-provider/register-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivateComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterComponent,
    GenerateSaleComponent,
    ClientsComponent,
    ProvidersComponent,
    ReclamosComponent,
    WineryComponent,
    SalesNoteComponent,
    RegisterProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
