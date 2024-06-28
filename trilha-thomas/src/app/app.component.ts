import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  loader: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 3000);
  }

  ngAfterViewInit(): void {
    AOS.init();
  }
}
