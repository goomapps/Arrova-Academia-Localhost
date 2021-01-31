import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor-c2',
  templateUrl: './reproductor-c2.component.html',
  styleUrls: ['./reproductor-c2.component.scss'],
})
export class ReproductorC2Component implements OnInit {
  videoSrc: string[];
  videoSrcNum: number;
  desc: string[];
  descNum: number;
  resumen: string[];
  resumenNum: number;
  unidad: number[];
  unidadNum: number;

  constructor() {
    this.videoSrc = [
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C2_U1_EE.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C2_U1_F_E_O_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C2_U1_F_E_O_2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C2_U1_F_E_O_3.mp4',
    ];
    this.desc = [];
    this.resumen = [];
    this.unidad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
    this.unidadNum = 0;
  }

  ngOnInit(): void {
    $('#dropfeoc2').css('display', 'none');
    $('#item4').hover(
      () => {
        $('#dropfeoc2').show('slow');
      },
      () => {
        $('#dropfeoc2').css('display', 'none');
      }
    );

    const unidad1 = document.getElementById('unidad1');
    const unidad2 = document.getElementById('unidad2');
    /*
    const unidad3 = document.getElementById('unidad3');
    const unidad4 = document.getElementById('unidad4');
    const unidad5 = document.getElementById('unidad5');
    const unidad6 = document.getElementById('unidad6');
    const unidad7 = document.getElementById('unidad7');
    const unidad8 = document.getElementById('unidad8');
    const unidad9 = document.getElementById('unidad9');
    const unidad10 = document.getElementById('unidad10');
     */

    unidad1.addEventListener('click', () => {
      this.unidadNum = 0;
      $('#item1').css('display', 'block');
      $('#item2').css('display', 'block');
      $('#item3').css('display', 'block');
      $('#item4').css('display', 'block');
    });
    unidad2.addEventListener('click', () => {
      this.unidadNum = 1;
      $('#item1').css('display', 'none');
      $('#item2').css('display', 'none');
      $('#item3').css('display', 'none');
      $('#item4').css('display', 'none');
    });

    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');
    const item4 = document.getElementById('item4');
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
    item3.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[2];
      this.descNum = 2;
      this.resumenNum = 2;
    });
    item4.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[3];
      this.descNum = 3;
      this.resumenNum = 3;
    });
  }

  onRightClick() {
    return false;
  }
}
