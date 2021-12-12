import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicProject } from 'src/app/classes/basicProject';
import { Project } from 'src/app/classes/project';
import { MetaService } from 'src/app/services/meta.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('projectAnimation',
      [
        transition(':enter',
          [
            style({ transform: 'translateX(100%)' }),
            animate('0.4s ease-in-out', style({ transform: 'translateX(0%)' }))
          ]
        ),
        transition(':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate('0.4s ease-in-out', style({ transform: 'translateX(100%)' }))
          ]
        )
      ]
    )
  ]
})
export class HomeComponent implements AfterViewInit {

  public projects: Project[];
  public otherProjects: BasicProject[];
  public isScrollUpEnabled = false;
  public isScrollDownEnabled = true;
  public selectedMenuItem: string = 'projects';

  public loaded = false;

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService,
    private stateService: StateService
  ) {
    this.route.data.subscribe(routeData => {
      this.projects = routeData.projects;
      this.otherProjects = routeData.otherProjects;
    });
    this.metaService.setHomeMeta();
  }

  ngAfterViewInit(): void {
    const projectIndex = this.stateService.getSelectedProjectIndex();

    setTimeout(() => {
      if (projectIndex != null) {
        const projectElement = document.getElementById('snap-' + (projectIndex + 1));
        projectElement.scrollIntoView();
        this.loaded = true;
      }
      this.loaded = true;
    }, 0);
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
    const lastElement = document.getElementById('snap-' + this.projects.length);
    const currentScroll = this.getCurrentScrollElement();

    return lastElement && currentScroll.scrollTop < lastElement.offsetTop - 40;
  }

  public projectSelected(index: number): void {
    this.stateService.setSelectedProjectIndex(index);
  }

  // Menu
  public menuSelect(item: string): void {
    this.selectedMenuItem = item;

    setTimeout(() => {
      if (!this.isScreenMd()) {
        this.scrollToNextSnap();
      }
    }, 500);
  }
}
