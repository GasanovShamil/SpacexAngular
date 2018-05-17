import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './modules/app-material/app.material.module';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {LoginComponent} from './components/login/login.component';
import {SpacexApiService} from './services/spacex-api.service';
import {AuthGuard} from './components/guards/auth-guard.guard';
import {MediaMatcher} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { LaunchesComponent } from './components/launches/launches.component';
import { CardComponent } from './components/card/card.component';
import {LaunchComponent} from './components/launch/launch.component';
import { BottomsheetComponent } from './components/bottomsheet/bottomsheet.component';
import { SafeurlPipe } from './pipes/safeurl.pipe';
import {Data} from './services/Data';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavigationComponent,
    LoginComponent,
    LaunchComponent,
    LaunchesComponent,
    CardComponent,
    BottomsheetComponent,
    SafeurlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  entryComponents: [BottomsheetComponent],
  providers: [
    SpacexApiService,
    AuthGuard,
    MediaMatcher,
    Data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
