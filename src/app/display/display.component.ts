import { Component, OnInit, Input } from '@angular/core';
import { Statement } from '../models/statement.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  constructor() { }
  
  @Input() statement: Statement = { expression:"2", answer:2 };

  ngOnInit() {
  }

}
