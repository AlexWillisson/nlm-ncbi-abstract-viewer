import { Component, OnInit, Input } from '@angular/core';
import { AbstractSection } from 'src/app/article';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
  @Input() sections: AbstractSection[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.sections);
  }

}
