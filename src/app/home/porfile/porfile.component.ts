import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../interfaces/interfaces';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-porfile',
  templateUrl: './porfile.component.html',
  styleUrls: ['./porfile.component.css']
})
export class PorfileComponent implements OnInit {

  profiles: Profile[] = [];
  cargando = true;

  constructor(private profileService: ProfileService,
              public usersService: UsersService,
              private router: Router,
              private title: Title) { }

  ngOnInit(): void {

    this.profileService.getProfiles().subscribe( res => {
      this.profiles = res.profiles;
      this.cargando = false;
      console.log(res.profiles);
    });

    // this.profileService.test_comprovate()
    // .then(res => {
    //   this.profiles = res.profiles;
    //   console.log(this.profiles);
    //   this.cargando = false;
    // });

    // this.title.setTitle('Profile');

  }

  enviarProfileEditar(id: string): void {
    this.router.navigate([`/edit-profile/${id}`]);
  }

}
