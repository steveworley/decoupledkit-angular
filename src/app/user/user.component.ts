import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from '../models/user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: Observable<User>

  constructor() { }

  ngOnInit() {
  }

}
