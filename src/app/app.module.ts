import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoMaterialModule} from './material-module';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionFourComponent } from './question-four/question-four.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
