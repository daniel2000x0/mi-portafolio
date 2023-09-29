import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
const appRoutes:Routes=[
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '',
    component: FooterComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
