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
    let splitter = /,|\n/;
    if(input.startsWith('//')){
      const newDelimiter =  input.split("\n")[0]
      splitter = new RegExp(newDelimiter[2])
    input = input.split("\n")[1]
    }
    const numbers = input.split(splitter).map((num)=> parseInt(num,10))
    const negativeNumbers = numbers.filter((num)=> num < 0 );
    if(negativeNumbers.length>0){
      throw new Error(`Negative numbers not allowed : ${negativeNumbers.join(',')}`)
    }
    const total= numbers.reduce((sum, num)=>{
      return sum +num
    })
    return total
  }
}
