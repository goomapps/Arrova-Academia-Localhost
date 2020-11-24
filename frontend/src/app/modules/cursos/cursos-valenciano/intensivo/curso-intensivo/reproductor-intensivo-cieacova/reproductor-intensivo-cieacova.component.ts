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
  unidadNum: number;

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
    ];
    this.resumen = ["", "", "", "", "", "", "", "", "", "", "", ""];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $("#dropmorf").css("display", "none");
    $("#item1").hover(
      () => {
        $("#dropmorf").show("slow");
      },
      () => {
        $("#dropmorf").css("display", "none");
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

    const unidad1 = document.getElementById("unidad1");
    const unidad2 = document.getElementById("unidad2");

    unidad1.addEventListener("click", () => {
      $("#item1").css("display", "block");
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
    });

    unidad2.addEventListener("click", () => {
      $("#item1").css("display", "none");
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
  }

  onRightClick() {
    return false;
  }
}
