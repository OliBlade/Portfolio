import { Tag } from "./tag";

export class Project  {
  public name: string;
  public normalisedName: string;
  public projectUrl: string;
  public displayUrl: string;
  public caption: string;
  public tags: Tag[];
  public features: string[];
}
