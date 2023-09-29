import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/config';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public path = Path.url;
  constructor() { }

  ngOnInit(): void {
  }

}
