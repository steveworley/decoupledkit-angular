import { Injectable } from "@angular/core";
import { DogsNode } from "./node--dogs.model";
import { Deserializable } from "./deserializable.model";

const Waterwheel = require('waterwheel')

@Injectable()
export class DrupalJsonApiService {
  
  readonly apiUrl = 'http://local.decoupledkit.com' // Move to environment config.

  private waterwheel;

  /**
   * Angular models that represent the data presented from JSONAPI for the node types.
   * 
   * @TODO: This might be coupling a little too tighly - consider a discovery service and
   * a generic node model that can be dynamic enough to support multiple field definitions.
   */
  private models = {
    dogs: DogsNode
  }

  constructor() {
    this.waterwheel = new Waterwheel({
      base: this.apiUrl,
      // @TODO: This should be moved to configuration and token generated serverside.
      oauth: {
        grant_type: 'password',
        client_id: 'be2557eb-bd73-4606-9a45-30b94a07019d',
        client_secret: 'apitest',
        username: 'apitest',
        password: 'apitest'
      }
    })
  }

  getNodes (type: string, includes?: Array<any>): Promise<any> {
    return this.waterwheel.jsonapi
      .get(`node/${type}`, {}, null)
      .then(res => this.includes(res, type, includes))
      .then(res => this.reduce(res, type))
      .then(nodes => this.log(nodes, type))
      .catch(this.handleErrors(`getNodes`))
  }

  deleteNode(type: string, uuid: string) {
    return this.waterwheel.jsonapi
      .delete(`node/${type}`, uuid)
      .then(res => this.log(res, type))
      .then(res => this.getNodes(type))
  }

  createNode(type: string, node: Deserializable<any>): Promise<any> {
    return this.waterwheel.jsonapi
      .post(`node/${type}`, node.serialize())
      .then(res => this.log(res, type))
      .then(res => this.getNodes(type))
  }
  
  include(node, type: string, field: string) {
    return this.waterwheel.jsonapi.get(`node/${type}`, {}, `${node.id}/${field}`);
  }

  private async includes(res: {data: Array<any>}, type: string, includes?: Array<any>): Promise<any> {
    if (!includes || typeof includes.map !== 'function' || typeof res.data.map !== 'function') { 
      return Promise.resolve(res);
    }

    res.data.map(async (node, index) => {
      includes.map(async field => {
        try {
          const included = await this.waterwheel.jsonapi.get(`node/${type}`, {}, `${node.id}/${field}`)
          res.data[index].relationships[field] = Object.assign({}, included)
        } catch (err) {
          this.handleErrors(`Includes reducer`)(err)
        }
      })
    })
  
    return Promise.resolve(res)
  }

  /**
   * Reduce the result of a JSONAPI request to node model objects.
   * 
   * @param {object} res 
   *   The JSONAPI response.
   * @param {string} type 
   *   The type of node that is being requested.
   */
  private reduce(res: {data: Array<any>}, type: string): Promise<any> {
    let nodes

    if (!this.models[type] && res.data.length === 0) {
      throw new Error(`Cannot reduce invalid response.`)
    }

    nodes = res.data.map(node => {
      return new this.models[type]().deserialize(node)
    })

    return Promise.resolve(nodes)
  }

  private log(nodes: Array<any>, type: string): Promise<any> {
    console.info(`JSON API: Found ${nodes.length} nodes of ${type}`)
    console.log(nodes);
    return Promise.resolve(nodes)
  }

  private handleErrors<T> (operation = 'operation') {
    return (error: Error): Promise<any> => {
      console.error(error)
      const message = (error instanceof Error) ? error.message : error;
      return Promise.reject(`${operation} failed: ${message}`)
    }
  }

}