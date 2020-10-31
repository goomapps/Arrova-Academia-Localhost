import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides(): void {
    let slideIndex = 0;
    const slides = document.getElementsByClassName('imagenSlider');
    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display: none;');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].setAttribute('style', 'position: block;');
    setTimeout(this.showSlides, 2000);
  }
}
