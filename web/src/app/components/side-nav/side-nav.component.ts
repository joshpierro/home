import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'josh-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  sections: {key:string,value:string}[]  = [
    {key:'', value:'About'},
    {key:'contact', value:'Contact'},
    {key:'projects', value: 'Projects'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
