import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes: Quote[]=[
  new Quote(1,'Friendship','The only way to have a friend is to be one.','Handy Lock',new Date,0,0),
  new Quote(1,'Motivation','sometimes we are tested not to show our weekness but to discover our strength.','Walt Disney',new Date,0,0),
  new Quote(1,'Inspiration','It does not matter how slow you go as long as you do not stop.','Rummy',new Date,0,0)
]
 

toggleDetails(index){
  this.quotes[index].showDescription =! this.quotes[index].showDescription
}

upvotes: number = 0;
downvotes: number = 0;


upvoteButton(i){
  this.quotes[i].upvote++;
}

downvoteButton(i){
  this.quotes[i].downvote++;
}

deleteQuote(isComplete, index){
  if(isComplete){
    let toDelete = confirm(`Are you sure you sure you want to delete ${this.quotes[index].name} ?`)

    if(toDelete){
      this.quotes.splice(index, 1);
    }
  }
}


  constructor() { }

  ngOnInit(): void {
  }

}
