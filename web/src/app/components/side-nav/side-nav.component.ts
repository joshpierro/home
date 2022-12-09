import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'josh-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  sections: {key:string,value:string}[]  = [
    {key:'home', value:'About'},
    {key:'projects', value: 'Projects'},
    // {key: 'education', value:'Education'},
    {key:'contact', value:'Contact'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
