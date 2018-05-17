import {Component, Input, OnInit} from '@angular/core';
import {Launch} from '../../models/Launch';
import {NavigationExtras, Router, RouterModule} from '@angular/router';
import {Data} from '../../services/Data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() launch: Launch;
  constructor(private router: Router, private data: Data) { }

  moreButton() {
    this.data.storage = this.launch;
    this.router.navigate(['/launch']);
  }
  ngOnInit() {
  }

}
