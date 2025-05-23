import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FirstSectionComponent } from './first-section/first-section.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FirstSectionComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
