import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlService } from '../models/graphql.service';
import { Observable } from 'rxjs'
import { Character } from '../models/character.model';

@Component({
  selector: 'app-graphql-multi',
  templateUrl: './graphql-multi.component.html',
  styleUrls: ['./graphql-multi.component.css']
})
export class GraphqlMultiComponent implements OnInit {

  characters: Observable<{} | Character[]>

  constructor(
    private router: Router,
    private graphqlService: GraphqlService
  ) { }

  ngOnInit() {
    this.graphqlService.queryMarvel().then(characters => this.characters = characters)
  }

}
