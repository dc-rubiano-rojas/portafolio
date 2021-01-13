import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ContactComponent } from './home/contact/contact.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { PorfileComponent } from './home/porfile/porfile.component';
import { EditComponent } from './components/edit/edit.component';
import { AutenticadoGuard } from './guards/autenticado.guard';
import { EditSummaryComponent } from './components/edit-summary/edit-summary.component';

const routes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'create-project', canActivate: [AutenticadoGuard], component: CreateProjectComponent},
  {path: 'edit-project/:id', canActivate: [AutenticadoGuard], component: EditComponent},
  {path: 'edit-profile/:id', canActivate: [AutenticadoGuard], component: EditSummaryComponent},
  {path: '', component: HomeComponent,
              children: [
                {path: 'profile', component: PorfileComponent},
                {path: 'projects', component: ProjectsComponent},
                {path: 'skills', component: SkillsComponent},
                {path: 'contact', component: ContactComponent},
              ]
  },

];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
