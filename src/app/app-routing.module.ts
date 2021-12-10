import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileLoader } from './classes/fileLoader';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { HomeComponent } from './pages/home/home.component';

const projects = new FileLoader().getProjects();

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'home', projects: projects } }
];

projects.forEach(p => {
  routes.push({ path: p.normalisedName, component: BasicPageComponent, pathMatch: 'full', data: { animation: 'page', project: p } })
});

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
