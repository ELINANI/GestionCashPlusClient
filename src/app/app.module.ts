import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { GAutresComponent } from './g-autres/g-autres.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarFawatirComponent } from './navbar-fawatir/navbar-fawatir.component';
import { NavbarDeviseComponent } from './navbar-devise/navbar-devise.component';
import { HomeComponent } from './home/home.component';
import { ContentNationalComponent } from './content-national/content-national.component';
import { ContentFawatirComponent } from './content-fawatir/content-fawatir.component';
import { ContentDeviseComponent } from './content-devise/content-devise.component';
import {InMokeService} from './in/in.moke.service';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    InComponent,
    OutComponent,
    InternationaleComponent,
    TelecomeComponent,
    EauElecComponent,
    VignetteComponent,
    AutresComponent,
    AchatComponent,
    VenteComponent,
    SpeedboxComponent,
    CtmComponent,
    PayNeoComponent,
    GAutresComponent,
    DashboardComponent,
    NavbarFawatirComponent,
    NavbarDeviseComponent,
    HomeComponent,
    ContentNationalComponent,
    ContentFawatirComponent,
    ContentDeviseComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [InMokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
