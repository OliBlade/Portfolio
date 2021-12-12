import * as contentJson from '../../content.json';
import { BasicProject } from './basicProject';
import { Project } from './project';

export class FileLoader {

  public getProjects(): Project[] {
    return contentJson.projects as Project[];
  }

  public getOtherProjects(): BasicProject[] {
    return contentJson.otherProjects as BasicProject[];
  }
}
