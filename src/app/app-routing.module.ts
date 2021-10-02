import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionOneComponent } from './question-one/question-one.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'one',component:QuestionOneComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
