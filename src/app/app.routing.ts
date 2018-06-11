import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TodosComponent } from './todos/todos.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
