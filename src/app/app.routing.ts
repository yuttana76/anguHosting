import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);