import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor-c1',
  templateUrl: './reproductor-c1.component.html',
  styleUrls: ['./reproductor-c1.component.scss']
})
export class ReproductorC1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onRightClick() {
    return false;
  }
}
