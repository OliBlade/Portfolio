import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'home' } },
  { path: 'test', component: BasicPageComponent, pathMatch: 'full', data: { animation: 'page' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
