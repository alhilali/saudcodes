import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.page.html',
  styleUrls: ['./my-work.page.scss'],
})
export class MyWorkPage implements OnInit {
  projects: Project[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProjects();
  }

  async loadProjects() {
    const porjects = await this.http
      .get<Project[]>('/assets/data/projects.json')
      .toPromise();

    this.projects = porjects;
  }
}
