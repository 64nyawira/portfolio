import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { SkillsComponent } from "../skills/skills.component";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent,
     ExperienceComponent, ContactComponent, FooterComponent,
      SkillsComponent, HeaderComponent, AboutComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('staggerText', [
      transition(':enter', [
        query('.animate-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('0.8s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('profilePic', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('1s cubic-bezier(0.17, 0.67, 0.83, 0.67)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
}