import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesPinnedSmallComponent } from './articles-pinned-small/articles-pinned-small.component';
import { RouterModule } from '@angular/router';
import { ArticlesAlternativeSmallComponent } from './articles-alternative-small/articles-alternative-small.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ArticlesPinnedSmallComponent,
      },
      {
        path: 'pinned',
        component: ArticlesPinnedSmallComponent,
      },
      {
        path: 'alt',
        component: ArticlesAlternativeSmallComponent,
      }
    ]),
  ],
  declarations: [
    AppComponent,
    ArticlesPinnedSmallComponent,
    ArticlesAlternativeSmallComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
