import { Routes } from '@Angular/router';

import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { DiversaoComponent } from './diversao/diversao.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'diversao', component: DiversaoComponent}
]