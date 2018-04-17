import { Deserializable } from "./deserializable.model";

export class Character implements Deserializable<Character> {
  id: string
  name: string
  description ?: string
  image ?: string
  comics ?: {
    id: string
    title: string
    image: string
    description: string
    sales ?: {
      issue: number
      count: number
    }
  }

  serialize(): object {
    return {}
  }

  deserialize(input: any): Character {
    Object.assign(this, input)
    console.log(this.comics)
    return this
  }
}