import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './burger/my-first.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MySecondComponent } from './menu/my-second.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MyFirstComponent, ParentListComponent, HeaderComponent, LandingPageComponent, MySecondComponent, MenuDetailComponent, BurgerDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit
{

  ngOnInit(): void
  {
  }
}