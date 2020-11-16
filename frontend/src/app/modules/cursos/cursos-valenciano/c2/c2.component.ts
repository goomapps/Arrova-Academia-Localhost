import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component implements OnInit {
  title: string = 'Curs C2 de Valencià (JQCV, EOI, CIEAcova)';
  desc: string = 'El Curs de C2 de valencià té com a objectiu l’adquisició, per part dels nostres alumnes, d’un nivell de domini i d’ús de la llengua experimentat i avançat, que li permeta comunicar-se, entendre i produir textos, orals o escrits, pertanyents a qualsevol àmbit del domini lingüístic valencià i a qualsevol dels registres, a més de ser capaç, donat el moment, de de- mostrar els dits coneixements en la prova de certificació de qualsevol de les entitats certificadores (JQCV, CIEAcova o EOI).';
  usuarios: string = 'Usuarios que han cursado el curso: ';
  numusuarios: number = 6;
  creado: string = 'Creado por:';
  adrian: string = 'Adrián González';
  lengua: string = 'Idioma: ';
  lengua_valenciano: string = 'Valenciano';
  precio_mes: string = '35€/mes o 270€/curso';
  incluye: string = 'Este curso incluye:';
  videos: string = '10 vídeos por unidad';
  exercicis1: string = 'Exercicis per módul';
  exercicis2: string = 'Exercicis Simulacre Exámen';
  exercicis3: string = 'Exercicis EIO';
  dossier: string = 'Dossier Teoria';
  examen: string = 'Exámen cada 3 temes';
  practiques: string = 'Práctiques redacció';
  acceso: string = 'Acceso en dispositivos móviles';
  objetivos: string = 'Objectius del curs:';
  desc_objetivos: string =
    'Tal com s’estableix al Marc Comú Europeu de Referència per a les llengües (MCER), i d’acord amb allò establert per les esmentades entitats, el curs s’estructura d’acord amb les següents àrees de treball i de coneixements:';
  ce: string =
    'Comprensió Escrita (CE): l’objectiu és assolir la capacitat de comprensió i d’interpretació de qualsevol document escrit, des dels pertanyents a àmbits acadèmics i científics d’elevat nivell, fins a textos de complexi- tat molt menor, bé d’àmbit literari o no, tot tenint en compte les possi- bles variacions que aquest pot presentar (diafàsiques, diatòpiques o di- astràctiques), així com l’ús del llenguatge figurat, de les expressions col·loquials o idiomàtiques o, fins i tot, de les pressuposicions, els sobreentesos, les ambigüitats, els dobles sentits o l’ús de la ironia, el sarcasme o l’humor.';
  el: string =
    'Estructures Lingüístiques (EL): la finalitat és aconseguir un domini ex- haustiu, correcte i altament fiable de les estructures lingüístiques, per tal que hom siga capaç de demostrar el nivell d’usuari experimentat i avançat de la llengua, de manera que puga expressar-se amb total claredat i precisió tot emprant un ventall lèxic ric, variat i precís, de manera que haurà de ser capaç de minimitzar al màxim possible la comissió de qualsevol tipus d’errada. Aquest domini avançat de la llengua li ha de permetre adaptar el discurs a qualsevol situació comunicativa, així com reconéixer les variacions lingüístiques que presenten els textos segons l’àmbit d’ús i el registre que cal emprar.';
  eie: string =
    'Expressió i interacció escrites (EIE): el propòsit d’aquesta àrea serà abastar la capacitat de produir, per escrit, qualsevol tipus de text de manera clara i fluida, pertanga a l’àmbit que pertanga, en especial aquells que presenten major complexitat. A més, s’haurà de ser capaç de resumir el contingut de qualsevol tipus de text, de prendre apunts, i de reformular informacions a partir d’un altre text, tot ajustant-se a l’àm- bit i al registre requerit.';
  eio: string =
    'Expressió i interacció orals (EIO): el propòsit és que l’alumne puga ex- pressar-se de forma oral amb fluïdesa i precisió en qualsevol àmbit, en especial els més formals, amb un alt grau de correcció, tot emprant l’e- locució pròpia dels registres més formals, de manera que deu poder pro- duir qualsevol tipus de text ben estructurat de forma espontània i amb flexibilitat, o bé participar d’una conversa de forma fluida, tot fent ús d’un important ventall de vocabulari i d’expressions idiomàtiques i col- loquials.';
  contenidos: string = 'Continguts del curs:';
  feo: string = 'Fonètica, elocució i ortografia:';
  feo1: string =
    'Coneixement de l’elocució estàndard i dels casos excepcio- nals, tot evitant desplaçaments impropis de la síl·laba tòni- ca, així com dels diversos fenòmens de fonètica sintàctica que es produeixen. Coneixement de l’entonació i de la corba melòdica de l’oració per expressar mati-sos subtils de signi- ficat.';
  feo2: string =
    'Coneixement del vocalisme valencià i de l’alternança d’algu- nes vocals en pseudoderivats i cultismes. Coneixement de les discrepàncies amb altres llengües i de l’adaptació o no adap- tació dels estrangerismes a la nostra llengua.';
  feo3: string =
    'Domini de la normativa actual de l’accentuació i de la dière- si així com dels casos excepcionals i de major dificultat. Ús correcte de la normativa actualitzada del guionet i de les excepcions que l’afecten. El guionet en la separació de síl- labes i en préstecs adaptats i no adaptats, sím-bols i altres usos excepcionals.';
  feo4: string =
    'Ús correcte i adequat de l’apòstrof i de la contracció i de casos especials: l’apòstrof en sigles i acrònims.';
  feo5: string =
    'Escriptura i coneixement avançats de les oclusives i les la- biodentals: grups consonàntics cultes en inici de paraula i paraules amb dificultat; duplicacions gràfiques complexes. Ortografia de b/v, tenint en compte els pseudoderivats i al- tres casos amb dificultat.';
  feo6: string =
    'Ús correcte de les alveolars en cultismes i paraules d’espe- cial complexitat ortogràfica i en paraules compostes i prefi- xades.';
  feo7: string =
    'Escriptura adequada de les consonants palatals en qualsevol cas, incloent els de major dificultat ortogràfica, incloent les paraules adaptades d’altres llengües i els usos excepcio- nals.';
  feo8: string =
    'Domini avançat de la normativa de les consonants laterals, nasals, ròtiques i de la h, de les geminacions d’aquestes, dels homòfons i dels parònims que presenten i dels casos d’especial complexitat ortogràfica';
  feo9: string =
    'Coneixement i ús correcte de les majúscules i les minúscules, dels tipus de lletra, dels signes de puntuació, de les abre- viatures, les sigles i els acrònims.';
  morfosintaxi: string = 'Morfosintaxi:';
  morfosintaxi1: string =
    'La flexió nominal: usos contrastius respecte del castellà; substantius amb doble forma i amb significat diferent; plural dels antropònims; posició i concordança de l’adjectiu; adjec- tius determinats per substantius; graus de l’adjectiu.';
  morfosintaxi2: string =
    'Ús avançat i experimentat dels determinats: ús de l’article personal; ús i abús de l’article; coneixement avançat dels possessius.';
  morfosintaxi3: string =
    'Els pronoms: coneixement i ús avançat de la normativa i les funcions dels pronoms personals, febles, relatius, interroga- tius i exclamatius: casos particulars, excepcionals i d’alt domini lingüístic.';
  morfosintaxi4: string =
    'Quantificadors: coneixement i ús dels diferents tipus de nu- merals; usos i funcions dels quantitatius, i dels indefinits, incloent-hi les interferències del castellà i dels casos d’especial dificultat o molt formals.';
  morfosintaxi5: string =
    'Preposicions: precisió en l’ús i funció de les diferents pre- posicions, incloent-hi els casos excepcionals i de major di- ficultat: solucions als usos impropis i usos genuïns en la fraseologia.';
  morfosintaxi6: string =
    'Adverbis: usos de la doble negació, la negació expletiva i de l’adverbi pas. Ús correcte dels adverbis i les locucions ad- verbials i la coordinació d’aquests.';
  morfosintaxi7: string =
    'Propietat en l’ús de les conjuncions i d’altres connectors.';
  morfosintaxi8: string =
    'Ús correcte i adequat dels verbs tot tenint en compte la di- ferent naturalesa d’aquests. Domini de la morfologia verbal, incloent-hi les formes que presenten major dificultat.';
  ls: string = 'Lèxics i semàntica:';
  ls1: string =
    'Camps de vocabulari: l’habitatge, la construcció i les rela- cions en aquests àmbits; les activitats professionals i els principals sectors productius; l’alimentació i la restaura- ció; activitats culturals i de lleure; economia nacional i internacional; l’educació; la indústria del turisme; els mit- jans de comunicació; la salut i l’assistència sanitària i so- cial; el medi ambient i la sostenibilitat; les arts: el cine, el teatre, les arts plàstiques, etc., i la gestió cultural; les tecnologies de la comunicació; la societat i el govern: els problemes socials.';
  ls2: string = 'Coneixement dels procediments de creació lèxica.';
  ls3: string =
    'Ús d’expressions idiomàtiques i col·loquials i del llenguatge figurat.';
  ls4: string =
    'Coneixement de la precisió lèxica i de les principals inter-ferències lèxiques.';
  ls5: string =
    'Ús de mecanismes de cohesió textual i de les reformulacions i les nominalitzacions com a principals elements de relació semàntica.';
  ls6: string = 'Coneixement de les paraules tabú, eufemismes i disfemismes.';
  ls7: string =
    'Coneixement dels diferents registres i varietats lingüísti-ques.';
  ls8: string =
    'Ús de la semàntica pragmàtica: substitucions, pressuposi-cions, sobreentesos, interferències, ironia.';
  boletin_informativo: string = 'Butlletí Informatiu del Curs C2 de Valencià';
  hoja_inscripcion: string = 'Full d´Inscripció';
  proteccion_datos: string = 'Protecció de Dades';

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
