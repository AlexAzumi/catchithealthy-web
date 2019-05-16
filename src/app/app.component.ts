// Dependencias
import { Component, OnInit } from '@angular/core';
// AOS
declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 /*
  * OnInit
  */
 public ngOnInit(): void {
  AOS.init();
  // Reiniciar
  const time = setTimeout(() => {
    AOS.refresh();
  }, 1000);
 }
}
