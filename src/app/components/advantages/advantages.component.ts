import {Component, Input, OnInit} from '@angular/core';
import {AdvantagesType} from "../../types/advantages.type";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  @Input() public advantage: AdvantagesType;
  @Input() public i: number = 0;

  constructor() {
    this.advantage = {
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
