import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project = {
    title: '',
    description: '',
    img: ''
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
              private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.project.title = this.projectForm.value.title;
    this.project.description = this.projectForm.value.description;
    console.log(this.projectForm);

    this.projectService.createProject(this.project).subscribe((res: any) => {
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

    // if (file.type.includes('image')) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);

    //   reader.onload = function load(){
    //     this.image = reader.result;
    //   }.bind(this);

    //   this.file = file;
    // }
  }

}
