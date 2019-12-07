import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
    // {
    //   path: '',
    //   component: PagesComponent,
    //   children: [
    //     { path: 'home', component: HomeComponent },
    //     { path: '', redirectTo: '/home', pathMatch: 'full' }
    //   ]
    // },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
  ];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });