// Dependencias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/globals/navbar/navbar.component';
import { FooterComponent } from './components/globals/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DownloadComponent } from './components/download/download.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DownloadComponent,
    FooterComponent,
    ScreenshotsComponent
  ],
  imports: [
    BrowserModule,
    NgbCollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
