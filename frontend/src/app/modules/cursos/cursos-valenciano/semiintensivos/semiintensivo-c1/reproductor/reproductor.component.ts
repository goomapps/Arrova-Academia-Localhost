import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-reproductor",
  templateUrl: "./reproductor.component.html",
  styleUrls: ["./reproductor.component.scss"],
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
    this.videoSrc = [
      "",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Sessio1_1%EF%80%A24.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Sessio1_2%EF%80%A24.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Sessio1_3%EF%80%A24.mp4",
      "https://arrovacademia.s3.eu-west-2.amazonaws.com/videos/C1_Sessio1_4%EF%80%A24.mp4",
    ];
    this.desc = [""];
    this.resumen = [""];
    this.descNum = 0;
    this.resumenNum = 0;
    this.videoSrcNum = 0;
  }

  ngOnInit(): void {
    $("#dropmorfosintaxis").css("display", "none");
    $("#item1").hover(
      () => {
        $("#dropmorfosintaxis").show("slow");
      },
      () => {
        $("#dropmorfosintaxis").css("display", "none");
      }
    );

    const unidad1 = document.getElementById("unidad1");
    const unidad2 = document.getElementById("unidad2");

    unidad1.addEventListener("click", () => {
      $("#item1").css("display", "block");
      $("#item2").css("display", "none");
      $("#item3").css("display", "none");
      $("#item4").css("display", "none");
      $("#item5").css("display", "none");
    });

    unidad2.addEventListener("click", () => {
      $("#item1").css("display", "none");
      $("#item2").css("display", "block");
      $("#item3").css("display", "block");
      $("#item4").css("display", "block");
      $("#item5").css("display", "block");
    });

    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    const item4 = document.getElementById("item4");
    const item5 = document.getElementById("item5");
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
  }

  onRightClick() {
    return false;
  }
}
