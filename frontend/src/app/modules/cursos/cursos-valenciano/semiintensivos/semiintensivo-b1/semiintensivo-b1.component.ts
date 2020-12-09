import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../auth/services/user.service';

@Component({
  selector: 'app-semiintensivo-b1',
  templateUrl: './semiintensivo-b1.component.html',
  styleUrls: ['./semiintensivo-b1.component.scss']
})
export class SemiintensivoB1Component implements OnInit {
  title: string = 'Curs Semi Intensiu B1 de Valencià';
  desc: string = 'El curs de B1 de valencià té com a objectiu principal l’adquisició de coneixements de valencià per part de l’alumnat perquè aquest siga capaç d’usar la llengua, tant oralment com escrita, en les situacions pròpies de la vida quotidiana, així com de demostrar els dits coneixements en  les proves de certificació que permetran l’obtenció del títol de nivell  elemental en coneixements de valencià mitjançant qualsevol de les enti tats certificadores (JQCV, EOI o CIEAcova).';
  usuarios: string = 'Usuarios que han cursado o están cursando el curso: ';
  numusuarios: number = 0;
  creado: string = 'Creado por: ';
  adrian: string = 'Adrián González';
  lengua: string = 'Idioma: ';
  lengua_valenciano: string = 'Valenciano';
  precio_mes: string = '55€/mes o 300€/curso';
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
    'D’acord amb les entitats certificadores de coneixements de valencià, se gons s’estableix al Marc Comú Europeu de Referència per a les llengües  (MCER), el curs s’organitza en les següents àrees de treball i de coneixements:';
  co: string = 'Comprensió Oral (CO): la finalitat principal del curs és que els nostres  alumnes siguen capaços d’entendre i desenvolupar-se en qualsevol àmbit de  la vida quotidiana, de manera que poden comprendre la informació que es  transmet en qualsevol text oral relacionat amb aquest àmbit d’ús.';
  ce: string =
    'Comprensió Escrita (CE): d’altra banda, un altre objectiu és assolir la  capacitat de comprendre la majoria dels textos escrits, sempre que per tanguen a un àmbit lingüístic o situació comunicativa coneguda, propis de  l’esfera personal i privada.';
  eie: string =
    'Expressió i interacció escrites (EIE): Expressió i interacció escrites (EIE): a més, l’alumnat no sols ha de ser  capaç de comprendre informació, sinó que també ha de poder elaborar in formació relacionada amb l’esfera personal i privada, així com textos  senzills d’extensió breu propis d’altres àmbits d’ús.';
  eio: string =
    'Expressió i interacció orals (EIO): Expressió i interacció orals (EIO): per últim, l’alumne també ha de poder  interactuar de forma oral amb altres persones en contextos quotidians i  de l’esfera familiar o personal, de manera que pot desenvolupar textos  orals senzills d’extensió breu propis d’àmbits lingüístics coneguts.';
  contenidos: string = 'Continguts del curs:';
  feo: string = 'Producció dels fenòmens d’elisió vocàlica bàsics i  discriminació dels sons consonàntics (consonants, grups  consonàntics i geminacions) propis del valencià, a més de  produir els emmudiments consonàntics més freqüents.  Coneixement de l’entonació emfàtica en interrogacions i  exclamacions.';
  feo1: string = 'Coneixement de les lletres simples i modificades, dels  dígrafs i de les geminacions més comunes.';
  feo2: string = 'Distinció entre sí·laba tònica i àtona i classificació de  paraules segons la posició de la síl·laba tònica. Coneixement  dels fenòmens del diftong i de l’hiat. Correcta separació  sil·làbica. Pronúncia correcta dels verbs acabats en -iar.';
  feo3: string = 'Coneixement dels principals casos de vocalisme i distinció de  les vocals obertes de les tancades.';
  feo4: string = 'Ús de la normativa bàsica de l’accentuació, de la dièresi i  del guionet.';
  feo5: string = 'Coneixement de les regles generals d’apostrofació i de  contracció, tant amb l’article definit com amb la preposició  de i els pronoms febles.';
  feo6: string = 'Domini de l’alternança ortogràfica de les consonants  oclusives i labiodentals a final de paraula en la flexió i  derivació de substantius i adjectius. Ús de mots acabats en  consonant. Distinció dels grups cu-/qu-, -xc-/-cc-.  Escriptura amb v de l’imperfet d’indicatiu dels verbs de la  primera conjugació.';
  feo7: string = 'Distinció ortogràfica entre c/ç en la flexió de substantius,  adjectius i verbs, i coneixement de mots acabats en -ança,  -ença. Escriptura de x o cc per representar els sons [ks] o  [gz]. Distinció entre la terminació -essa i -esa. Coneixement  de la flexió dels gentilicis acabats en -és, i dels mots  acabats en vocal + s. Escriptura del grup -sc-.';
  feo8: string = 'Coneixement de les consonants palatals en les paraules més  comunes, així com de les principals excepcions a la norma  general, i dels canvis ortogràfics en la flexió. Ús i  pronúncia dels grups: consonant + x, tx entre vocals i x- a  principi de paraula. Coneixement de la derivació de mots  acabats en -tx o -ig.';
  feo9: string = 'Ús i pronúncia de la ela geminada i dels grups tl/tll en  paraules habituals del vocabulari general. Distinció de  l’escriptura i pronúncia de m davant de -b, -p, -m.  Escriptura i pronúncia de -ny a final de mot. Escriptura i  pronúncia de r a principi i a final de mot, així com després  de consonant. Ús i pronúncia de la h intercalada, així com en  el verb haver i derivats. ';
  feo10: string = 'Domini de la normativa bàsica d’escriptura de les majúscules  i de les minúscules.';
  feo11: string = 'Ús del punt i coma, dels dos punts i dels punts suspensius.  Ús dels parèntesis.';
  feo12: string = 'Coneixement de la flexió de gènere i nombre del substantiu i  de l’adjectiu, tant regulars com irregulars i invariables.  Concordança entre determinant, substantiu i adjectiu, i graus  d’aquest. Ús dels adjectius en descripcions físiques i  d’estats d’ànim.';
  feo13: string = 'Coneixement de la morfologia de l’article definit i  indefinit. Ús de les contraccions i de l’apòstrof amb els  articles. Distinció formal dels demostratius simples i  reforçats. Coneixement de les funcions bàsiques. Coneixement  dels diferents tipus de possessius i usos d’aquests. ';
  feo14: string = 'Introducció als pronoms: morfologia i col·locació. Ús dels  pronoms febles en funció de CI i de CD. Combinacions binàries  (CI + CD). Ús dels pronoms interrogatius i distinció entre  quant i quan.';
  feo15: string = 'Ús dels numerals cardinals i ordinals. Coneixement dels  quantitatius i dels indefinits variables i invariables. Ús de  bastant i quant, i distinció de res, gens i cap.';
  feo16: string = 'Ús de les preposicions simples. Preposicions i locucions de  mitjà o instrument, de tema, de causa, de relació. La  preposició a davant de topònims i mots com classe, casa…  Solucions als usos impropis de les preposicions.';
  feo17: string = 'Domini dels adverbis d’afirmació i de negació. Formació dels  adverbis acabats en -ment. Construccions comparatives.';
  feo18: string = 'Coneixement de les conjuncions i locucions adversatives i  concessives, consecutives, temporals i condicionals.';
  feo19: string = 'Ús dels verbs regulars i dels principals irregulars.  Coneixement dels verbs de règim preposicional. Domini dels  modes verbals. Diferències entre ser i estar. Ús de les  perífrasis verbals d’obligació i de probabilitat.';
  feo20: string = 'Les relacions familiars i de parentiu. L’habitatge. El  treball. El camp i la ciutat.';
  feo21: string = 'Els vehicles i el trànsit. Els transports. Els viatges';
  feo22: string = 'Les plantes i els animals. El paisatge. L’oratge.';
  feo23: string = 'Els jocs i els esports.';
  feo24: string = 'Els esdeveniments actuals.';
  feo25: string = 'Els temes culturals: la música, el cinema, etc.';
  feo26: string = 'Els diners i els negocis. La tecnologia.';
  feo27: string = 'Lèxic per a descriure persones, objectes, caràcter, estats  d’ànim, etc.';
  feo28: string = 'Creació lèxica: derivació (aspectes generals; principals  prefixos i afixos); regles generals de composició. ';
  feo29: string = 'Locucions i frases fetes més usuals.';
  feo30: string = 'Precisió lèxica i genuïnitat en el vocabulari usual.';
  feo31: string = 'Alternatives als barbarismes més usuals. ';
  feo32: string = 'Relacions de sinonímia, antonímia, hiperonímia i hiponímia  del vocabulari usual.';
  boletin_informativo: string = 'Butlletí Informatiu del Curs Semi Intensiu B1 de Valencià';
  hoja_inscripcion: string = 'Full d´Inscripció';
  proteccion_datos: string = 'Protecció de Dades';

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }

}
