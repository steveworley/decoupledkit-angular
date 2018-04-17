import { Component, OnInit } from '@angular/core'

import { DogsNode } from '../models/node--dogs.model'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

import { DrupalJsonApiService } from '../models/drupal-jsonapi.service';

@Component({
  selector: 'app-drupal-crud',
  templateUrl: './drupal-crud.component.html',
  styleUrls: ['./drupal-crud.component.css']
})

export class DrupalCrudComponent implements OnInit {

  nodes: Observable<{} | DogsNode[]>

  model = new DogsNode()

  constructor(
    private router: Router,
    private drupalJsonApi: DrupalJsonApiService
  ) {}

  ngOnInit() {
    this.drupalJsonApi
      .getNodes('dogs')
      .then(nodes => this.nodes = nodes)
      .then(nodes => {
        nodes.map((node: DogsNode) => {
          this.drupalJsonApi.include(node, 'dogs', 'field_dog_picture').then(res => {
            node.setPicture(res.data.attributes.url)
          }).catch(err => console.error(err))
        })
        return Promise.resolve(nodes)
      })
  }

  onDeleteClick(uuid) {
    const confirm = window.confirm(`Confirm delete?`)
    if (confirm) {
      this.drupalJsonApi.deleteNode('dogs', uuid).then(nodes => this.nodes = nodes)
    }
  }

  onAddClick() {
    this.drupalJsonApi.createNode('dogs', this.model).then(nodes => {
      this.model = new DogsNode()
      this.nodes = nodes
    })
  }
}
