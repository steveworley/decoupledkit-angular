import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../models/graphql.service';
import { Observable } from 'rxjs'
import { User } from '../models/user.model';


@Component({
  selector: 'app-api-mock',
  templateUrl: './api-mock.component.html',
  styleUrls: ['./api-mock.component.css']
})

export class ApiMockComponent implements OnInit {

  users: Observable<{} | User>

  constructor(private graphqlService: GraphqlService) { }

  ngOnInit() {
    this.graphqlService.queryUsers().then(users => this.users = users)
  }
}
