import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',

  animations: [
    trigger('staggerFadeIn', [
      transition(':enter', [
        query('.skills-category', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        query('.skill-item', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger(100, [
            animate('0.5s ease', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('progressAnimation', [
      transition(':enter', [
        style({ width: 0 }),
        animate('1s ease-out')
      ])
    ])
  ]
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'HTML/CSS', proficiency: 90 },
    { name: 'JavaScript', proficiency: 85 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'Angular', proficiency: 85 },
    { name: 'React', proficiency: 75 },
    { name: 'Responsive Design', proficiency: 90 }
  ];
  
  backendSkills = [
    { name: 'Node.js', proficiency: 80 },
    { name: 'Express.js', proficiency: 75 },
    { name: 'Python', proficiency: 70 },
    { name: 'SQL', proficiency: 75 },
    { name: 'MongoDB', proficiency: 70 },
    { name: 'RESTful APIs', proficiency: 85 }
  ];
  
  otherSkills = [
    { name: 'Git', proficiency: 85 },
    { name: 'Agile/Scrum', proficiency: 80 },
    { name: 'Docker', proficiency: 65 },
    { name: 'AWS', proficiency: 60 },
    { name: 'UI/UX Design', proficiency: 70 },
    { name: 'Testing', proficiency: 75 }
  ];
}