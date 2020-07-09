import { Component, OnInit, Input } from '@angular/core';
import { Statement } from '../models/statement.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  @Input() history: Statement;

  ngOnInit() {
    console.log(this.history);
  }

}