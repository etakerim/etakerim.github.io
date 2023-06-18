---
layout: default
title: Premenné
nav_order: 2
---

# I. Premenné


**Premenná** je ako krabička slúžiaca na odkladanie informácií, ktoré si potrebujeme pre vykonanie danej činnosti zapamätať. Podľa účelu sa líšia svojim *dátovým typom*, ktorý sa vytvorí, keď do premennej niečo vložíme (*priradenie*) a určuje to, čo sa vo vnútri nachádza.

Základné stavebné kamene, z ktorých vyskladáme opis zložitejších javov sú:

* **Logická hodnota** (*bool*) - Boolean môže mať len dve hodnoty - pravda (*True*) alebo nepravda (*False*)

* **Celé číslo** (*int*) - Do integer-u ukladáme ľubovolné kladné a záporné celé čísla (napr. *97*)

* **Desatinné číslo** (*float*) - Líšia sa od celých čísel spôsobom uloženia (napr. *3.14159*)

* **Reťazec** (*str*) - Označujeme ich úvodzovkami alebo apostrofmi a väčšinou predstavujú text napísaný na klávesnici alebo zobrazený na obrazovke. (napr. *"Učím sa programovať!"*)


## 1. Pozdrav
Vytvor program, ktorý ťa po vložení mena pozdraví. Zameň pozdrav a zároveň nechaj program sa rozlučiť.

```
Ako sa voláš?: ______
Ahoj ______
```

## 2. Básnik
Vytváraš básničky na počkanie. Dnes sa ti ťažko premýšľa nad kreatívnymi textami, tak si chceš ušetriť námahu tým, že budeš meniť len rým.

```
Napíš slovo, ktoré sa rýmuje so slovom strach: _____
Tu je báseň:
Z počítačov mával som vždy strach,
teraz som však šťastný ako _____.
```

## 3. Pozvánka
Každému kamarátovi chceš poslať pozvánku na svoju narodeninovú oslavu. Okrem mena v správe potrebuješ meniť aj čas konania oslavy (nie všetci chodia načas), vec, ktorú priniesie a jedlo, ktoré bude mať prichystané.

```
Meno kamaráta: _____
Čas oslavy: _____
Prines: _____
Jedlo: ______

Ahoj _____,
pozývam ťa na moju narodeninovú oslavu, ktorá sa bude konať 12.4. o _____. Nezabudni priniesť _____ a pekný darček. Na večeru ťa čaká _____ a samozrejme lahodná torta. Teším sa na teba! :)
```

## 4. Prevod jednotiek teploty
Prišiel si na návštevu v Amerike a keď ideš von nevieš ako sa máš obliecť, lebo na teplomere vidíš len stupne Fahrenheita (*F*). Premeň ich na stupne Celzia (*C*).

$$ C = (F - 32) \cdot (5 / 9) $$

```
Vonku je °F: _____

Doma by to bolo _____°C.
```

## 5. Hlboká roklina
Stojíš na útese nad hlbokým údolím a rozmýšlaš ako odmerať jej hĺbku (*h*). Vtom ťa osvietia tvoje dávne vedomosti z fyziky. Zoberieš do ruky kameň a pustíš ho z ruky do rokliny.
Zároveň spustíš stopy a zmeriaš čas dopadu (rýchlosť zvuku rachotu pri náraze na zem môžeme zanedbať). Na kameň pôsobí tiažové zrýchlenie (*g = 9.81*) a pohybuje sa nadol rovnomerným spomaleným pohybom:

h = \frac{gt^2}{2}

```
Čas dopadu kameňa (s): ________

Hĺbka rokliny je potom _______ metrov.
```

## 6. Vedro s vodou
Do nádrže z dažďovou vodou napršalo cez noc veľa noc. Jediný spôsob ako zúžitkovať zachytenú vodu je preniesť ju vo vedre valcového tvaru. Naberieme vždy len toľko vody koľko budeme potrebovať,
preto je dobré vedieť objem vedra. Rozmery vedra dokážeme odmerať pravítkom. Objem valcového vedra *V* s výškou *v* a priemerom podstavy *d* sa vypočíta ako:

$$ V = \pi \cdot (d\;/\;2)^2 \cdot v $$

```
Výška vedra (cm): ________
Priemer dna (cm): ________

Do vedra sa zmestí _______ litrov vody.
```

## 7. Cesta autom
Plánuješ trasu na výlet autom a chceš zistiť akou rýchlosťou musíte priemerne ísť, aby ste stihli navštíviť všetky miesta a prišli večer včas do hotela.

```
Dĺžka cesty (km): ____
Odchod z domu (hodina): ____
Príchod do hotela (hodina): ____

Pôjdete priemerne ____ km/h.
```

## 8. Kúpalisko
Začína sa letná sezóna a prevádzka kúpaliska musí pred otvorením plne napustiť bazény v areáli. Všetky sú kvádrového tvaru a poznáme ich rozmery. Zaujíma nás spotrebovaná voda na konkrétny bazén a cena, ktorú za ňu zaplatíme.

```
Dĺžka bazéna (m): ____
Šírka bazéna (m): ____
Hĺbka bazéna (m): ____
Hĺbka hladiny od okraja (cm): ____
Cena za m³ vody v €: _____

Na bazén sa minie ____ litrov vody a bude to stáť ____ €.
```

## 9. Maľovanie
Sťahuješ sa s rodičmi do nového bytu a dali ti za úlohu vymalovať si izbu. Myslíš si, že nástroj na rýchle počítanie množstva farby by sa hodil aj profesionálnym maliarom, preto vytvoríš program na vypočítanie plochy stien a stropu bez okna a podlahy.

```
Rozmery miestnosti
Dĺžka (cm): ____
Šírka (cm): ____
Výška (cm): ____
Rozmery okna
Šírka (cm): ____
Výška (cm): ____
Výdatnosť farby (m²/kg): ____

Maľovať budeš plochu ____ m². Kúp ____ kg farby.
```

## 10. Brzdenie
V poslednej dobe je na trati viacej nebezpečných zrážok. Rušňovodiči ťa požiadali, aby si zistil ako rýchlo pred prekážkou dokáže vlaková súprava zastaviť pri danej rýchlosti.
- Kinetická energia pohybujúceho sa vlaku (práca potrebná na zabrzdenie): $ W = E_k = \frac{1}{2} \cdot m \cdot v^2 $
- Brzdná dráha pri brzdnej sile $F_b$: $ s = \frac{W}{F_b \cdot m} $
- Čas potrebný na zastavenie vlaku pri rovnomernom spmalenom pohybe: $ t = \sqrt{\frac{2 \cdot s}{F / m}} $

```
Vlaková súprava
- Rýchlosť (km/h): ____
- Hmotnosť lokomotívy (t): ____
- Hmotnosť vagóna (t): ____
- Počet vagónov: ____
- Počet miest na vagón: ____
- Zaplnenosť vlaku (%): ____
- Brzdná sila (N/t): ____

V rýchlosti ____ km/h zabrzdí súprava s hmotnosťou ____ t na vzdialnosť _____ m a bude to trvať ____ s.
```

## Vzorové riešenia:
[Riešenia k 1.kapitole](/coding/beginner/solutions/1-chapter.html)
