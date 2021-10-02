import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionOneModel } from './QuesionOneModel';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http:HttpClient) { }
  httpOptions={
    headers: new HttpHeaders({
      'content-type':'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  }
  getDataQuestionOne():Observable<QuestionOneModel>{
     return this.http.get<QuestionOneModel>("https://codequiz.azurewebsites.net/data");
  }
}
