import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
