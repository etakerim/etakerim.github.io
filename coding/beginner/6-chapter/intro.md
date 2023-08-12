---
layout: default
title: Súbory
nav_order: 7
---

# Ⅵ. Súbory


**Súbor** je zoskupením súvisiacich údajov, ktoré sú uložené na disku počítača. Oproti načítavaniu vstupu z klávesnice majú výhodu hlavne pri spracovaní a uchovaní veľkého množstva dát. Súbory sa dajú: *vytvoriť* / *vymazať*, *otvoriť / zatvoriť*, *čítať* / *zapisovať*. Podľa typu uchovávaných údajov (označované *príponou*)  súbory rozdeľujeme na:

* **Textové súbory** - .txt, .csv, .html, .py

* **Obrazové súbory** - .bmp, .png, .jpg, .gif, .svg, .pdf

* **Zvukové súbory** - .wav, .mp3, .midi

* **Video súbory** - .avi, .mp4, .mkv

* **Spustiteľné súbory** - .exe, .elf

V tejto kapitole budeme pre jednoduchosť pracovať s textovými súbormi:




## 1. Prepisovanie
Pri prepisovaní dlhých textov na vstup programu sa často mýliš a príde ti to zbytočne zdĺhavé. Načítaj články u zadaní z predchádajúcej kapitoly zo súboru, ktorého názov si na začiatku vypýtaš. Pri úlohe "veľa opakovania" ulož záznam o ceste robota do nového súboru.



## 2. Turistika
Na víkend sa črtajú ideálne podmienky na horskú turistiku. Nenecháš nič na náhodu a pripravíš si detailný plán s výškovým profilom trasy. Na každých desať metrov trasy si do súboru poznačíš aktuálnu nadmorskú výšku. Zisti celkové stúpanie a klesanie počas celého výletu spolu s najvyššou a najnižšou nadmorskou výškou. Vypíš aj celkovú dĺžku túry v kilometroch a trvanie prechodu horami v hodinách.

* *Vzorový obsah súboru (trasa.txt)*

  ```
  348
  351
  362
  369
  376
  379
  384
  395
  401
  396
  383
  381
  367
  361
  ```

* *Turistika*:

  ```
  Výškový profil trasy je v súbore: ______

  Trasa: 0.140 km - 0 h 21 min
  Stúpanie: 53 m
  Klesanie: 40 m
  Najnižšie miesto trasy: 361 m
  Najvyššie miesto trasy: 401 m
  ```



## 3. Vedomostný kvíz
Bifľovanie ti vôbec nepríde ako zábava. Keby existoval spôsob, ktorým si opakovanie poznatkov spríjemniť. Včera si zo smútku nad vidinou takto premárneho času pri jedení čokolády a čipsov pozeral kvízovú reláciu. Prišlo ti to neuveriteľne poučné. Polož náhodnú otázku s možnostami zo súboru kvízových otázok a bodovo ohodnoť správnu odpoveď. Všetky kvízové otázky s možnosťami sa však nezmestia do pamäti programu, preto vždy vyber náhodnu otázku priamo zo súboru.

- *Obsah súboru (kviz.txt):*

  ```
  Otázka: V ktorom roku sa začala Francúzska revolúcia?
  A: 1763
  B: 1813
  C: 1789
  D: 1654
  Odpoveď: C
  Otázka: Al₂O₃ je?
  A: hydroxid vápenatý
  B: oxid hlinitý
  C: hydroxid sodný
  Odpoveď: B
  ```

- *Kvíz:*

  ```
  Súbor s kvízovými otázkami: kviz.txt
  Kvízové otázky pripravené.
  Ideme na to!

  V ktorom roku sa začala Francúzska revolúcia?
  A: 1763
  B: 1813
  C: 1789
  D: 1654
  Aká je správna odpoveď?: C
  Správne! Máš 1 bodov. / Nabudúce si to lepšie premysli. Skúsime niečo iné.
  ```



## 4. Narodeniny
Darčeky k narodeninám zvykneš kupovať na poslednú chvílu. Potrebuješ mať prehľad aspoň na mesiac dopredu, kto bude mať narodeniny, aby si stihol vybrať niečo výnimočné. Zo súboru načítaj ľudí, ktorí majú sviatok v požadovaný mesiac v roku.

* *Obsah súboru (narodeniny.csv):*

  ```
  Jožko Mrkvička, 15.3.2002
  Katka Krátka, 2.7.1993
  Martinko Klingáč, 12.11.1995
  Iveta Novotná, 27.2.2001
  ...
  ```

