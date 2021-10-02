import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.scss']
})
export class QuestionFourComponent implements OnInit {
  answer :string="ANSWER";
  constructor() { }

  ngOnInit(): void {
    const getRandomRGB = () => {
      const r = Math.floor(Math.random() * Math.floor(255));
      const g = Math.floor(Math.random() * Math.floor(255));
      const b = Math.floor(Math.random() * Math.floor(255));
      return `rgb(${r},${g},${b})`;
    };
    
    const colorPicker :any= document.getElementById('colorPicker');
    
    for (let i=0; i<10000; ++i) {
      const btn = document.createElement('button');
      const rgb = getRandomRGB();
      btn.id = rgb;
      btn.textContent = rgb;
      btn.style.backgroundColor = rgb;
      colorPicker.appendChild(btn);
    }
    
  }
  showRGB(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = (target.attributes.id)?target.attributes.id:"";
    var value  = (idAttr.nodeValue)?idAttr.nodeValue:"";
    this.answer=value;
  }

}
