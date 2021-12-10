import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/classes/project';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent {
  public project: Project;

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService
  ) {
    this.route.data.subscribe(routeData => {
      this.project = routeData.project;
      this.metaService.setProjectMeta(this.project);
    });
  }

  public scrollToNextSnap(): void {
    document.getElementById("scroll").scrollBy({
      top: 40,
      behavior: 'smooth'
    });
  }
}
