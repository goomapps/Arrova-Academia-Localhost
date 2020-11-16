import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor-intensivo',
  templateUrl: './reproductor-intensivo.component.html',
  styleUrls: ['./reproductor-intensivo.component.scss']
})
export class ReproductorIntensivoComponent implements OnInit {
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
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_EE1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_EE2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_EE3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_EE4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_EE5.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Morfosintaxi_Flexio_Verbal.mp4',
      '',
      '',
      '',
      '',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Mon%C3%B2leg.mp4',
      ''
    ];
    this.desc = [
      'Expressió i interacció escrites 1',
      'Expressió i interacció escrites 2',
      'Expressió i interacció escrites 3',
      'Expressió i interacció escrites 4',
      'Expressió i interacció escrites 5',
      'Morfosintaxis',
      'Ortografía',
      'Flexió Verbal',
      'Expressió i interacció oral',
      'Comprensió escrita',
      'Monóleg',
      'Simulacre fí curs'
    ];
    this.resumen = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $('#dropeie1').css('display', 'none');
    $('#item1').hover(() => {
      $('#dropeie1').show('slow');
    }, () => {
      $('#dropeie1').css('display', 'none');
    });
    $('#dropeie2').css('display', 'none');
    $('#item2').hover(() => {
      $('#dropeie2').show('slow');
    }, () => {
      $('#dropeie2').css('display', 'none');
    });
    $('#dropeie3').css('display', 'none');
    $('#item3').hover(() => {
      $('#dropeie3').show('slow');
    }, () => {
      $('#dropeie3').css('display', 'none');
    });
    $('#dropeie4').css('display', 'none');
    $('#item4').hover(() => {
      $('#dropeie4').show('slow');
    }, () => {
      $('#dropeie4').css('display', 'none');
    });
    $('#dropmorf').css('display', 'none');
    $('#item6').hover(() => {
      $('#dropmorf').show('slow');
    }, () => {
      $('#dropmorf').css('display', 'none');
    });
    $('#droporto').css('display', 'none');
    $('#item7').hover(() => {
      $('#droporto').show('slow');
    }, () => {
      $('#droporto').css('display', 'none');
    });
    $('#dropfv').css('display', 'none');
    $('#item8').hover(() => {
      $('#dropfv').show('slow');
    }, () => {
      $('#dropfv').css('display', 'none');
    });
    $('#dropeio').css('display', 'none');
    $('#item9').hover(() => {
      $('#dropeio').show('slow');
    }, () => {
      $('#dropeio').css('display', 'none');
    });
    $('#dropce').css('display', 'none');
    $('#item10').hover(() => {
      $('#dropce').show('slow');
    }, () => {
      $('#dropce').css('display', 'none');
    });
    $('#dropfc').css('display', 'none');
    $('#item12').hover(() => {
      $('#dropfc').show('slow');
    }, () => {
      $('#dropfc').css('display', 'none');
    });

    const unidad1 = document.getElementById('unidad1');
    const unidad2 = document.getElementById('unidad2');

    unidad1.addEventListener('click', () => {
      $('#item1').css('display', 'block');
      $('#item2').css('display', 'block');
      $('#item3').css('display', 'block');
      $('#item4').css('display', 'block');
      $('#item5').css('display', 'block');
      $('#item6').css('display', 'block');
      $('#item7').css('display', 'block');
      $('#item8').css('display', 'block');
      $('#item9').css('display', 'block');
      $('#item10').css('display', 'block');
      $('#item11').css('display', 'block');
      $('#item12').css('display', 'block');
    });

    unidad2.addEventListener('click', () => {
      $('#item1').css('display', 'none');
      $('#item2').css('display', 'none');
      $('#item3').css('display', 'none');
      $('#item4').css('display', 'none');
      $('#item5').css('display', 'none');
      $('#item6').css('display', 'none');
      $('#item7').css('display', 'none');
      $('#item8').css('display', 'none');
      $('#item9').css('display', 'none');
      $('#item10').css('display', 'none');
      $('#item11').css('display', 'none');
      $('#item12').css('display', 'none');
    });

    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');
    const item4 = document.getElementById('item4');
    const item5 = document.getElementById('item5');
    const item6 = document.getElementById('item6');
    const item7 = document.getElementById('item7');
    const item8 = document.getElementById('item8');
    const item9 = document.getElementById('item9');
    const item10 = document.getElementById('item10');
    const item11 = document.getElementById('item11');
    const item12 = document.getElementById('item12');
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
    item5.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[4];
      this.descNum = 4;
      this.resumenNum = 4;
    });
    item6.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[5];
      this.descNum = 5;
      this.resumenNum = 5;
    });
    item7.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[6];
      this.descNum = 6;
      this.resumenNum = 6;
    });
    item8.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[7];
      this.descNum = 7;
      this.resumenNum = 7;
    });
    item9.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[8];
      this.descNum = 8;
      this.resumenNum = 8;
    });
    item10.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[9];
      this.descNum = 9;
      this.resumenNum = 9;
    });
    item11.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[10];
      this.descNum = 10;
      this.resumenNum = 10;
    });
    item12.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[11];
      this.descNum = 11;
      this.resumenNum = 11;
    });
    /*
    item13.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[12];
      this.descNum = 12;
      this.resumenNum = 12;
    });
    item14.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[13];
      this.descNum = 13;
      this.resumenNum = 13;
    });
    item15.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[14];
      this.descNum = 14;
      this.resumenNum = 14;
    });
    item16.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[15];
      this.descNum = 15;
      this.resumenNum = 15;
    });
    item17.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[16];
      this.descNum = 16;
      this.resumenNum = 16;
    });
    item18.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[17];
      this.descNum = 17;
      this.resumenNum = 17;
    });
    item19.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[18];
      this.descNum = 18;
      this.resumenNum = 18;
    });
    item20.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[19];
      this.descNum = 19;
      this.resumenNum = 19;
    });
     */
  }

  onRightClick() {
    return false;
  }
}
