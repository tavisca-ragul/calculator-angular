import { Component, OnInit, Input } from '@angular/core';
import { Statement } from '../models/statement.model';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {

  constructor() { }

  @Input() histories: Array<Statement>;

  ngOnInit() {
    console.log(this.histories)
  }

}
