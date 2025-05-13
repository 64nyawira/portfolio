import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('staggerProjects', [
      transition(':enter', [
        query('.project-card', [
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
        animate('0.8s ease', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Restaurant Platform',
      description: 'A fully functional e-commerce platform with product listings, shopping cart, checkout process, and admin dashboard.',
      imageUrl: 'assets/dinedash-placeholder-1.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MSSQL'],
      demoUrl: '#',
      codeUrl: 'https://github.com/64nyawira/Dinedash.git'
    },
    {
      title: 'Task Management App |Plana',
      description: 'A collaborative task management application with features like task assignment, progress tracking, and deadline notifications.',
      imageUrl: 'assets/images/project-placeholder-2.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MSSQL'],
      demoUrl: '#',
      codeUrl: 'https://github.com/64nyawira/plana-application.git'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current weather conditions and forecasts for multiple locations.',
      imageUrl: 'assets/images/project-placeholder-3.jpg',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      demoUrl: '#',
      codeUrl: '#'
    },
    // {
    //   title: 'Recipe Finder',
    //   description: 'A recipe application that allows users to search for recipes by ingredients, save favorites, and create shopping lists.',
    //   imageUrl: 'assets/images/project-placeholder-4.jpg',
    //   technologies: ['Angular', 'RxJS', 'Spoonacular API'],
    //   demoUrl: '#',
    //   codeUrl: '#'
    // },
    // {
    //   title: 'Fitness Tracker',
    //   description: 'A fitness tracking application that helps users record workouts, track progress, and achieve fitness goals.',
    //   imageUrl: 'assets/images/project-placeholder-5.jpg',
    //   technologies: ['TypeScript', 'Node.js', 'MySQL'],
    //   demoUrl: '#',
    //   codeUrl: '#'
    // },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular to showcase my projects and skills.',
      imageUrl: 'assets/portfolio-placeholder-6.jpg',
      technologies: ['Angular', 'TypeScript', 'CSS Animations'],
      demoUrl: '#',
      codeUrl: 'https://github.com/64nyawira/portfolio.git'
    }
  ];
}