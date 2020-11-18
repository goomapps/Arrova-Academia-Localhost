import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor-intensivo',
  templateUrl: './reproductor-intensivo.component.html',
  styleUrls: ['./reproductor-intensivo.component.scss'],
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
      '',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_20_10_2020_GrupA_Part1_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV__20_10_2020_GrupA_Part1_2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_20_10_2020_GrupA_Part2_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_20_10_2020_GrupA_Part2_2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_22_20_2020_GrupA_Part1_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_22_10_2020_GrupA_Part1_2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_22_20_2020_GrupA_Part1_3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_22_20_2020_GrupA_Part1_4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_GrupA_03_11_2020_Part1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_GrupA_03_11_2020_Part2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_GrupA_03_11_2020_Part3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Classe_Intensiu_JQCV_GrupA_03_11_2020_Part4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_Classe_5_11_2020_GrupA_Part1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_Classe_5_11_2020_GrupA_Part2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_Classe_5_11_2020_GrupA_Part3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_Classe_5_11_2020_GrupA_Part4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_JQCV_GrupA_17_11_2020_Part1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_JQCV_GrupA_17_11_2020_Part2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_JQCV_GrupA_17_11_2020_Part3.mp4',
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
      'Simulacre fí curs',
      'Clase 20/10 Part 1',
      'Clase 20/10 Part 2',
      'Clase 20/10 Part 3',
      'Clase 20/10 Part 4',
      'Clase 22/10 Part 1',
      'Clase 22/10 Part 2',
      'Clase 22/10 Part 3',
      'Clase 22/10 Part 4',
      'Clase 3/11 Part 1',
      'Clase 3/11 Part 2',
      'Clase 3/11 Part 3',
      'Clase 3/11 Part 4',
      'Clase 5/11 Part 1',
      'Clase 5/11 Part 2',
      'Clase 5/11 Part 3',
      'Clase 5/11 Part 4',
      'Clase 17/11 Part 1',
      'Clase 17/11 Part 2',
      'Clase 17/11 Part 3',
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
    $('#dropeie1').css('display', 'none');
    $('#item1').hover(
      () => {
        $('#dropeie1').show('slow');
      },
      () => {
        $('#dropeie1').css('display', 'none');
      }
    );
    $('#dropeie2').css('display', 'none');
    $('#item2').hover(
      () => {
        $('#dropeie2').show('slow');
      },
      () => {
        $('#dropeie2').css('display', 'none');
      }
    );
    $('#dropeie3').css('display', 'none');
    $('#item3').hover(
      () => {
        $('#dropeie3').show('slow');
      },
      () => {
        $('#dropeie3').css('display', 'none');
      }
    );
    $('#dropeie4').css('display', 'none');
    $('#item4').hover(
      () => {
        $('#dropeie4').show('slow');
      },
      () => {
        $('#dropeie4').css('display', 'none');
      }
    );
    $('#dropmorf').css('display', 'none');
    $('#item6').hover(
      () => {
        $('#dropmorf').show('slow');
      },
      () => {
        $('#dropmorf').css('display', 'none');
      }
    );
    $('#droporto').css('display', 'none');
    $('#item7').hover(
      () => {
        $('#droporto').show('slow');
      },
      () => {
        $('#droporto').css('display', 'none');
      }
    );
    $('#dropfv').css('display', 'none');
    $('#item8').hover(
      () => {
        $('#dropfv').show('slow');
      },
      () => {
        $('#dropfv').css('display', 'none');
      }
    );
    $('#dropeio').css('display', 'none');
    $('#item9').hover(
      () => {
        $('#dropeio').show('slow');
      },
      () => {
        $('#dropeio').css('display', 'none');
      }
    );
    $('#dropce').css('display', 'none');
    $('#item10').hover(
      () => {
        $('#dropce').show('slow');
      },
      () => {
        $('#dropce').css('display', 'none');
      }
    );
    $('#dropfc').css('display', 'none');
    $('#item12').hover(
      () => {
        $('#dropfc').show('slow');
      },
      () => {
        $('#dropfc').css('display', 'none');
      }
    );
    $('#item13').css('display', 'none');
    $('#item14').css('display', 'none');
    $('#item15').css('display', 'none');
    $('#item16').css('display', 'none');
    $('#item17').css('display', 'none');
    $('#item18').css('display', 'none');
    $('#item19').css('display', 'none');
    $('#item20').css('display', 'none');
    $('#item21').css('display', 'none');
    $('#item22').css('display', 'none');
    $('#item23').css('display', 'none');
    $('#item24').css('display', 'none');
    $('#item25').css('display', 'none');
    $('#item26').css('display', 'none');
    $('#item27').css('display', 'none');
    $('#item28').css('display', 'none');
    $('#item29').css('display', 'none');
    $('#item30').css('display', 'none');
    $('#item31').css('display', 'none');

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
      $('#item13').css('display', 'none');
      $('#item14').css('display', 'none');
      $('#item15').css('display', 'none');
      $('#item16').css('display', 'none');
      $('#item17').css('display', 'none');
      $('#item18').css('display', 'none');
      $('#item19').css('display', 'none');
      $('#item20').css('display', 'none');
      $('#item21').css('display', 'none');
      $('#item22').css('display', 'none');
      $('#item23').css('display', 'none');
      $('#item24').css('display', 'none');
      $('#item25').css('display', 'none');
      $('#item26').css('display', 'none');
      $('#item27').css('display', 'none');
      $('#item28').css('display', 'none');
      $('#item29').css('display', 'none');
      $('#item30').css('display', 'none');
      $('#item31').css('display', 'none');
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
      $('#item13').css('display', 'block');
      $('#item14').css('display', 'block');
      $('#item15').css('display', 'block');
      $('#item16').css('display', 'block');
      $('#item17').css('display', 'block');
      $('#item18').css('display', 'block');
      $('#item19').css('display', 'block');
      $('#item20').css('display', 'block');
      $('#item21').css('display', 'block');
      $('#item22').css('display', 'block');
      $('#item23').css('display', 'block');
      $('#item24').css('display', 'block');
      $('#item25').css('display', 'block');
      $('#item26').css('display', 'block');
      $('#item27').css('display', 'block');
      $('#item28').css('display', 'block');
      $('#item29').css('display', 'block');
      $('#item30').css('display', 'block');
      $('#item31').css('display', 'block');
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
    const item22 = document.getElementById('item22');
    const item23 = document.getElementById('item23');
    const item24 = document.getElementById('item24');
    const item25 = document.getElementById('item25');
    const item26 = document.getElementById('item26');
    const item27 = document.getElementById('item27');
    const item28 = document.getElementById('item28');
    const item29 = document.getElementById('item29');
    const item30 = document.getElementById('item30');
    const item31 = document.getElementById('item31');
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
    item22.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[21];
      this.descNum = 21;
      this.resumenNum = 21;
    });
    item23.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[22];
      this.descNum = 22;
      this.resumenNum = 22;
    });
    item24.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[23];
      this.descNum = 23;
      this.resumenNum = 23;
    });
    item25.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[24];
      this.descNum = 24;
      this.resumenNum = 24;
    });
    item26.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[25];
      this.descNum = 25;
      this.resumenNum = 25;
    });
    item27.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[26];
      this.descNum = 26;
      this.resumenNum = 26;
    });
    item28.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[27];
      this.descNum = 27;
      this.resumenNum = 27;
    });
    item29.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[28];
      this.descNum = 28;
      this.resumenNum = 28;
    });
    item30.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[29];
      this.descNum = 29;
      this.resumenNum = 29;
    });
    item31.addEventListener('click', () => {
      video.pause();
      video.src = this.videoSrc[30];
      this.descNum = 30;
      this.resumenNum = 30;
    });
  }

  onRightClick() {
    return false;
  }
}
