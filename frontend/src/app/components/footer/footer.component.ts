// src/app/components/footer/footer.component.ts
import { CommonModule } from '@angular/common';
import { computeMsgId } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink ,CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  navigationLinks = [
    { name: 'Home', route: 'home' },
    { name: 'About', route: 'about' },
    { name: 'Skills', route: 'skills' },
    { name: 'Projects', route: 'projects' },
    { name: 'Experience', route: 'experience' },
    { name: 'Contact', route: 'contact' }
  ];
  
  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/yourusername'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/yourusername'
    }
  ];
  
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}