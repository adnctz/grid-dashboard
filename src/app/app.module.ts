import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesPinnedSmallComponent } from './articles-pinned-small/articles-pinned-small.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ArticlesPinnedSmallComponent,
      }
      // {
      //   path: '',
      //   component: () => import('./articles-pinned-small/articles-pinned-small.component').then(m => m.ArticlesPinnedSmallComponent)
      // },
      // {
      //   path: '',
      //   loadChildren: () => import('./articles-pinned-small/articles-pinned-small.component').then(m => m.ArticlesPinnedSmallComponent)
      // }
    ]),
  ],
  declarations: [
    AppComponent,
    ArticlesPinnedSmallComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