* *Oslavy:*

  ```
  Zobraz narodeniny pre mesiac v roku: 3.2019

  Narodeniny: Marec 2019
  15.3. - Jožko Mrkvička - 17 rokov
  ```



## 5. Pripomienky v kalendári
Po čase zistíš, že jednoduchšie by bolo, ak by sa ti týždeň pred kamarátovými narodeninami objavila pripomienka v tvojom osobnom elektronickom kalendári. Máš veľa kontaktov, nechceš ich však všetky prepisovať ručne. Zistiš, že zoznam narodenín môžeš do kalendárovej aplikácie vložiť vo formáte *iCalendar (.ics)*. Preveď súbor s menami a dátumami narodenia do tejto podoby.

*Pozri:  [iCalendar - súborový formát](https://cs.wikipedia.org/wiki/ICalendar), [iCalendar - podrobný popis [EN]](https://icalendar.org/RFC-Specifications/iCalendar-RFC-5545/)*

* *Pripomienky (narodeniny.ics)*

  ```
  BEGIN:VCALENDAR
  PRODID:Programatorsky kruzok
  VERSION:2.0
  ...
  BEGIN:VEVENT
  DTSTAMP:20190811T100534Z
  UID:1
  SUMMARY:Jožko Mrkvička narodeniny
  CATEGORIES:Narodeniny
  RRULE:FREQ=YEARLY
  DTSTART;VALUE=DATE:20020315
  DTEND;VALUE=DATE:20020316
  TRANSP:TRANSPARENT
  BEGIN:VALARM
  DESCRIPTION:
  ACTION:DISPLAY
  TRIGGER:-P7D
  END:VALARM
  END:VEVENT
  ...
  END:VCALENDAR
  ```

## 6. Cestovné poriadky
Z celoštátneho rýchlika prestupujú v okresných mestách cestujúci na miestne autobusy.  Podľa času odchodu a trvania cesty zisti, ktorý autobus stihnú a vypíš najbližší spoj s najmenším čakaním medzi vlakom a autobusom. Daj pozor, pretože prvý časový údaj v riadku s odchodmi autobusu je v skutočnosti trvanie cesty vlakom, kým sa dostaneš do stanice, odkiaľ odchádza ten autobus.

* *Obsah súboru (cp.csv)*:

  ```
  vlak,9:15,10:45,12:15,14:30,16:15,18:20
  bus,1:00,11:00,13:00,15:00,17:00
  bus,1:45,9:30,12:08,16:33
  ...
  ```

* *Cestovné poriadky:*

  ```
  Čas: 10:00
  Trvanie cesty vlakom: 1:00

  Najbližší spoje (vlak, autobus):
  12:15 - 13:15, 15:00 -
  ```



## 7. Spisovateľ
Každý nemôže mať doma vlastného Hviezdoslava. Nebolo by ale úžastné, keby si mohol tvoriť básne alebo prózu s podobným štýlom ako jeden z velikánov literatúry? Vzrušujúcejšie by bolo naučiť počítač umeleckému cíteniu. Najprv musíš zhromaždiť, čo najväčší počet ukážok tvorby autora, a tým zhromaždiť pravdepodobnosti následnosti *n-gramov* (písmen, slabík, slov) do *Markovovho reťazca*. Potom náhodne vygeneruj nový text v štýle autora. Žiaľ, vytvorené myšlienky zrejme nebudú dávať poväčšinou významovo zmysel.

*Pozri: [Diela slovenskej literatúry](https://zlatyfond.sme.sk/), [Anglické texty](hhttps://archive.org/search.php?query=subject%3A%22Literature%22), [Markovov reťazec](https://cs.wikipedia.org/wiki/Markov%C5%AFv_%C5%99et%C4%9Bzec), [Stavové automaty vizuálne[EN]](http://setosa.io/ev/markov-chains/), [Tvorba slov pravdepodobnosťou - str.7[EN]](http://math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)*

```
Chcem písať ako: Dostojevskij
Dĺžka n-gramu: 2
Počet znakov výsledného textu: 100

Spracúvam korpus tvorby autora ...
Spočítavam maticu prechodových stavov ...
Generujem originálny text ...
Ani v tmi, že páliciu neď si predtým opohľadíka do do nia nehľadík, hľadal nediva ulic
```

## Vzorové riešenia:
[Riešenia k 6. kapitole](/coding/beginner/solutions/6-chapter.html)
