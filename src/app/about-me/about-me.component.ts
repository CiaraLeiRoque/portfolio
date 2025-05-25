import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

    constructor(private renderer: Renderer2, private el: ElementRef) {}



  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 1500) {

      // Add animation class after DOM updates
      setTimeout(() => {
        const target = this.el.nativeElement.querySelector('.main');
        if (target) {
          this.renderer.addClass(target, 'animation');
        }
      }, 0);
    }
  }
}
