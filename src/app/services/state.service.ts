import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Project } from '../classes/project';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  selectedProjectIndex: number;

  constructor() { }

  public setSelectedProjectIndex(index: number): void {
    this.selectedProjectIndex = index;
  }

  public getSelectedProjectIndex(): number {
    return this.selectedProjectIndex;
  }
}
