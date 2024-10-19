import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  public add(input:string):number{
    if(input ===''){
      return 0
    }
    const numbers = input.split(',').map((num)=> parseInt(num,10))
    const total= numbers.reduce((sum, num)=>{
      return sum +num
    })
    return total
  }
}
