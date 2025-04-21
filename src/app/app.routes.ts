import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SaberComponent } from './class/saber/saber.component';
import { ArcherComponent } from './class/archer/archer.component';
import { LancerComponent } from './class/lancer/lancer.component';
import { RiderComponent } from './class/rider/rider.component';
import { CasterComponent } from './class/caster/caster.component';
import { AssassinComponent } from './class/assassin/assassin.component';
import { BerserkerComponent } from './class/berserker/berserker.component';
import { RulerComponent } from './class/ruler/ruler.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServantListComponent } from './pages/servant-list/servant-list.component';
import { ServantDetailComponent } from './pages/servant-detail/servant-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'class/saber', component: SaberComponent },
  { path: 'class/archer', component: ArcherComponent },
  { path: 'class/lancer', component: LancerComponent },
  { path: 'class/rider', component: RiderComponent },
  { path: 'class/caster', component: CasterComponent },
  { path: 'class/assassin', component: AssassinComponent },
  { path: 'class/berserker', component: BerserkerComponent },
  { path: 'class/ruler', component: RulerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'servants', component: ServantListComponent },
  { path: 'servants/:servantId', component: ServantDetailComponent },
  { path: '**', redirectTo: '/home' },
];
