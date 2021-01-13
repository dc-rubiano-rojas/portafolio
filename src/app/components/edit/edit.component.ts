import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create-project/create-project.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  project = {
    title: '',
    description: '',
    img: '',
  };

  projectForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    img: ['', Validators.required]
  });

  filesToUpload: Array<File> = [];
  nameFile = '';
  file: any;
  image = '../../../assets/upload.png';

  constructor(private fb: FormBuilder,
              private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getProject(params.id);
    });
  }


  onSubmit(): void {
    this.project.title = this.projectForm.value.title;
    this.project.description = this.projectForm.value.description;

    this.projectService.updateProject(this.project).subscribe((res: any) => {
      console.log(res);

      this.projectService.postImage(this.filesToUpload[0], res.project._id, this.nameFile).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }


  fileChangeEvent(fileInput: any): void{
    this.filesToUpload = fileInput.target.files as Array<File>;
    this.nameFile = this.filesToUpload[0].name;
    const file = this.filesToUpload[0];
  }

  getProject(id: string): void{
    this.projectService.getProject(id).subscribe(res => {
      this.project = res.project;
      console.log(this.project);
    });
  }

}
