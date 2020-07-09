import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Input() operands: Array<string>;
  @Input() operators: Array<string>;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  evaluate() {
    this.calculatorService.calculate();
  }
}
