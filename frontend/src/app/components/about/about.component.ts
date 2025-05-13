import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
 
  downloadCV(): void {
   
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/documents/Charity_Nyawira_CV.pdf');
    link.setAttribute('download', 'Charity_Nyawira_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
  }
}