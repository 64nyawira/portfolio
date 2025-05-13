import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define an interface for the form structure
interface ContactForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  subject: FormControl<string | null>;
  message: FormControl<string | null>;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerItems', [
      transition(':enter', [
        query('.contact-info-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup<ContactForm>;
  submitted = false;
  submitSuccess = false;
  submitError = false;
  
  contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'charitynyawirairungu@gmail.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+254113397560',
      // link: 'tel:+11234567890'
    },
    {
      icon: 'location',
      title: 'Location',
      value: 'Chuka , Tharakanithi',
      link: null
    }
  ];
  
  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/Charity_Irungu'
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/64nyawira'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/@_nyawira_64'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      subject: this.fb.control('', [Validators.required]),
      message: this.fb.control('', [Validators.required, Validators.minLength(10)])
    }) as FormGroup<ContactForm>;
  }

  ngOnInit(): void {
    // Form is now initialized in the constructor
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    // Here you would normally send the form data to your backend
    // This is a simulation of form submission
    setTimeout(() => {
      this.submitSuccess = true;
      this.submitError = false;
      this.contactForm.reset();
      this.submitted = false;
      
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }

  resetForm(): void {
    this.contactForm.reset();
    this.submitted = false;
    this.submitSuccess = false;
    this.submitError = false;
  }
}