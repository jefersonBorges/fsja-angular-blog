import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'

  @Input()
  cardTitle: string = 'Lorem Ipsum Dolor'

  @Input()
  Id: string = '0'

  constructor() { }

  ngOnInit(): void {
  }

}
