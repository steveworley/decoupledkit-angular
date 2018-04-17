import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatDividerModule, MatGridListModule, MatGridTile, MatListModule, MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { AppRoutingModule } from './/app-routing.module';
import { DrupalCrudComponent } from './drupal-crud/drupal-crud.component';
import { GraphqlSingleComponent } from './graphql-single/graphql-single.component';
import { GraphqlMultiComponent } from './graphql-multi/graphql-multi.component';
import { ApiMockComponent } from './api-mock/api-mock.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { UserContentComponent } from './user-content/user-content.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DrupalJsonApiService } from './models/drupal-jsonapi.service';
import { FormsModule } from '@angular/forms';
import { ApolloModule } from 'apollo-angular'
import { HttpLinkModule } from 'apollo-angular-link-http'
import { GraphqlService } from './models/graphql.service';

@NgModule({
  declarations: [
    AppComponent,
    MenudemoComponent,
    DrupalCrudComponent,
    GraphqlSingleComponent,
    GraphqlMultiComponent,
    ApiMockComponent,
    ChatbotComponent,
    UserContentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DrupalJsonApiService,
    GraphqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
