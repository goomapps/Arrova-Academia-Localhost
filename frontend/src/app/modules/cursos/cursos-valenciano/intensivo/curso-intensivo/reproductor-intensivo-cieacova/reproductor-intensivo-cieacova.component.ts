import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-reproductor-intensivo-cieacova",
  templateUrl: "./reproductor-intensivo-cieacova.component.html",
  styleUrls: ["./reproductor-intensivo-cieacova.component.scss"],
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
      "",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_16_11_2020_Part4.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupB_17_11_2020_Part4.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_18_11_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_18_11_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Intensiu_C1_CIEAcova_GrupA_18_11_2020_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/Curs_Intensiu_C1_CIEAcova_24_11_2020_Part4.mp4",
      "",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/EE1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_EE2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_CIEAcova_CEEIO_1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/flexio+verbal.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupA_30_11_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupA_30_11_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupA_30_11_2020_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupB_1_12_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupB_1_12_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupA_2_12_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupA_2_12_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupA_2_12_2020_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupA_2_12_2020_Part4.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupB_3_12_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupB_3_12_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_GrupB_3_12_2020_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/whereby-curs-intensiu-c1-cieacova-03-Dec-2020-1922-CET.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_7_i_8_12_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_7_i_8_12_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_9_i_10_12_2020_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_9_i_10_12_2020_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_15_12_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_15_2_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_15_12_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_16_12_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_16_12_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_16_12_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_16_12_Part4.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_22_12_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_22_12_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_22_12_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_23_12_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_23_12_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_26_11_Part1.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_26_11_Part2.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_26_11_Part3.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Intensiu_CIEAcova_classe_26_11_Part4.mp4",
    ];
    this.desc = [
      "Morfosintaxis",
      "Clase 16/11 Part 1",
      "Clase 16/11 Part 2",
      "Clase 16/11 Part 3",
      "Clase 16/11 Part 4",
      "Clase 17/11 Part 1",
      "Clase 17/11 Part 2",
      "Clase 17/11 Part 3",
      "Clase 17/11 Part 4",
      "Clase 18/11 Part 1",
      "Clase 18/11 Part 2",
      "Clase 18/11 Part 3",
      "Clase 24/11 Part 1",
      "Clase 24/11 Part 2",
      "Clase 24/11 Part 3",
      "Clase 24/11 Part 4",
      "Lèxic i semàntica",
      "Expressió i interacció escrites",
      "Expressió i interacció escrites 2",
      "Expressió i interacció orals",
      "Flexio Verbal",
      "CLASE DIA 30/11 PART 1",
      "CLASE DIA 30/11 PART 2",
      "CLASE DIA 30/11 PART 3",
      "CLASE DIA 1/12 PART 1",
      "CLASE DIA 1/12 PART 2",
      "CLASE DIA 2/12 PART 1",
      "CLASE DIA 2/12 PART 2",
      "CLASE DIA 2/12 PART 3",
      "CLASE DIA 2/12 PART 4",
      "CLASE DIA 3/12 PART 1",
      "CLASE DIA 3/12 PART 2",
      "CLASE DIA 3/12 PART 3",
      "CLASE DIA 3/12 PART 4",
      "CLASE DIA 7/12 PART 1",
      "CLASE DIA 7/12 PART 2",
      "CLASE DIA 9/12 PART 1",
      "CLASE DIA 9/12 PART 2",
      "CLASE DIA 15/12 PART 1",
      "CLASE DIA 15/12 PART 2",
      "CLASE DIA 15/12 PART 3",
      "CLASE DIA 16/12 PART 1",
      "CLASE DIA 16/12 PART 2",
      "CLASE DIA 16/12 PART 3",
      "CLASE DIA 16/12 PART 4",
      "CLASE DIA 22/12 PART 1",
      "CLASE DIA 22/12 PART 2",
      "CLASE DIA 22/12 PART 3",
      "CLASE DIA 23/12 PART 1",
      "CLASE DIA 23/12 PART 2",
      "CLASE DIA 26/12 PART 1",
      "CLASE DIA 26/12 PART 2",
      "CLASE DIA 26/12 PART 3",
      "CLASE DIA 26/12 PART 4",
    ];
    this.resumen = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $("#dropmorf").css("display", "none");
    $("#dropls").css("display", "none");
    $("#dropeie").css("display", "none");
    $("#dropee2").css("display", "none");
    $("#dropeeo1").css("display", "none");
    $("#dropfv2").css("display", "none");
    $("#item1").hover(
      () => {
        $("#dropmorf").show("slow");
      },
      () => {
        $("#dropmorf").css("display", "none");
      }
    );
    $("#item17").hover(
      () => {
        $("#dropls").show("slow");
      },
      () => {
        $("#dropls").css("display", "none");
      }
    );
    $("#item18").hover(
      () => {
        $("#dropeie").show("slow");
      },
      () => {
        $("#dropeie").css("display", "none");
      }
    );
    $("#item19").hover(
      () => {
        $("#dropee2").show("slow");
      },
      () => {
        $("#dropee2").css("display", "none");
      }
    );
    $("#item20").hover(
      () => {
        $("#dropeeo1").show("slow");
      },
      () => {
        $("#dropeeo1").css("display", "none");
      }
    );
    $("#item21").hover(
      () => {
        $("#dropfv2").show("slow");
      },
      () => {
        $("#dropfv2").css("display", "none");
      }
    );
    $("#item55").hover(
      () => {
        $("#droppf").show("slow");
      },
      () => {
        $("#droppf").css("display", "none");
      }
    );
    $("#item56").hover(
      () => {
        $("#droppre").show("slow");
      },
      () => {
        $("#droppre").css("display", "none");
      }
    );
    $("#item57").hover(
      () => {
        $("#droprel").show("slow");
      },
      () => {
        $("#droprel").css("display", "none");
      }
    );
    $("#item2").css("display", "none");
    $("#item3").css("display", "none");
    $("#item4").css("display", "none");
    $("#item5").css("display", "none");
    $("#item6").css("display", "none");
    $("#item7").css("display", "none");
    $("#item8").css("display", "none");
    $("#item9").css("display", "none");
    $("#item10").css("display", "none");
    $("#item11").css("display", "none");
    $("#item12").css("display", "none");
    $("#item13").css("display", "none");
    $("#item14").css("display", "none");
    $("#item15").css("display", "none");
    $("#item16").css("display", "none");
    $("#item22").css("display", "none");
    $("#item23").css("display", "none");
    $("#item24").css("display", "none");
    $("#item25").css("display", "none");
    $("#item26").css("display", "none");
    $("#item27").css("display", "none");
    $("#item28").css("display", "none");
    $("#item29").css("display", "none");
    $("#item30").css("display", "none");
    $("#item31").css("display", "none");
    $("#item32").css("display", "none");
    $("#item33").css("display", "none");
    $("#item34").css("display", "none");
    $("#item35").css("display", "none");
    $("#item36").css("display", "none");
    $("#item37").css("display", "none");
    $("#item38").css("display", "none");
    $("#item39").css("display", "none");
    $("#item40").css("display", "none");
    $("#item41").css("display", "none");
    $("#item42").css("display", "none");
    $("#item43").css("display", "none");
    $("#item44").css("display", "none");
    $("#item45").css("display", "none");
    $("#item46").css("display", "none");
    $("#item47").css("display", "none");
    $("#item48").css("display", "none");
    $("#item49").css("display", "none");
    $("#item50").css("display", "none");
    $("#item51").css("display", "none");
    $("#item52").css("display", "none");
    $("#item53").css("display", "none");
    $("#item54").css("display", "none");

    const unidad1 = document.getElementById("unidad1");
    const unidad2 = document.getElementById("unidad2");

    unidad1.addEventListener("click", () => {
      $("#item1").css("display", "block");
      $("#item17").css("display", "block");
      $("#item18").css("display", "block");
      $("#item19").css("display", "block");
      $("#item20").css("display", "block");
      $("#item21").css("display", "block");
      $("#item2").css("display", "none");
      $("#item3").css("display", "none");
      $("#item4").css("display", "none");
      $("#item5").css("display", "none");
      $("#item6").css("display", "none");
      $("#item7").css("display", "none");
      $("#item8").css("display", "none");
      $("#item9").css("display", "none");
      $("#item10").css("display", "none");
      $("#item11").css("display", "none");
      $("#item12").css("display", "none");
      $("#item13").css("display", "none");
      $("#item14").css("display", "none");
      $("#item15").css("display", "none");
      $("#item16").css("display", "none");
      $("#item22").css("display", "none");
      $("#item23").css("display", "none");
      $("#item24").css("display", "none");
      $("#item25").css("display", "none");
      $("#item26").css("display", "none");
      $("#item27").css("display", "none");
      $("#item28").css("display", "none");
      $("#item29").css("display", "none");
      $("#item30").css("display", "none");
      $("#item31").css("display", "none");
      $("#item32").css("display", "none");
      $("#item33").css("display", "none");
      $("#item34").css("display", "none");
      $("#item35").css("display", "none");
      $("#item36").css("display", "none");
      $("#item37").css("display", "none");
      $("#item38").css("display", "none");
      $("#item39").css("display", "none");
      $("#item40").css("display", "none");
      $("#item41").css("display", "none");
      $("#item42").css("display", "none");
      $("#item43").css("display", "none");
      $("#item44").css("display", "none");
      $("#item45").css("display", "none");
      $("#item46").css("display", "none");
      $("#item47").css("display", "none");
      $("#item48").css("display", "none");
      $("#item49").css("display", "none");
      $("#item50").css("display", "none");
      $("#item51").css("display", "none");
      $("#item52").css("display", "none");
      $("#item53").css("display", "none");
      $("#item54").css("display", "none");
    });

    unidad2.addEventListener("click", () => {
      $("#item1").css("display", "none");
      $("#item17").css("display", "none");
      $("#item18").css("display", "none");
      $("#item19").css("display", "none");
      $("#item20").css("display", "none");
      $("#item21").css("display", "none");
      $("#item2").css("display", "block");
      $("#item3").css("display", "block");
      $("#item4").css("display", "block");
      $("#item5").css("display", "block");
      $("#item6").css("display", "block");
      $("#item7").css("display", "block");
      $("#item8").css("display", "block");
      $("#item9").css("display", "block");
      $("#item10").css("display", "block");
      $("#item11").css("display", "block");
      $("#item12").css("display", "block");
      $("#item13").css("display", "block");
      $("#item14").css("display", "block");
      $("#item15").css("display", "block");
      $("#item16").css("display", "block");
      $("#item22").css("display", "block");
      $("#item23").css("display", "block");
      $("#item24").css("display", "block");
      $("#item25").css("display", "block");
      $("#item26").css("display", "block");
      $("#item27").css("display", "block");
      $("#item28").css("display", "block");
      $("#item29").css("display", "block");
      $("#item30").css("display", "block");
      $("#item31").css("display", "block");
      $("#item32").css("display", "block");
      $("#item33").css("display", "block");
      $("#item34").css("display", "block");
      $("#item35").css("display", "block");
      $("#item36").css("display", "block");
      $("#item37").css("display", "block");
      $("#item38").css("display", "block");
      $("#item39").css("display", "block");
      $("#item40").css("display", "block");
      $("#item41").css("display", "block");
      $("#item42").css("display", "block");
      $("#item43").css("display", "block");
      $("#item44").css("display", "block");
      $("#item45").css("display", "block");
      $("#item46").css("display", "block");
      $("#item47").css("display", "block");
      $("#item48").css("display", "block");
      $("#item49").css("display", "block");
      $("#item50").css("display", "block");
      $("#item51").css("display", "block");
      $("#item52").css("display", "block");
      $("#item53").css("display", "block");
      $("#item54").css("display", "block");
    });

    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    const item4 = document.getElementById("item4");
    const item5 = document.getElementById("item5");
    const item6 = document.getElementById("item6");
    const item7 = document.getElementById("item7");
    const item8 = document.getElementById("item8");
    const item9 = document.getElementById("item9");
    const item10 = document.getElementById("item10");
    const item11 = document.getElementById("item11");
    const item12 = document.getElementById("item12");
    const item13 = document.getElementById("item13");
    const item14 = document.getElementById("item14");
    const item15 = document.getElementById("item15");
    const item16 = document.getElementById("item16");
    const item17 = document.getElementById("item17");
    const item18 = document.getElementById("item18");
    const item19 = document.getElementById("item19");
    const item20 = document.getElementById("item20");
    const item21 = document.getElementById("item21");
    const item22 = document.getElementById("item22");
    const item23 = document.getElementById("item23");
    const item24 = document.getElementById("item24");
    const item25 = document.getElementById("item25");
    const item26 = document.getElementById("item26");
    const item27 = document.getElementById("item27");
    const item28 = document.getElementById("item28");
    const item29 = document.getElementById("item29");
    const item30 = document.getElementById("item30");
    const item31 = document.getElementById("item31");
    const item32 = document.getElementById("item32");
    const item33 = document.getElementById("item33");
    const item34 = document.getElementById("item34");
    const item35 = document.getElementById("item35");
    const item36 = document.getElementById("item36");
    const item37 = document.getElementById("item37");
    const item38 = document.getElementById("item38");
    const item39 = document.getElementById("item39");
    const item40 = document.getElementById("item40");
    const item41 = document.getElementById("item41");
    const item42 = document.getElementById("item42");
    const item43 = document.getElementById("item43");
    const item44 = document.getElementById("item44");
    const item45 = document.getElementById("item45");
    const item46 = document.getElementById("item46");
    const item47 = document.getElementById("item47");
    const item48 = document.getElementById("item48");
    const item49 = document.getElementById("item49");
    const item50 = document.getElementById("item50");
    const item51 = document.getElementById("item51");
    const item52 = document.getElementById("item52");
    const item53 = document.getElementById("item53");
    const item54 = document.getElementById("item54");
    const video = document.querySelector("video");

    item1.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[0];
      this.descNum = 0;
      this.resumenNum = 0;
    });
    item2.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[1];
      this.descNum = 1;
      this.resumenNum = 1;
    });
    item3.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[2];
      this.descNum = 2;
      this.resumenNum = 2;
    });
    item4.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[3];
      this.descNum = 3;
      this.resumenNum = 3;
    });
    item5.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[4];
      this.descNum = 4;
      this.resumenNum = 4;
    });
    item6.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[5];
      this.descNum = 5;
      this.resumenNum = 5;
    });
    item7.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[6];
      this.descNum = 6;
      this.resumenNum = 6;
    });
    item8.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[7];
      this.descNum = 7;
      this.resumenNum = 7;
    });
    item9.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[8];
      this.descNum = 8;
      this.resumenNum = 8;
    });
    item10.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[9];
      this.descNum = 9;
      this.resumenNum = 9;
    });
    item11.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[10];
      this.descNum = 10;
      this.resumenNum = 10;
    });
    item12.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[11];
      this.descNum = 11;
      this.resumenNum = 11;
    });
    item13.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[12];
      this.descNum = 12;
      this.resumenNum = 12;
    });
    item14.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[13];
      this.descNum = 13;
      this.resumenNum = 13;
    });
    item15.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[14];
      this.descNum = 14;
      this.resumenNum = 14;
    });
    item16.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[15];
      this.descNum = 15;
      this.resumenNum = 15;
    });
    item17.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[16];
      this.descNum = 16;
      this.resumenNum = 16;
    });
    item18.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[17];
      this.descNum = 17;
      this.resumenNum = 17;
    });
    item19.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[18];
      this.descNum = 18;
      this.resumenNum = 18;
    });
    item20.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[19];
      this.descNum = 19;
      this.resumenNum = 19;
    });
    item21.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[20];
      this.descNum = 20;
      this.resumenNum = 20;
    });
    item22.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[21];
      this.descNum = 21;
      this.resumenNum = 21;
    });
    item23.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[22];
      this.descNum = 22;
      this.resumenNum = 22;
    });
    item24.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[23];
      this.descNum = 23;
      this.resumenNum = 23;
    });
    item25.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[24];
      this.descNum = 24;
      this.resumenNum = 24;
    });
    item26.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[25];
      this.descNum = 25;
      this.resumenNum = 25;
    });
    item27.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[26];
      this.descNum = 26;
      this.resumenNum = 26;
    });
    item28.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[27];
      this.descNum = 27;
      this.resumenNum = 27;
    });
    item29.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[28];
      this.descNum = 28;
      this.resumenNum = 28;
    });
    item30.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[29];
      this.descNum = 29;
      this.resumenNum = 29;
    });
    item31.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[30];
      this.descNum = 30;
      this.resumenNum = 30;
    });
    item32.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[31];
      this.descNum = 31;
      this.resumenNum = 31;
    });
    item33.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[32];
      this.descNum = 32;
      this.resumenNum = 32;
    });
    item34.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[33];
      this.descNum = 33;
      this.resumenNum = 33;
    });
    item35.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[34];
      this.descNum = 34;
      this.resumenNum = 34;
    });
    item36.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[35];
      this.descNum = 35;
      this.resumenNum = 35;
    });
    item37.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[36];
      this.descNum = 36;
      this.resumenNum = 36;
    });
    item38.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[37];
      this.descNum = 37;
      this.resumenNum = 37;
    });
    item39.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[38];
      this.descNum = 38;
      this.resumenNum = 38;
    });
    item40.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[39];
      this.descNum = 39;
      this.resumenNum = 39;
    });
    item41.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[40];
      this.descNum = 40;
      this.resumenNum = 40;
    });
    item42.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[41];
      this.descNum = 41;
      this.resumenNum = 41;
    });
    item43.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[42];
      this.descNum = 42;
      this.resumenNum = 42;
    });
    item44.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[43];
      this.descNum = 43;
      this.resumenNum = 43;
    });
    item45.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[44];
      this.descNum = 44;
      this.resumenNum = 44;
    });
    item46.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[45];
      this.descNum = 45;
      this.resumenNum = 45;
    });
    item47.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[46];
      this.descNum = 46;
      this.resumenNum = 46;
    });
    item48.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[47];
      this.descNum = 47;
      this.resumenNum = 47;
    });
    item49.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[48];
      this.descNum = 48;
      this.resumenNum = 48;
    });
    item50.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[49];
      this.descNum = 49;
      this.resumenNum = 49;
    });
    item51.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[50];
      this.descNum = 50;
      this.resumenNum = 50;
    });
    item52.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[51];
      this.descNum = 51;
      this.resumenNum = 51;
    });
    item53.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[52];
      this.descNum = 52;
      this.resumenNum = 52;
    });
    item54.addEventListener("click", () => {
      video.pause();
      video.src = this.videoSrc[53];
      this.descNum = 53;
      this.resumenNum = 53;
    });
  }

  onRightClick() {
    return false;
  }
}
