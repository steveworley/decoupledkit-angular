// src/app/models/deserializable.model.ts

export interface Deserializable<T> {
  deserialize(input: any): T;
  serialize(): object;
}