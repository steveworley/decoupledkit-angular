import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DrupalCrudComponent } from './drupal-crud/drupal-crud.component';
import { GraphqlSingleComponent } from './graphql-single/graphql-single.component';
import { GraphqlMultiComponent } from './graphql-multi/graphql-multi.component';
import { ApiMockComponent } from './api-mock/api-mock.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { UserContentComponent } from './user-content/user-content.component';

const routes: Routes = [
  { path: 'crud', component: DrupalCrudComponent },
  { path: 'graphqlclientsingle', component: GraphqlSingleComponent },
  { path: 'graphqlclientmulti', component: GraphqlMultiComponent },
  { path: 'apidatamock', component: ApiMockComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'uac', component: UserContentComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
