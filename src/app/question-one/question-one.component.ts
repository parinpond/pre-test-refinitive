import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../api/question.service';
@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements OnInit {

  constructor(public questionService:QuestionService) { }
  result:any={};
  ngOnInit(): void {
    this.prePareData();
  }
  prePareData(){
    this.questionService.getDataQuestionOne().subscribe((data:{})=>{
      this.result = data;
      console.log(this.result);
    })
  }
}
