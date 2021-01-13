import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-summary',
  templateUrl: './edit-summary.component.html',
  styleUrls: ['./edit-summary.component.css']
})
export class EditSummaryComponent implements OnInit {

  summary = {
    profile: '',
    _id: ''
  };

  profileForm = this.fb.group({
    profile: ['', Validators.required],
    _id: [''],
  });


  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.summary._id = params.id;
    });
    this.profileService.getProfile(this.summary._id).subscribe(res => {
      this.summary.profile = res.profile.profile;
    });
  }

  editProfile(form: Form): void {
    this.profileService.updateProfile(this.summary).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/');
    });
  }

}
