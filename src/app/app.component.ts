import { Component, HostListener, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  headerconstiable = false;
  title = 'Frontend';
  opened = false;



  constructor(public userService: UsersService,
              // @Inject(PLATFORM_ID) private platformId: string
              ) {}

  ngOnInit(): void{
  }


  toggleSidebar(): void {
    this.opened = !this.opened;
  }

  toProfile(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   // Client only code.
    //   // ...
    // }
    document.getElementById('profile')?.scrollIntoView({behavior: 'smooth'});
  }

  toPortfolio(): void{
    document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'});
  }

  toSkills(): void{
    document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'});
  }

  toContact(): void{
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  }

  logout(): void{
    this.userService.logout();
  }
}
