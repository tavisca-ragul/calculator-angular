import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-operator-key',
  templateUrl: './operator-key.component.html',
  styleUrls: ['./operator-key.component.css']
})
export class OperatorKeyComponent implements OnInit {
  @Input() operator: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  onKeyClick() {
    this.calculatorService.updateExpression(this.operator);
  }

}
