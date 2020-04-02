import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent  implements OnInit{
  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14),0,0),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9),0,0),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12),0,0),
  ];
  quote: any;

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = true

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;

    let quoteObj=new Quote(quote.id = quoteLength+1,quote.name,quote.description,quote.completeDate = new Date(quote.completeDate),quote.upVote,quote.downVote)

    this.quotes.push(quoteObj)
  }

 

  constructor() { }

  ngOnInit(): void {
  }
}
