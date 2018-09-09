import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/home.component';
import { ViewPostComponent } from './viewPost/viewpost.component';
import { AddPostComponent } from './addPost/addpost.component';
import { CommonService } from './service/common.service';


@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ViewPostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
