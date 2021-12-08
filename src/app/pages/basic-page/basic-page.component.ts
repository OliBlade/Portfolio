import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToNextSnap(): void {
    document.getElementById("scroll").scrollBy({
      top: 40,
      behavior: 'smooth'
    });
  }
}
