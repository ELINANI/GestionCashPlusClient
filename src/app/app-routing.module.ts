import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { InternationaleComponent } from './internationale/internationale.component';
import { TelecomeComponent } from './telecome/telecome.component';
import { EauElecComponent } from './eau-elec/eau-elec.component';
import { VignetteComponent } from './vignette/vignette.component';
import { AutresComponent } from './autres/autres.component';
import { AchatComponent } from './achat/achat.component';
import { VenteComponent } from './vente/vente.component';
import { SpeedboxComponent } from './speedbox/speedbox.component';
import { CtmComponent } from './ctm/ctm.component';
import { PayNeoComponent } from './pay-neo/pay-neo.component';
import { GAutresComponent } from './g-autres/g-autres.component'
import {DashboardComponent} from './dashboard/dashboard.component';
import { NavbarFawatirComponent } from './navbar-fawatir/navbar-fawatir.component';
import { NavbarDeviseComponent } from './navbar-devise/navbar-devise.component';
import { HomeComponent } from './home/home.component';
import {IndexComponent} from './index/index.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'index',component:IndexComponent},
  {path:'home',component:HomeComponent,children:[
  {path:'dashboard',component:DashboardComponent,outlet:'contentOutlet'},
  {path:'navbar',component:NavbarComponent,outlet:'contentOutlet',children:[
       {path:'in',component:InComponent,outlet:'contentNational'},
       {path:'out',component:OutComponent,outlet:'contentNational'},

  ]},
  {path:'navbarfawatir',component:NavbarFawatirComponent,outlet:'contentOutlet',children:[
      {path:'eauelec',component:EauElecComponent,outlet:'contentFawatir'},
      {path:'telecome',component:TelecomeComponent,outlet:'contentFawatir'},
      {path:'vignette',component:VignetteComponent,outlet:'contentFawatir'},
      {path:'autres',component:AutresComponent,outlet:'contentFawatir'},

  ]},
  {path:'navbardevise',component:NavbarDeviseComponent,outlet:'contentOutlet',children:[
    {path:'achat',component:AchatComponent,outlet:'contentDevise'},
    {path:'vent',component:VenteComponent,outlet:'contentDevise'},
  ]},
  {path:'ctm',component:CtmComponent,outlet:'contentOutlet'},
  {path:'internationale',component:InternationaleComponent,outlet:'contentOutlet'},
  {path:'speedbox',component:SpeedboxComponent,outlet:'contentOutlet'},
  {path:'payneo',component:PayNeoComponent,outlet:'contentOutlet'},
  {path:'gautres',component:GAutresComponent,outlet:'contentOutlet'},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
