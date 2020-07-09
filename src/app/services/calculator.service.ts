import { Injectable } from '@angular/core';
import { Statement } from '../models/statement.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private statement: Statement;
  private operands: Array<string>;
  private operators: Array<string>;
  private histories: Array<Statement>;

  constructor() {
    this.statement = new Statement();
    this.operands = new Array<string>();
    this.operators = new Array<string>();
    this.histories = new Array<Statement>();
  }

  getStatement(): Statement {
    return this.statement;
  }

  getOperands(): Array<string> {
    this.operands.push("7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", ".");
    return this.operands;
  }

  getOperators(): Array<string> {
    this.operators.push("/", "*", "+", "-");
    return this.operators;
  }

  updateExpression(value: string): void {
    if(this.isOperator(value) && this.isLastCharIsOperator()) {
      alert("Invalid Expression");
      return;
    }

    this.statement.expression += value;
    
    if(this.statement.answer !== 0)
      this.statement.answer = 0;  
  }

  calculate(): void {
    this.statement.answer = eval(this.statement.expression);
    this.histories.push({ ...this.statement });
    this.statement.expression = "";
  }

  getHistories(): Array<Statement> {
    return this.histories;
  }

  private isLastCharIsOperator() {
    return this.isOperator(this.statement.expression.charAt(this.statement.expression.length - 1));
  }

  private isOperator(value: string) {
    return this.operators.includes(value);
  }
}