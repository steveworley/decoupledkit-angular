import { Deserializable } from "./deserializable.model";

export class User implements Deserializable<User> {

  name: string
  email: string
  first_name: string
  last_name: string
  country: string
  id: number

  fullName(): string {
    return `${this.first_name} ${this.last_name}`
  }

  serialize(): object {
    return {}
  }

  deserialize(input: any): User {
    Object.assign(this, input)
    return this
  }
}