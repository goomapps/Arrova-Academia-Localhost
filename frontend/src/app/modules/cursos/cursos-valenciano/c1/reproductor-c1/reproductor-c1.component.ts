import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor-c1',
  templateUrl: './reproductor-c1.component.html',
  styleUrls: ['./reproductor-c1.component.scss']
})
export class ReproductorC1Component implements OnInit {
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
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_F_E_O_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_F_E_O_2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_Morf_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_Morf_2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_Morf_3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_Morf_4.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_Morf_5.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_Lexic_Semantica.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_EE.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_EIO.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U1_EE_Narratiu.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U2_F_E_O.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U2_Morfosintaxi1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_U2_Morfosintaxi2.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_U2_Morfosintaxi3.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U2_EE.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/U2_Lexic_Semantica.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_U3_F_E_O_1.mp4',
      'https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_U3_F_E_O_2.mp4',
    ];
    this.desc = [
      'U1.Fonètica, Elocució i Ortografia 1',
      'U1.Fonètica, Elocució i Ortografia 2',
      'U1.Morfosintaxis 1',
      'U1.Morfosintaxis 2',
      'U1.Morfosintaxis 3',
      'U1.Morfosintaxis 4',
      'U1.Morfosintaxis 5',
      'U1.Léxic Semantica',
      'U1.Expressió i Interacció Escrites',
      'U1.Expressió i Interacció Orals',
      'U1.Text Narratiu',
      'U2.Fonètica, Elocució i Ortografia',
      'U2.Morfosintaxis 1',
      'U2.Morfosintaxis 2',
      'U2.Morfosintaxis 3',
      'U2.Expressió i Interacció Escrites',
      'U2.Léxic Semantica',
      'U3.Fonètica, Elocució i Ortografia 1',
      'U3.Fonètica, Elocució i Ortografia 2',
    ];
    this.resumen = [
      'Per a introduir-nos en el curs de valencià començarem amb una xicoteta revisió de les grafies en valencià així com dels dígrafs i les lletres dobles i d’algunes de les particularitats que aquests presenten, sobretot pel que fa a la divisió sil·làbica i la partició de paraules a final de línia.',
      'Amb aquest vídeo acabem l’apartat de fonètica, elocució i ortografia fent un xicotet repàs al concepte de la síl·laba així com alguns fenòmens que s’hi donen en relació a aquesta al nostre idioma, com és el funcionament dels diftongs, dels triftongs i dels hiats.',
      'Comencem l’estudi de la gramàtica pròpia del nivell de suficiència repassant el funcionament morfològic i sintàctic de l’article definit, però aprofundint, a més, en els elements particulars propis del nivell de Suficiència: casos complexes de l’ús de l’article i expressions que discrepen pel que fa a l’ús de l’article respecte del castellà.',
      'Si hi ha algun element que presente certa dificultat en relació a l’ús dels determinants és el del fals article lo, errada molt comuna i estesa arreu del territori valencià i que cal evitar. Així doncs, us presentem tota una sèrie de possibles solucions als usos més habituals d’aquest article, a més d’una sèrie de frases fetes en què s’evita l’ús del mateix.',
      'Amb aquest vídeo presentem el funcionament, tant morfològic com sintàctic, dels articles indefinit i personal.',
      'Els demostratius són un element molt important en el llenguatge. En aquest vídeo presentem el funcionament dels diferents demostratius i dels usos més particulars i concrets per tal d’evitar errades molt comunes a l’hora d’emprar-los.',
      'Els possessius són un element que presenta certes particularitats al nostre idioma i que repassem amb aquest vídeo. Així doncs, mostrarem els dos tipus de possessius que hi ha en valencià, així com l’abús que en fem, errada molt freqüent i estesa que caldrà corregir per tal de demostrar el nivell C1.',
      'El treball de l’àrea de Lèxic i Semàntica l’iniciem amb la derivació de paraules, en concret amb l’anàlisi de dos procediments: la prefixació i la parasíntesi. En aquesta unitat treballarem el camp de l’habitatge i la construcció, de manera que en aquest vídeo presentem els principals elements que caldrà tindre en compte per tal d’usar amb la màxima riquesa i precisió el vocabulari vinculat a aquest món.',
      'Per concloure la Unitat 1 acabem treballant l’Àrea d’Expressió Escrita en què, d’una banda, revisem l’estructura textual descriptiva, presentada en la unitat, alhora que us oferim una sèrie de consells per tal de millorar les vostres redaccions en relació a les tasques que se us presentaran a les proves de certificació.',
      'Per finalitzar, presentem els dos exercicis que se’ns presentaran a les proves de certificació, el monòleg i el diàleg, de manera que us donem una sèrie de claus per millorar la vostra expressió i interacció orals.',
      'Amb aquest vídeo de fonètica, elocució i ortografia iniciem la unitat 2, en aquest cas amb l’estudi dels fenòmens de fonètica sintàctica així com de l’ortografia i l’ús de l’apòstrof, les contraccions, el guionet, les abreviatures, les sigles, els acrònims i els símbols.'
    ];
    this.unidad = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
    this.unidadNum = 0;
  }

  ngOnInit(): void {
    $('#dropfeou1').css('display', 'none');
    $('#item2').hover(() => {
      $('#dropfeou1').show('slow');
    }, () => {
      $('#dropfeou1').css('display', 'none');
    });
    $('#dropmorfu1').css('display', 'none');
    $('#item7').hover(() => {
      $('#dropmorfu1').show('slow');
    }, () => {
      $('#dropmorfu1').css('display', 'none');
    });
    $('#droplisu1').css('display', 'none');
    $('#item8').hover(() => {
      $('#droplisu1').show('slow');
    }, () => {
      $('#droplisu1').css('display', 'none');
    });
    $('#dropfeou2').css('display', 'none');
    $('#item12').hover(() => {
      $('#dropfeou2').show('slow');
    }, () => {
      $('#dropfeou2').css('display', 'none');
    });
    $('#dropmorfu2').css('display', 'none');
    $('#item15').hover(() => {
      $('#dropmorfu2').show('slow');
    }, () => {
      $('#dropmorfu2').css('display', 'none');
    });
    $('#droplsu2').css('display', 'none');
    $('#item17').hover(() => {
      $('#droplsu2').show('slow');
    }, () => {
      $('#droplsu2').css('display', 'none');
    });
    $('#dropfeou3').css('display', 'none');
    $('#item19').hover(() => {
      $('#dropfeou3').show('slow');
    }, () => {
      $('#dropfeou3').css('display', 'none');
    });

    $('#item12').css('display', 'none');
    $('#item13').css('display', 'none');
    $('#item14').css('display', 'none');
    $('#item15').css('display', 'none');
    $('#item16').css('display', 'none');
    $('#item17').css('display', 'none');
    $('#item18').css('display', 'none');
    $('#item19').css('display', 'none');
    /*
    $('#item20').css('display', 'none');
     */

    const unidad1 = document.getElementById('unidad1');
    const unidad2 = document.getElementById('unidad2');
    const unidad3 = document.getElementById('unidad3');
    /*
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
      $('#item5').css('display', 'block');
      $('#item6').css('display', 'block');
      $('#item7').css('display', 'block');
      $('#item8').css('display', 'block');
      $('#item9').css('display', 'block');
      $('#item10').css('display', 'block');
      $('#item11').css('display', 'block');
      $('#item12').css('display', 'none');
      $('#item13').css('display', 'none');
      $('#item14').css('display', 'none');
      $('#item15').css('display', 'none');
      $('#item16').css('display', 'none');
      $('#item17').css('display', 'none');
      $('#item18').css('display', 'none');
      $('#item19').css('display', 'none');
      /*
      $('#item20').css('display', 'none');
       */
    });
    unidad2.addEventListener('click', () => {
      this.unidadNum = 1;
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
      $('#item12').css('display', 'block');
      $('#item13').css('display', 'block');
      $('#item14').css('display', 'block');
      $('#item15').css('display', 'block');
      $('#item16').css('display', 'block');
      $('#item17').css('display', 'block');
      $('#item18').css('display', 'none');
      $('#item19').css('display', 'none');
      /*
      $('#item20').css('display', 'block');
       */
    });
    unidad3.addEventListener('click', () => {
      this.unidadNum = 2;
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
      $('#item13').css('display', 'none');
      $('#item14').css('display', 'none');
      $('#item15').css('display', 'none');
      $('#item16').css('display', 'none');
      $('#item17').css('display', 'none');
      $('#item18').css('display', 'block');
      $('#item19').css('display', 'block');
      /*
      $('#item20').css('display', 'block');
       */
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
    /*
    const item20 = document.getElementById('item20');
     */
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
    /*
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
