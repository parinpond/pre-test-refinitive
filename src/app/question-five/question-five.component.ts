import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-five',
  templateUrl: './question-five.component.html',
  styleUrls: ['./question-five.component.scss']
})
export class QuestionFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   showDialog() {
    const newDialog :any= document.createElement('div');
    newDialog.style.border = 'solid 1px black';
    newDialog.style.position = 'absolute';
    newDialog.style.width = '100%';
    newDialog.style.height = '100%';
    newDialog.style.top = '0px';
    newDialog.style.background = 'white';

    const closeBtn = document.createElement('button');
    const dialogText = document.createElement('div');
    newDialog.appendChild(closeBtn);
    newDialog.appendChild(dialogText);
    dialogText.innerText = 'This is a dialog';
    closeBtn.innerText = 'Close';
    document.addEventListener('click', function (e) {
        if (e.target === closeBtn) {
            newDialog.parentElement.removeChild(newDialog);
            console.log("newDialog",newDialog.parentElement);
        }
    });

    //do not remove this part, it is for the ease of leak identification
    const tmp:any= []; 
    for(let i = 1; i < 5000000; i++) {
        tmp.push(i);
    }
    closeBtn.value = tmp;
    console.log("value",closeBtn.value)
    //end
    document.body.appendChild(newDialog);
  }
  ngOnDestroy() {
    const closeBtn = document.createElement('button');
  }
}
