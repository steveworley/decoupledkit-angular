import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlService } from '../models/graphql.service';
import { Observable } from 'rxjs'
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-graphql-single',
  templateUrl: './graphql-single.component.html',
  styleUrls: ['./graphql-single.component.css']
})
export class GraphqlSingleComponent implements OnInit {

  pokemons: Observable<{} | Pokemon[]>

  constructor(
    private router: Router,
    private graphqlService: GraphqlService
  ) {}

  ngOnInit() {
    this.graphqlService.queryPokemon().then(pokemons => this.pokemons = pokemons)
  }
}
