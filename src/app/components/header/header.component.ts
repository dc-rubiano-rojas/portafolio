import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerVariable = false;

  constructor(public userService: UsersService,
              private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
  }

  @HostListener('document:scroll')
  scrollFunction(): void{
    console.log('scrlling...');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
    } else {
      this.headerVariable = false;
    }
  }

  logout(): void{
    this.userService.logout();
  }

  toProfile(): void {
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



}
