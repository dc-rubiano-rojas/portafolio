import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PorfileComponent } from './porfile/porfile.component';



@NgModule({
  declarations: [
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    HomeComponent,
    PorfileComponent
  ],
  exports: [
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    HomeComponent,
    PorfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ]
})
export class HomeModule { }
