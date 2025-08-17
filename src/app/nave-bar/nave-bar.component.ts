import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nave-bar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './nave-bar.component.html',
  styleUrl: './nave-bar.component.scss'
})
export class NaveBarComponent {
  showNavbar = true;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll < 50) {
      // أول الصفحة: خليه ظاهر
      this.showNavbar = true;
    } else if (currentScroll > this.lastScrollTop) {
      // نازل لتحت: خفي النافبار
      this.showNavbar = false;
    } else {
      // طالع لفوق: أظهره
      this.showNavbar = true;
    }

    this.lastScrollTop = currentScroll;
  }

    currentLang: 'en' | 'ar' = 'en';

  switchLanguage(lang: 'en' | 'ar') {
    this.currentLang = lang;
  }
}
