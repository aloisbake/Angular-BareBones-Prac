import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjectName(): string {
    return 'Angular Bare Bones';
  }

  constructor() { }
}
