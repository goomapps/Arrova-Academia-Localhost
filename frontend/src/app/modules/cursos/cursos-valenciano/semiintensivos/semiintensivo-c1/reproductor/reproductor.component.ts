import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorSemiC1Component implements OnInit {
  videoSrc: string[];
  videoSrcNum: number;
  desc: string[];
  descNum: number;
  resumen: string[];
  resumenNum: number;
  unidad: number[];

  constructor() {
    this.videoSrc = [''];
    this.desc = [''];
    this.resumen = [''];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $('#dropmorfosintaxis').css('display', 'none');
    $('#item1').hover(
      () => {
        $('#dropmorfosintaxis').show('slow');
      },
      () => {
        $('#dropmorfosintaxis').css('display', 'none');
      }
    );

    const unidad1 = document.getElementById('unidad1');
    const unidad2 = document.getElementById('unidad2');

    unidad1.addEventListener('click', () => {
      $('#item1').css('display', 'block');
    });

    unidad2.addEventListener('click', () => {
      $('#item1').css('display', 'none');
    });

    const item1 = document.getElementById('item1');
    const video = document.querySelector('video');

    item1.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[0];
      this.descNum = 0;
      this.resumenNum = 0;
    });
  }

  onRightClick() {
    return false;
  }
}
