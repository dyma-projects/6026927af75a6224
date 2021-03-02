import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() increment: EventEmitter<number> = new EventEmitter();
  @Output() decrement: EventEmitter<number> = new EventEmitter();

  @Input() result: number;


  constructor() { }

  ngOnInit() {
  }

  incrementNumber() {
    this.increment.emit();
  }

  decrementNumber() {
    this.decrement.emit();
  }

}
