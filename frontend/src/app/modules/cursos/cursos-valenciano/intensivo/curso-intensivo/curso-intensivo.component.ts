import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../auth/services/user.service";

@Component({
  selector: 'app-curso-intensivo',
  templateUrl: './curso-intensivo.component.html',
  styleUrls: ['./curso-intensivo.component.scss']
})
export class CursoIntensivoComponent implements OnInit {
  title: string = 'Curs C1 de Valencià (JQCV, EOI, CIEAcova)';
  desc: string = 'El curs intensiu de C1 de preparació per a les proves de certificació de gener de CIEAcova té com a objectiu l`assoliment i perfeccionament del nivell de suficiència en un espai de temps molt breu. En aquest cas el treball consta de dos àrees diferents: d`una banda, les classes per videoconferència, en què es treballarà principalment la morfosintaxi i el lèxic i semàntica; de l`altra, l`accés a la plataforma web on tindreu accés als diferents dossiers de teoria i d`activitats, així com al vídeos explicatius de les àrees d`expressió i interacció, tant oral com escrita, a més de a les activitats per posar-ho en pràctica. Farem espacial èmfasi en la preparació concreta de l`examen, de manera que també trobareu exercicis segons el model de l`examen de CIEAcova, així com redaccions i exercicis orals d`altres convocatòries, i un simulacre d`examen final.';
  usuarios: string = 'Usuarios que han cursado o están cursando el curso: ';
  numusuarios: number = 8;
  creado: string = 'Creado por:';
  adrian: string = 'Adrián González';
  lengua: string = 'Idioma: ';
  lengua_valenciano: string = 'Valenciano';
  precio_mes: string = '115€/mes';
  incluye: string = 'Este curs inclou:';
  videos: string = '18 sessions de dues hores';
  exercicis1: string = 'Activitats de reforç';
  exercicis2: string = 'Pràctiques d`expressió i interacció escrita';
  exercicis3: string = 'Exercicis d`expressió i interacció Oral';
  dossier: string = 'Dossier de teoria';
  examen: string = 'Activitats model d`examen';
  practiques: string = 'Simulacre d`examen';
  acceso: string = 'Accés amb dispositus mòbils';
  objetivos: string = 'Objectius del curs:';
  desc_objetivos: string =
    'D’acord amb les entitats certificadores de coneixements de valencià, segons s’estableix al Marc Comú Europeu de Referència per a les llengües (MCER), el curs s’organitza en les següents àrees de treball i de coneixements:';
  ce: string =
    'Comprensió Escrita (CE): l’objectiu és assolir els coneixements i la capacitat de llegir, interpretar i entendre textos de certa extensió i complexitat pertanyents a les diferents tipologies textuals i àmbits d’ús de la llengua, fent especial èmfasi en els textos de marcat caràcter subjectiu, de manera que s’incidirà en l’aprenentatge i comprensió dels elements textuals i contextuals, sinó també en aquells que subjauen al text.';
  el: string =
    'Estructures Lingüístiques (EL): aquesta àrea constitueix el gruix del curs, l’objectiu principal de la qual és l’adquisició de la normativa gramatical, ortogràfica i fonètica bàsica establerta per l’AVL, així com l’ús estàndard del lèxic i de la fraseologia, lèxic que se sabrà emprar amb propietat i precisió. Així doncs, es tracta de reduir la producció d’errades i d’interferències al màxim possible tant en els registres orals com escrits per tal de demostrar un alt nivell de domini lingüístic.';
  eie: string =
    'Expressió i interacció escrites (EIE): així com l’alumne, a l’acabar aquest curs, ha de ser capaç de llegir i entendre qualsevol text, siga de la tipologia que siga, també haurà de ser capaç de produir-los, tot tenint en compte els diferents àmbits d’ús i registres de la llengua, tot mostrant un alt nivell de domini lingüístic. Així doncs, l’objectiu és que puga desenvolupar qualsevol text escrit de forma lliure o bé mitjançant una tasca de mediació, tot respectant les diferents tipologies i qüestions formals.';
  eio: string =
    'Expressió i interacció orals (EIO): d’altra banda, també haurà de ser capaç d’expressar-se oralment de forma clara, precisa i correcta, demostrant un alt domini lingüístic i evitant qualsevol tipus d’interferència, bé lèxica, bé gramatical, mostrant, a més, gran capacitat d’adequació a l’àmbit d’ús corresponent. Així doncs, es pretén que siga capaç de desenvolupar un monòleg sostingut o una discussió amb una altra persona de forma adequada i correcta.';
  contenidos: string = 'Continguts del curs:';
  feo: string = 'Fonètica, elocució i ortografia:';
  feo1: string =
    'Pronúncia estàndard de les vocals i les consonats valencianes segons la normativa actual de l’AVL, així com coneixement dels casos generals de vocalisme i consonantisme de la llengua. Coneixement dels fenòmens de fonètica sintàctica i dels fenòmens de geminació.';
  feo2: string =
    'Coneixement de la normativa estàndard d’escriptura de les vocals, fenòmens de contrast vocàlic amb altres llengües i ús de paraules patrimonials i dels pseudoderivats d’aquestes. Correcta separació sil·làbica, tot tenint en compte els diftongs, dígrafs i hiats.';
  feo3: string =
    'Domini de la normativa i de l’ús de l’accent i de la dièresi, així com dels casos especials (accentuació diacrítica, casos excepcionals d’ús de la dièresi, contrastos respecte d’altres llengües). Ús correcte del guionet.';
  feo4: string =
    'Ús correcte de l’apòstrof, tot tenint en compte els casos especials i les excepcions que l’afecten,  i de les contraccions entre les preposicions i els articles.';
  feo5: string =
    'Escriptura i ús avançat de les consonants oclusives. Coneixement i domini dels homòfons i parònims. Escriptura de b/v.';
  feo6: string =
    'Escriptura i ús avançat de les consonants alveolars. Distinció dels diferents homòfons i parònims amb sons alveolars.';
  feo7: string =
    'Coneixement avançat de les consonants palatals, tot evitant confusions amb altres llengües.';
  feo8: string =
    'Domini avançat de les consonants nasals i laterals, ús que discrepa respecte d’altres llengües i coneixement dels homòfons i parònims nasals.';
  feo9: string =
    'Coneixement de l’ús de les consonants ròtiques i dels usos contrastius amb altres llengües. Ús i escriptura de la lletra h en valencià.';
  feo10: string =
    'Escriptura de majúscules i minúscules en valencià, domini de l’ús dels signes de puntuació, així com de les abreviacions, sigles, acrònims i símbols d’ús més freqüent.';
  morfosintaxi: string = 'Morfosintaxi:';
  morfosintaxi1: string =
    'La flexió nominal: coneixement de la flexió de gènere i nombre del substantiu i de l’adjectiu en valencià. La concordança. Casos especials. Casos contrastius respecte d’altres llengües. L’ordre de col·locació de l’adjectiu i graus d’aquest.';
  morfosintaxi2: string =
    'Determinants: ús avançat dels determinants valencià. L’article neutre, emfàtic i exclamatiu. Ús i abús dels possessius. Ús d’aquests referit a éssers inanimats.';
  morfosintaxi3: string =
    'Pronoms: ús avançat dels pronoms febles: valor sintàctic, substitució, valor emfàtic, pleonasme. Combinacions binàries, trinàries i quaternàries. Ús correcte dels pronoms relatius: tipologia i funcions. Pronom relatiu possessiu. Precisió en l’ús dels pronoms interrogatius i exclamatius.';
  morfosintaxi4: string =
    'Quantificadors: coneixement i ús dels diferents numerals (cardinals, ordinals, partitius, multiplicatius, col·lectius); casos especials. Domini avançat dels quantitatius i dels indefinits.';
  morfosintaxi5: string =
    'Preposicions: ús adequat de les preposicions i contrast amb altres llengües. Caiguda de la preposició.';
  morfosintaxi6: string =
    'Adverbis: ús avançat dels adverbis, en especial dels que expressen probabilitat. Coordinació dels adverbis acabats en -ment.';
  morfosintaxi7: string =
    'Conjuncions i connectors: coneixement avançat de l’ús de les conjuncions i dels connectors: tipologia, valor, significat.';
  morfosintaxi8: string =
    'Verbs: coneixement avançat de la morfologia verbal valenciana, tant regular com irregular. Contrastos amb altres llengües. La incoació. Ús adequat de les perífrasis verbals. Valor i significats dels verbs ser i estar. Les formes no personals: ús correctes i valors incorrectes.';
  ls: string = 'Lèxics i semàntica:';
  ls1: string =
    'Camps de vocabulari: L’habitatge i la construcció. Les activitats professionals i els sectors productius bàsics. L’alimentació, la dieta i la salut. Les activitats de lleure i els esports: els llocs i els equipaments. Les activitats comercials i transaccionals. L’educació. El turisme. Els mitjans de comunicació. Les activitats culturals. El medi ambient i el clima. La ciència i la tecnologia.  Les tecnologies de la comunicació. Frases fetes, locucions i refranys valencians.';
  ls2: string =
    'Regles de derivació, parasíntesi i composició. Usos contrastius amb altres llengües.';
  ls3: string =
    'Precisió lèxica i interferències lèxiques: coneixement dels principals barbarismes, manlleus, neologismes i vulgarismes.';
  ls4: string =
    'Relacions semàntiques: coneixement dels principals fenòmens (polisèmia, sinonímia i geosinònims, falsos sinònims, antonímia. Ús de la referència lèxica i del sentit.';
  ls5: string =
    'Usos figurats del lèxics: comparació, analogia, metàfora, metonímia, sinècdoque… Onomatopeies.';
  boletin_informativo: string = 'Butlletí Informatiu del Curs C1 de Valencià';
  hoja_inscripcion: string = 'Full d´Inscripció';
  proteccion_datos: string = 'Protecció de Dades';

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
