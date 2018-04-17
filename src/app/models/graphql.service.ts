import { Injectable } from '@angular/core';
import ApolloClient from 'apollo-client'
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Available GraphQL models.
import { Pokemon } from './pokemon.model'
import { Character } from './character.model'
import { User } from './user.model';

import gql from 'graphql-tag'

@Injectable()
export class GraphqlService {

  readonly apiUrl = 'http://localhost:8082/graphql' // Move to config.

  private apollo;

  private models = {
    pokemons: Pokemon,
    characters: Character,
    users: User
  }

  constructor(apollo: Apollo, httpLink: HttpLink) { 
    this.apollo = apollo
    this.apollo.create({
      link: httpLink.create({ uri: this.apiUrl }),
      cache: new InMemoryCache
    })
  }

  queryPokemon() {
    const query = gql`
      query {
        pokemons {
          id
          nid
          pokemon_id
          title
          back_shiny_sprite
          front_shiny_sprite
          height_pokemon
          weight_pokemon
          hp
          attack
          defense
          special_attack
          special_defense
          speed
          abilities {
            id
            type
            name
            description
          }
          ref_types {
            id
            type
            name
            description
          }
        }
      }
    `

    
    return this.apollo.client.query({ query })
      .then(data => this.reduce(data, 'pokemons'))
      .catch(this.handleErrors(`queryPokemon`))
  }

  queryMarvel() {
    const query = gql`
      query {
        characters {
          id
          name
          description
          image
          comics {
            id
            title
            image
            description
            sales {
              issue
              count
            }
          }
        }
      }
    `
    return this.apollo.client.query({ query })
      .then(data => this.reduce(data, 'characters'))
      .catch(this.handleErrors(`queryMarvel`))
  }

  queryUsers() {
    const query = gql`
      query {
        users {
          name
          email
          first_name
          last_name
          country
          id
        }
      }
    `
    return this.apollo.client.query({ query })
      .then(data => this.reduce(data, 'users'))
      .catch(this.handleErrors(`queryUseres`))
  }

  mutateMarvel() {}

  private reduce(data: { data }, type: string): Promise<any> {
    let objects

    if (!this.models[type] || !data.data[type]) {
      throw new Error(`Cannot reduce invalid response.`)
    }

    objects = data.data[type].map(obj => {
      return new this.models[type]().deserialize(obj)
    })

    return Promise.resolve(objects)
  }

  private handleErrors<T> (operation = 'operation') {
    return (error: Error): Promise<any> => {
      console.error(error)
      const message = (error instanceof Error) ? error.message : error;
      return Promise.reject(`${operation} failed: ${message}`)
    }
  }

}
