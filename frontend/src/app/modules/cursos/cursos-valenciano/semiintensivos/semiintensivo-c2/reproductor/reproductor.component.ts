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
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/EE1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_EE2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_EE3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_EE4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_CEEIO_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_CEEIO_2.mp4',
      ''
    ];
    this.desc = [
      'Determinants',
      'Flexió Verbal',
      'Expressió i Interacció Escrites 1',
      'Expressió i Interacció Escrites 2',
      'Expressió i Interacció Escrites 3',
      'Expressió i Interacció Escrites 4',
      'Expressió i Interacció Orals 1',
      'Expressió i Interacció Orals 2',
      'Prova Simulacre'
    ];
    this.resumen = [''];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $('#dropdet').css('display', 'none');
    $('#dropfv').css('display', 'none');
    $('#dropeie1').css('display', 'none');
    $('#dropeie2').css('display', 'none');
    $('#dropeie3').css('display', 'none');
    $('#dropeie4').css('display', 'none');
    $('#dropeio1').css('display', 'none');
    $('#dropeio2').css('display', 'none');
    $('#dropps').css('display', 'none');
    $('#item1').hover(
      () => {
        $('#dropdet').show('slow');
      },
      () => {
        $('#dropdet').css('display', 'none');
      }
    );
    $('#item2').hover(
      () => {
        $('#dropfv').show('slow');
      },
      () => {
        $('#dropfv').css('display', 'none');
      }
    );
    $('#item3').hover(
      () => {
        $('#dropeie1').show('slow');
      },
      () => {
        $('#dropeie1').css('display', 'none');
      }
    );
    $('#item4').hover(
      () => {
        $('#dropeie2').show('slow');
      },
      () => {
        $('#dropeie2').css('display', 'none');
      }
    );
    $('#item5').hover(
      () => {
        $('#dropeie3').show('slow');
      },
      () => {
        $('#dropeie3').css('display', 'none');
      }
    );
    $('#item6').hover(
      () => {
        $('#dropeie4').show('slow');
      },
      () => {
        $('#dropeie4').css('display', 'none');
      }
    );
    $('#item7').hover(
      () => {
        $('#dropeio1').show('slow');
      },
      () => {
        $('#dropeio1').css('display', 'none');
      }
    );
    $('#item8').hover(
      () => {
        $('#dropeio2').show('slow');
      },
      () => {
        $('#dropeio2').css('display', 'none');
      }
    );
    $('#item9').hover(
      () => {
        $('#droppv').show('slow');
      },
      () => {
        $('#droppv').css('display', 'none');
      }
    );

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
  }

  onRightClick() {
    return false;
  }
}
