import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { EditComponent } from './components/edit/edit.component';
import { EditSummaryComponent } from './components/edit-summary/edit-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    LoginComponent,
    CreateProjectComponent,
    EditComponent,
    EditSummaryComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HomeModule,
    SidebarModule,
    FormsModule

  ],
  // providers: [{ provide: 'LOCALSTORAGE', useFactory: getLocalStorage }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage(): any {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}
