import { Component, HostListener, Renderer2, ElementRef, } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 
    videoUrl: string = 'https://drive.google.com/file/d/1e6_UUF_Hv3HNZrbcWxqVraqitoh3xdZj/preview';
  sanitizedVideoUrl: SafeResourceUrl;
    constructor(    private renderer: Renderer2,
    private el: ElementRef, private sanitizer: DomSanitizer) {
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }


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
