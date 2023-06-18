---
layout: default
title: Reťazce
nav_order: 6
---

# Ⅴ. Reťazce a zoznamy

**Zoznam** (tiež aj Pole) je množina údajov zaznamenaných spolu pod jedným menom. Každý údaj poľa sa nazýva *prvok* a poradie jeho pozície sa nazýva *index*. **Reťazce** sa správajú podobne ako zoznamy, ale ich prvkami sú jednotlivé znaky.


## 1. Vymeň písmeno
Niekto ti posiela správy s diakritikou, ale po ceste sa vždy prekrúti jedno písmeno. Texty obsahujú aj pekné básne, ktoré si chceš vytlačiť a pripnúť na nástenku. Pokazený znak však kazí celkový dojem z diela. Zameň zadané chybné písmeno v celom reťazci.

```
Správa: ________
Za chybné písmeno: ____
Vymeň: ____

Opravené!
__________
```


## 2. Cenzúra
Prišla tvrdá cenzúra s nariadením, že nikto už nesmie vidieť žiadnu samohlásku. Nahraď každý prečin vo vstupnom texte ľubovoľným iným špeciálnym znakom.

```
Správa: Ja som tvoj kamarat
Samohlásku nahraď: *

Cenzurované: J* s*m tv*j k*m*r*t
```


## 3. Počítanie slov
Do redakcie miestnych novín chodia denno denne články, vtipy, poviedky a príbehy zo života od verných čitateľov. Aby mohli byť uverejnené potrebujú sa zmestiť do vyhradeného priestoru. Vypíš počet znakov, slov, viet a normostrán (*=1800 znakov*) pre rýchlejšie spracovanie textov.

```
Článok: _________

Znaky: ___
Slová: ___
Vety: ___
Normostrany: ____
```


## 4. Najdlhšie slovo
Hra staršia ako ľudstvo samo. Debatný spolok usporiadal súťaž o nájdenie najdlhšieho slova, ktoré sa kedy vyskytlo v historických prejavoch. Zaujali ťa odmeny, ale nechce sa ti prehrabávať knižnicou starých záznamníkov a preto si prácu uľahčíš. Nájdi najdlhšie slovo v reťazci.

```
Rečnícky prejav: ________

Najdlhšie slovo v ňom: _____
```

## 5. Frekvencia písmen
Dlho do noci čítaš časopisy o umelej inteligencii a fascinuje ťa jej schopnosť rozprávať sa s človekom. Na vytvorenie viet na danú tému potrebuje mať prehľad o percentuálnom výskyte hlások v texte. Spočítaj a vypíš zoznam frekvencie písmen v reťazci.

```
Článok: _______

A: 23.2 %
B: 11.5 %
C: 8.9 %
...
Z: 0.3 %
```


## 6. Histogram
Pri svojom predchádzajúceho pokuse s početnosťou písmen si všimneš, že každé ďaľšie písmeno v zozname sa oveľa menej objavuje ako očakávaš. Vykresli hviezdičky namiesto počtu percent a over si tak svoje pozorovanie graficky.

```
Článok: _______

A: ****
E: *******
I: ****
...
X: *
```


## 7. Nákupný košík
Pri veľkých nákupoch sa často zíde prehľadný zoznam s tým, čo doma treba. Pýtaj si položky s ich cenami až kým sa nerozhodneš, že máš spísané všetko. Zobraz prehľadnú orámovanú tabuľku s údajmi podobne ako na pokladničom bločku (názov tovaru, DPH tovaru, cena tovaru s DPH, celková suma na zaplatenie).

```
   Čo kúpiť?: ______
   Cena ______?: _______
   ....

   +----------+--------+--------------+
   | Tovar    |  DPH   |  Cena s DPH  |
   +----------+--------+--------------+
   | Chlieb   |  0,20€ |      0,98 €  |
   +----------+--------+--------------+
   |    ...   |  ...   |     ...      |
   +----------+--------+--------------+
   | CELKOM   |  0,20€ |      0,98 €  |
   +----------+--------+--------------+
```

## 8. Akronym
SMS-ky rapídne zdraželi a napadlo ti, že bude lepšie posielať slovné spojenia ako skratky. Zo zadaných slov vytvor akronym. Vezmi začiatočné písmená každého slova a vytvor sktatku, ktorá bude pozostávať len z týchto písmen.

```
Slovné spojenie: Slovenské národné divadlo

Skratka: SND
```


## 9. Veľa opakovania
Roboti rozvážajúci pizzu po meste si zaznamenávajú zmenu smeru pre postupné vylepšovanie trás na lokality k častým zákazníkom. Keďže sa firme darí, prešli roboti už toľko, že sa im všetky záznamy o ich cestách nezmestia do pamäti. Všimneš si, že si značia každý krok a to vedie k častému opakovaniu. Nahraď postupnosť za sebou idúceho písmena, počtom výskytu a písmenom.

*Pozri: [Wikipedia - Run-length encoding](https://cs.wikipedia.org/wiki/Run-length_encoding)*

```
Cesta robota: NNNNNNSSSSSSSSSSSWWWWNNN

Skomprimované: 6N11S4W3N
```

## Vzorové riešenia:
[Riešenia k 5. kapitole](/coding/beginner/solutions/5-chapter.html)
