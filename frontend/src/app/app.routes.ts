import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
    {path:'',component:HomeComponent}, 
    {path:'header',component:HeaderComponent},
    {path:'about',component:AboutComponent},
    {path:'experience', component:ExperienceComponent},
    {path:'project',component:ProjectsComponent},
    {path:'about', component:AboutComponent},
    {path:'footer',component:FooterComponent},
    {path:'skills', component:SkillsComponent},
    {path:'contact',component:ContactComponent}
];
