import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { UserComponentComponent } from './user-component/user-component.component';
import {FormsModule} from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    UserComponentComponent,
    ArticleComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
