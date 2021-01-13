import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  logos = [
    {img: '../../../assets/logos/logo-0.5.png', name: 'HTML'},
    {img: '../../../assets/logos/logo-0.png', name: 'CSS'},
    {img: '../../../assets/logos/logo-1.png', name: 'JavaScript'},
    {img: '../../../assets/logos/logo-2.png', name: 'NodeJS'},
    {img: '../../../assets/logos/logo-3.png', name: 'Angular'},
    {img: '../../../assets/logos/logo-4.jpg', name: 'JQuery'},
    {img: '../../../assets/logos/logo-5.png', name: 'Java'},
    {img: '../../../assets/logos/logo-6.jpg', name: 'IONIC'},
    {img: '../../../assets/logos/logo-7.png', name: 'Firebase'},
    {img: '../../../assets/logos/logo-8.png', name: 'Redux'},
    {img: '../../../assets/logos/logo-9.png', name: 'Typescript'},
    {img: '../../../assets/logos/logo-10.png', name: 'MySQL'},
    {img: '../../../assets/logos/logo-11.png', name: 'MongoDB' },
    {img: '../../../assets/logos/logo-12.jpg', name: 'ExpressJS'},
    {img: '../../../assets/logos/logo-13.png', name: 'Bootstrap'},
    {img: '../../../assets/logos/logo-14.png', name: 'React'},
    {img: '../../../assets/logos/logo-15.png', name: 'Github'},
    {img: '../../../assets/logos/logo-16.png', name: 'npm'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
