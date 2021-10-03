import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../api/question.service';
import { QuestionOneModel } from '../api/QuesionOneModel';
@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements OnInit {
  constructor(public questionService:QuestionService) { }
  result:number=0;
  number1:number=10;
  ngOnInit() {
    this.thisIsSyncFunction();
  }
  thisIsSyncFunction(){
     this.questionService.getDataQuestionOne()
    .subscribe(
      (response) => {                 
        this.result = response.data; 
      },
      (error) => {          
        console.error('Request failed with error')
      })
  }
}
