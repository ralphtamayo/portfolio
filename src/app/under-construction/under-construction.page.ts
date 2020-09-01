import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'under-construction-page',
  templateUrl: './under-construction.page.html'
})
export class UnderConstructionPage implements OnInit {
  public constructor(private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle('RT | Under Construction')
  }
}
