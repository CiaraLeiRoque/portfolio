import { Component, HostListener, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}



  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 50) {

      // Add animation class after DOM updates
      setTimeout(() => {
        const target = this.el.nativeElement.querySelector('.main');
        const target1 = this.el.nativeElement.querySelector('.main-content');
        if (target) {
          this.renderer.addClass(target, 'animation');
          this.renderer.addClass(target1, 'animation');
        }
      }, 0);
    }
  }
}
