import { ThemesService } from './services/themes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,} from '@angular/material';
import { SearchDirective } from './directives/search.directive';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchDirective,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [ThemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
