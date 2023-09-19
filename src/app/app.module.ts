import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LinkComponent } from './components/link/link.component';
import { FeaturesComponent } from './components/features/features.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TeamdetailsService } from './services/teamdetails.service';
import { EmployeedetailsService } from './services/employeedetails.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { IfthenandelseComponent } from './components/ifthenandelse/ifthenandelse.component';
import { StandardngifComponent } from './components/standardngif/standardngif.component';
import { NgifandelseComponent } from './components/ngifandelse/ngifandelse.component';
import { NgifandngtemplateComponent } from './components/ngifandngtemplate/ngifandngtemplate.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RouteparameterComponent } from './components/routeparameter/routeparameter.component';
import { PersondetailsComponent } from './components/persondetails/persondetails.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderService } from './services/loader.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

import { ModalModule } from 'ngx-bootstrap/modal';
import { PersnalService } from './services/persnal.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LinkComponent,
    FeaturesComponent,
    PagenotfoundComponent,
    IfthenandelseComponent,
    StandardngifComponent,
    NgifandelseComponent,
    NgifandngtemplateComponent,
    PipesComponent,
    RouteparameterComponent,
    PersondetailsComponent,
    TemplateDrivenComponent,
    TemplateFormComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    SpinnerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgIdleKeepaliveModule.forRoot(),
    ModalModule.forRoot(),
    
   
  ],
  providers: [TeamdetailsService,EmployeedetailsService,LoaderService,PersnalService,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
