import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.css']
})
export class BaselayoutComponent implements OnInit {

  sidebaropen = true; 

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sidebaropen = !this.sidebaropen;
  }

}
