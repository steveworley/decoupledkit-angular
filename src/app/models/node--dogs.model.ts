import { Deserializable } from "./deserializable.model";

export class DogsNode implements Deserializable<DogsNode> {

  id: number;
  type: string;
  title: string;
  body: string;
  nid: number;
  history_and_background: string;
  picture?: string;

  setPicture(url: string) {
    this.picture = `http://local.decoupledkit.com${url}`
    return this;
  }

  deserialize(input: any): DogsNode {
    const { attributes, relationships } = input;

    this.title = attributes.title
    this.body = attributes.body.value
    this.nid = attributes.nid
    this.history_and_background = attributes.field_history_and_background.value 
    this.id = input.id
    this.type = 'dogs'

    return this;
  }

  serialize(): object {
    return {
      data: {
        type: `node--${this.type}`,
        attributes: {
          title: this.title,
          body: { value: this.body },
          field_history_and_background: { value: this.history_and_background }
        }
      }
    }
  }
}