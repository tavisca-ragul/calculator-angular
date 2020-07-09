import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-operand-key',
  templateUrl: './operand-key.component.html',
  styleUrls: ['./operand-key.component.css']
})
export class OperandKeyComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  @Input() operand: string;

  ngOnInit() {
  }

  onKeyClick() {
    this.calculatorService.updateExpression(this.operand);
  }
}
