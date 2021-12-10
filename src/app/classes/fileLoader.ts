import * as contentJson from '../../content.json';
import { Project } from './project';

export class FileLoader {

  public getProjects(): Project[] {
    return contentJson.projects as Project[];
  }
}
