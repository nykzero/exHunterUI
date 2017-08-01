import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { QuestComponent } from './quest/quest.component';
import { RankingComponent } from './ranking/ranking.component';
import { CONST_ROUTING } from './app.routing'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent,
    SearchComponent,
    QuestComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
