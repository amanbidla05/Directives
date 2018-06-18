import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cake: boolean = false;
  pizza: boolean = false;


  onSubmit(){
    this.cake = true;
  }
  onPizza(){
    this.pizza = true;
  }

  myFavLang = [
    {'name': 'HTML', 'type': 'frontend' },
    {'name': 'CSS', 'type': 'frontend' },
    {'name': 'JS', 'type': 'frontend' },
    {'name': 'JS', 'type': 'frontend' }
  ];


  somevalue = 2;
  somevalue1:any = "one";
}
