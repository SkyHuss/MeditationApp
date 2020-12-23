import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-splach-screen',
  templateUrl: './splach-screen.component.html',
  styleUrls: ['./splach-screen.component.css']
})
export class SplachScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeApp() {
    let element = document.getElementById("content");
    if (!element.classList.contains("active")){
      element.classList.add("active");
    }
  }
}
