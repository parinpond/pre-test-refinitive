import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionFourComponent } from './question-four/question-four.component';
const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'one',component:QuestionOneComponent},
  {path:'two',component:QuestionTwoComponent},
  {path:'three',component:QuestionThreeComponent},
  {path:'four',component:QuestionFourComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
