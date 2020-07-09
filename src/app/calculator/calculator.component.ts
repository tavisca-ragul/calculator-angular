import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { Statement } from '../models/statement.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operands: Array<string>;
  operators: Array<string>;
  statement: Statement;
  histories: Array<Statement>;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.operands = this.calculatorService.getOperands();
    this.operators = this.calculatorService.getOperators();
    this.statement = this.calculatorService.getStatement();
    this.histories = this.calculatorService.getHistories();
    console.log(this.histories);
  }

}