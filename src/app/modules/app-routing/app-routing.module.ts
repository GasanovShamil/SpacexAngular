import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../../components/login/login.component';
import {NavigationComponent} from '../../components/navigation/navigation.component';
import {AuthGuard} from '../../components/guards/auth-guard.guard';
import {HomeComponent} from '../../components/home/home.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {LaunchesComponent} from '../../components/launches/launches.component';
import {LaunchComponent} from '../../components/launch/launch.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [AuthGuard], component: NavigationComponent,
    children: [
      {path: '', canActivate: [AuthGuard], redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', canActivate: [AuthGuard], component: HomeComponent},
      { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
      { path: 'launches', canActivate: [AuthGuard], component: LaunchesComponent},
      { path: 'launch', canActivate: [AuthGuard], component: LaunchComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
