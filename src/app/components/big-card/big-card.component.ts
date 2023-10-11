import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = ''
  @Input()
  cardTitle: string =  ''
  @Input()
  cardDescription: string = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur doloremque, cumque sunt eos illum magnam corporis quis iure et officia aliquam saepe ab odit voluptatibus praesentium? Nam labore ipsam debitis
  `
  constructor() { }

  ngOnInit(): void {
  }

}
