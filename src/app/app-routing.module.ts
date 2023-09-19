import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinkComponent } from './components/link/link.component';
import { FeaturesComponent } from './components/features/features.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { IfthenandelseComponent } from './components/ifthenandelse/ifthenandelse.component';
import { StandardngifComponent } from './components/standardngif/standardngif.component';
import { NgifandelseComponent } from './components/ngifandelse/ngifandelse.component';
import { NgifandngtemplateComponent } from './components/ngifandngtemplate/ngifandngtemplate.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RouteparameterComponent } from './components/routeparameter/routeparameter.component';
import { PersondetailsComponent } from './components/persondetails/persondetails.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'}, //Home page
  {path:'features',component:FeaturesComponent},
  {path:'link',component:LinkComponent},
  {path:'IfthenandelseComponent',component:IfthenandelseComponent},
  {path:'StandardngifComponent',component:StandardngifComponent},
  {path:'NgifandelseComponent',component:NgifandelseComponent},
  {path:'NgifandngtemplateComponent',component:NgifandngtemplateComponent},
  {path:'PipesComponent',component:PipesComponent},
  {path:'persons',component:RouteparameterComponent},
  {path:'persondetails:/id',component:PersondetailsComponent},
  {path:'tempalte-driven',component:TemplateDrivenComponent},
  {path:'templateform',component:TemplateFormComponent},

  {path:'ReactiveForms',component:ReactiveFormComponent},
  {path:'ApiCallNextMethod',component:PersondetailsComponent},
  
  {path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

