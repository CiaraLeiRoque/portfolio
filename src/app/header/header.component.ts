import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  scrollToProjects(): void{
    const el = document.getElementById("my-projects");
    if(el){
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

    scrollToProjects1(): void{
    const el = document.getElementById("about-me");
    if(el){
      el.scrollIntoView({behavior: 'smooth'});
    }
  }
}
