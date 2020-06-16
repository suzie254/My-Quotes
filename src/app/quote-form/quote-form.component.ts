import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
import { from } from 'rxjs';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
newQuote = new Quote(0,'','','',new Date,0,0)

@Output() addQuote = new EventEmitter<any>();

submitQuote(){
  this.addQuote.emit(this.newQuote)
}

  constructor() { }

  ngOnInit(): void {
  }

}
