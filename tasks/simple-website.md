---
layout: default
title: Jazyk HTML
nav_exclude: true
---

# Jazyk HTML
- Ročník: II. ročník SŠ


## Základná stránka

Ukážka jednoduchej HTML stránky s nadpisom, odsekom a obrázkom.
```html
<html>
    <h1>Informatika je super!</h1>

    <p>Informatika je veda o informácii a jej automatickom spracovaní (je
    to veda o algoritmickom riešení problémov). Často, no nie výlučne sa
    študuje ako súčasť vedy o počítačoch a informačných technológiách. Jej
    súčasné využitie je úzko späté s rozvojom výpočtovej techniky.
    </p>

    <img src="kvet.JPG" width="50%">

</html>
```


## Hlavná stránka a podstránka

Vytvorte webovú stránku s jednou hlavnou stránkou a dvoma podstránkami. Každá stránka bude obshaovať nadpis, 2 odseky textu, a aspoň 2 obrázky s popismi.
Hlavná stránka navyše obsahuje titulný obrázok - banner a hypertextový odkaz na podstránku

- **Téma**: Zimné športy


Hlavná stránka
```html
<!DOCTYPE html>
<html>
<head>
    <title>Winter sports</title>
</head>
<body>
    <h1>Winter sports</h1>
    <img src="banner.jpg" width="600">
    <p> The first races started in the Tatras in 1911. The first downhill race was organised on the 6 km track starting at Sliezsky dom and
    finishing at Tatranská Polianka. Two years later, the first cross-country skiers set off for the race. The ski jumpers made their first jump
    on the wooden springboard over Tatranská Polianka. Today the length of the jumps makes us smile as the longest of them was only around 25
    meters long. The history of skiing was later connected with Štrbské Pleso and its centre Areál snov which in 1970 became the place of the
    skiing world championship.
    </p>
    <img src="skiing.jpg" width="400">
    <a href="skiing.html"><b>Skiing</b></a>
</body>
</html>
```


Vedľajšia stránka
```html
<!DOCTYPE html>
<html>
<head>
    <title>Skiing</title>
</head>
<body>
    <h1>Skiing</h1>
    <img src="skiing.jpg" width="600">
    <a href="winter-sports.html"><b>Back to home page</b></a>
</body>
</html>
```
