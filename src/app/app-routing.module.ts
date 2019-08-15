import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from '../app/clients/clients.component';
import { GenerateSaleComponent } from '../app/generate-sale/generate-sale.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { LoginComponent } from '../app/login/login.component';
import { PrivateComponent } from '../app/private/private.component';
import { ProvidersComponent } from '../app/providers/providers.component';
import { ReclamosComponent } from '../app/reclamos/reclamos.component';
import { RegisterComponent } from '../app/register/register.component';
import { SalesNoteComponent } from '../app/sales-note/sales-note.component';
import { WineryComponent } from '../app/winery/winery.component';
import { RegisterProviderComponent } from '../app/register-provider/register-provider.component';

const routes: Routes = [
  {path: 'clients', component: ClientsComponent},
  {path: 'generate', component: GenerateSaleComponent},
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'private', component: PrivateComponent},
  {path: 'providers', component: ProvidersComponent},
  {path: 'reclamos', component: ReclamosComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sales', component: SalesNoteComponent},
  {path: 'winery', component: WineryComponent},
  {path: 'regiterProvider', component:RegisterProviderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
