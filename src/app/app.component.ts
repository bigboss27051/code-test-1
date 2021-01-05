import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'code-test1';
  inputNumber = 0;
  isPrimeValue = false;
  selected = 'isPrime';
  fibonacciNumber = 0;

  onNumberChange(input: number) {
    if (Math.sign(input) < 0) {
      console.log('if');
      this.inputNumber = 1;
    } else {
      console.log('else');
      this.inputNumber = Math.ceil(input);
    }
    this.onChange(this.selected)
  }

  onChange(selected: string) {
    if (selected === 'isPrime') {
      this.selected = selected;
      const num = this.inputNumber;
      const result = this.isPrime(num);
      this.isPrimeValue = result;
    } else {
      this.selected = selected;
      const num = this.inputNumber;
      
      this.fibonacciNumber = this.fibonacci(num);
    }
  }

  isPrime(num: number) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }

  fibonacci(n: number): number {
    return n < 1
      ? 0
      : n <= 2
      ? 1
      : this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}
