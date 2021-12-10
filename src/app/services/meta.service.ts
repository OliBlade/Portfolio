import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Project } from '../classes/project';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private dom: Document
  ) { }

  public setProjectMeta(project: Project): void {
    const title = `Oli Blade - ${project.name}`
    const description = `Oli Blade's portfolio page for ${project.name}`;
    this.setMeta(title, description, `/assets/images/${project.normalisedName}/home.png`, project.name);
  }

  public setHomeMeta(): void {
    this.setMeta("Oli Blade", "Software Developer Oli Blade's portfolio of personal projects and work", "/assets/images/logo.png", "Home");
  }

  private setMeta(title: string, description: string, image: string, pageName: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'og:title', content: title });
    this.meta.updateTag({ name: 'og:description', content: description });
    this.meta.updateTag({ name: 'og:image', content: "https://oliblade.com" + image });
    this.meta.updateTag({ name: 'twitter:image', content: "https://oliblade.com" + image });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    const keywords = `Oli Blade, Portfolio, ${pageName}, Projects, Web Development, Web, Software Developer, Programming, Software, Developer`;
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}
