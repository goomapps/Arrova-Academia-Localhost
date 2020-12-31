import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent implements OnInit {
  videoSrc: string[];
  videoSrcNum: number;
  desc: string[];
  descNum: number;
  resumen: string[];
  resumenNum: number;
  unidad: number[];

  constructor() {
    this.videoSrc = [
      '',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/flexio+verbal.mp4',
    ];
    this.desc = ['Determinants', 'Flexió Verbal'];
    this.resumen = [''];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $('#dropdet').css('display', 'none');
    $('#item1').hover(
      () => {
        $('#dropdet').show('slow');
      },
      () => {
        $('#dropdet').css('display', 'none');
      }
    );
    $('#dropfv').css('display', 'none');
    $('#item2').hover(
      () => {
        $('#dropfv').show('slow');
      },
      () => {
        $('#dropfv').css('display', 'none');
      }
    );

    const unidad1 = document.getElementById('unidad1');
    const unidad2 = document.getElementById('unidad2');

    unidad1.addEventListener('click', () => {
      $('#item1').css('display', 'block');
      $('#item2').css('display', 'block');
    });

    unidad2.addEventListener('click', () => {
      $('#item1').css('display', 'none');
    });

    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const video = document.querySelector('video');

    item1.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[0];
      this.descNum = 0;
      this.resumenNum = 0;
    });
    item2.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[1];
      this.descNum = 1;
      this.resumenNum = 1;
    });
  }

  onRightClick() {
    return false;
  }
}
