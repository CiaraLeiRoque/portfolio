import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section',
  imports: [],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css'
})
export class FirstSectionComponent {

      scrollToProjects1(): void{
    const el = document.getElementById("about-me");
    if(el){
      el.scrollIntoView({behavior: 'smooth'});
    }
  }
}
