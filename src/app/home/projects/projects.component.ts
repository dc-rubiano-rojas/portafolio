import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  img = '';
  URL = environment.url;
  cargando = true;


  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              public projectService: ProjectService,
              private router: Router,
              private title: Title) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res.projects;
      this.cargando = false;
      console.log(this.projects);
    });
    // this.title.setTitle('Projects');

  }

  open(content: any): void {
    this.modalService.open(content);
  }

  borrarProject(project: Project): void {
    this.projectService.deleteProject(project._id).subscribe(res => {
      console.log(res);
      window.location.reload();
    });
  }

  editarProject(project: Project): void {
    this.router.navigate(['/edit-project', project._id]);
  }

}
