import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public images = [
    "/assets/images/blockscript/function.png",
    "https://wallpapercave.com/wp/qr0bJYf.jpg",
  ]

  public isScrollUpEnabled = false;
  public isScrollDownEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  //Snapping buttons
  public scrollToPreviousSnap(): void {
    this.getCurrentScrollElement().scrollBy({
      top: -40,
      behavior: 'smooth'
    });
  }

  public scrollToNextSnap(): void {
    this.getCurrentScrollElement().scrollBy({
      top: 40,
      behavior: 'smooth'
    });
  }

  private getCurrentScrollElement(): HTMLElement {
    if (this.isScreenMd()) {
      return document.getElementById('right-scroll');
    }
    return document.getElementById('top-scroll');
  }

  private isScreenMd(): boolean {
    return window.innerWidth > 768;
  }

  // Scroll buttons enabling
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateButtons(event);
  }

  public updateButtons(event: Event): void {
    this.isScrollUpEnabled = this.scrollUpEnabled();
    this.isScrollDownEnabled = this.scrollDownEnabled();
  }

  public scrollUpEnabled(): boolean {
    const topElement = this.isScreenMd() ? document.getElementById('snap-1') : document.getElementById('snap-0');
    const currentScroll = this.getCurrentScrollElement();

    return topElement && currentScroll.scrollTop > topElement.offsetTop;
  }

  public scrollDownEnabled(): boolean {
    const lastElement = document.getElementById('snap-' + this.images.length);
    const currentScroll = this.getCurrentScrollElement();

    return lastElement && currentScroll.scrollTop < lastElement.offsetTop - 40;
  }
}
