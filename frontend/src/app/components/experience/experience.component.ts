import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',

  animations: [
    trigger('staggerExperience', [
      transition(':enter', [
        query('.experience-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('0.6s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.8s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ExperienceComponent {
  experiences = [
    {
      position: 'Senior Backend Developer',
      company: 'Sca-Chuka.',
      period: 'Jan 2023 - Present',
      description: [
        'Lead the development of multiple Angular applications ensuring high performance and scalability.',
        'Implemented responsive design strategies that improved mobile user experience by 40%.',
        'Collaborated with UX designers to create intuitive user interfaces and improve conversion rates.',
        'Mentored junior developers and conducted code reviews to maintain code quality.'
      ]
    },
    {
      position: 'Full Stack Developer',
      company: 'Teac2Give Organization',
      period: 'May 2025 - July 2025',
      description: [
        'Developed and maintained RESTful APIs using Node.js and Express.',
        'Created interactive dashboards using Angular and Chart.js for data visualization.',
        'Implemented authentication and authorization using JWT and OAuth.',
        'Optimized database queries resulting in a 30% improvement in application performance.'
      ]
    },
    {
      position: 'Web Developer',
      company: 'Teach2Give organization',
      period: 'May 2024 - July 2024',
      description: [
        'Built responsive websites for various clients using HTML, CSS, and JavaScript.',
        'Integrated e-commerce functionality using Shopify and custom solutions.',
        'Collaborated with the design team to ensure pixel-perfect implementation.',
        'Managed website hosting, SSL certificates, and performance optimization.'
      ]
    }
  ];

  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Chuka University',
      period: '2021 - 2025',
      description: 'Will Gradute on October. Focused on Programming and Database Systems.'
    }
  ];
}