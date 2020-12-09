import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor-intensivo-cieacova',
  templateUrl: './reproductor-intensivo-cieacova.component.html',
  styleUrls: ['./reproductor-intensivo-cieacova.component.scss'],
})
export class ReproductorIntensivoCieacovaComponent implements OnInit {
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
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_18_11_2020_Part1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_18_11_2020_Part2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_18_11_2020_Part3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part4.mp4',
      '',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/EE1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_EE2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_CEEIO_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/flexio+verbal.mp4'
    ];
    this.desc = [
      'Morfosintaxis',
      'Clase 16/11 Part 1',
      'Clase 16/11 Part 2',
      'Clase 16/11 Part 3',
      'Clase 16/11 Part 4',
      'Clase 17/11 Part 1',
      'Clase 17/11 Part 2',
      'Clase 17/11 Part 3',
      'Clase 17/11 Part 4',
      'Clase 18/11 Part 1',
      'Clase 18/11 Part 2',
      'Clase 18/11 Part 3',
      'Clase 24/11 Part 1',
      'Clase 24/11 Part 2',
      'Clase 24/11 Part 3',
      'Clase 24/11 Part 4',
      'Lèxic i semàntica',
      'Expressió i interacció escrites',
      'Expressió i interacció escrites 2',
      'Expressió i interacció orals',
      'Flexio Verbal',
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
      '',
    ];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $('#dropmorf').css('display', 'none');
    $('#dropls').css('display', 'none');
    $('#dropeie').css('display', 'none');
    $('#dropee2').css('display', 'none');
    $('#dropeeo1').css('display', 'none');
    $('#dropfv2').css('display', 'none');
    $('#item1').hover(
      () => {
        $('#dropmorf').show('slow');
      },
      () => {
        $('#dropmorf').css('display', 'none');
      }
    );
    $('#item17').hover(
      () => {
        $('#dropls').show('slow');
      },
      () => {
        $('#dropls').css('display', 'none');
      }
    );
    $('#item18').hover(
      () => {
        $('#dropeie').show('slow');
      },
      () => {
        $('#dropeie').css('display', 'none');
      }
    );
    $('#item19').hover(
      () => {
        $('#dropee2').show('slow');
      },
      () => {
        $('#dropee2').css('display', 'none');
      }
    );
    $('#item20').hover(
      () => {
        $('#dropeeo1').show('slow');
      },
      () => {
        $('#dropeeo1').css('display', 'none');
      }
    );
    $('#item21').hover(
      () => {
        $('#dropfv2').show('slow');
      },
      () => {
        $('#dropfv2').css('display', 'none');
      }
    );
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
    $('#item13').css('display', 'none');
    $('#item14').css('display', 'none');
    $('#item15').css('display', 'none');
    $('#item16').css('display', 'none');

    const unidad1 = document.getElementById('unidad1');
    const unidad2 = document.getElementById('unidad2');

    unidad1.addEventListener('click', () => {
      $('#item1').css('display', 'block');
      $('#item17').css('display', 'block');
      $('#item18').css('display', 'block');
      $('#item19').css('display', 'block');
      $('#item20').css('display', 'block');
      $('#item21').css('display', 'block');
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
      $('#item13').css('display', 'none');
      $('#item14').css('display', 'none');
      $('#item15').css('display', 'none');
      $('#item16').css('display', 'none');
    });

    unidad2.addEventListener('click', () => {
      $('#item1').css('display', 'none');
      $('#item17').css('display', 'none');
      $('#item18').css('display', 'none');
      $('#item19').css('display', 'none');
      $('#item20').css('display', 'none');
      $('#item21').css('display', 'none');
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
      $('#item13').css('display', 'block');
      $('#item14').css('display', 'block');
      $('#item15').css('display', 'block');
      $('#item16').css('display', 'block');
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
    const item13 = document.getElementById('item13');
    const item14 = document.getElementById('item14');
    const item15 = document.getElementById('item15');
    const item16 = document.getElementById('item16');
    const item17 = document.getElementById('item17');
    const item18 = document.getElementById('item18');
    const item19 = document.getElementById('item19');
    const item20 = document.getElementById('item20');
    const item21 = document.getElementById('item21');
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
    item21.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[20];
      this.descNum = 20;
      this.resumenNum = 20;
    });
  }

  onRightClick() {
    return false;
  }
}
