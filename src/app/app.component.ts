import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NaveBarComponent } from "./nave-bar/nave-bar.component";
import { ConnectionComponent } from './connection/connection.component';

declare function initFlowbite(): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NaveBarComponent,ConnectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Project25';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to top with smooth behavior
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
  ngAfterViewInit(): void {
    // كل مرة يتنقل فيها المستخدم لصفحة جديدة
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          initFlowbite(); // إعادة تهيئة Flowbite
        }, 0);
      }
    });
  }
}


