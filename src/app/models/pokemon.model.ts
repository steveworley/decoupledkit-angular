import { Deserializable } from "./deserializable.model";

export class Pokemon implements Deserializable<Pokemon> {
  
  id: string
  nid: number
  pokemon_id: number
  title: string
  back_shiny_sprite: string
  frotn_shiny_sprite: string
  height_pokemon: number
  weight_pokemon: number
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
  abilities: {
    id: string
    type: string
    name: string
    description: string
  }
  ref_types: {
    id: string
    type: string
    name: string
    description: string
  }

  serialize(): object {
    return {}
  }

  deserialize(input: any): Pokemon {
    Object.assign(this, input)
    return this
  }
}