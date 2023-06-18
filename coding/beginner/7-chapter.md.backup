# Ⅶ. Funkcie

**Funkcia** je pomenovaná časť programu, ktorá vykonáva špecifickú činnosť. Hovorí sa im preto tiež *procedúry* alebo *podprogramy*. Predstavuje súvislú časť kód, obsahujúcu sled na seba nadväzujúcich príkazov, tvoriacich jeden logický celok.  Takto umožňuje zložitejší program rozdeliť na viacero samostatných častí.



1. **Vraky** - V šírich vodách Atlantiku sa stále ukrýka nepreberné bohatstvo vo vrakoch potopených lodí. V tejto minhre bude tvojou úlohou odkryť tajomstvo skrývajúce sa pod hladinou, nájdením parníku vytvoreného na náhodnej pozícii. Do programu napíš funkciu `vzdialenost(x, y)`, ktorá na základe zadaných súradníc vypočíta ako ďaleko si od vraku.

   ```
   Sonar hlási potopený parník na dohľad!
   Tvoje súradnice?: ___,___
   Od vraku si _____ námorných míľ.
   ...
   Našiel si vrak. Dobrá práca!
   ```



2. **Lietadlo** - Pilotov v kokpite lietadlo by počas letu zaujímalo, ako ďaleko sú ešte od prístatia. Zo zemepisných súradníc aktuálnej polohy a súradníc cieľa vypočíataj vo funkcii `letime(x, y)` najkratšiu vzdialenosť medzi týmito bodmi na sférickom povrchu zemegule.

   *Pozri: [Ortodróma[EN]](https://en.wikipedia.org/wiki/Great-circle_distance), [Príklad](https://www.aldebaran.cz/~brichnac/skola/ortodroma.pdf), [Kalkulačka](http://boulter.com/gps/distance/)*

   ```
   Pozícia: 42.990967 -71.463767
   Cieľ: 48.53682 -13.855231
   
   Vzdialenosť: 4416.21 km
   ```



3. **Cézarová šifra** - Pri tvojich cestách po lodných pokladoch ťa odpočúvajú piráti, ktorí ťa chcú predbehnúť a obohatiť sa. Na utajenie svojej polohy a správ s pevninou musíš svoje informácie šifrovať. Funkcia `sifruj(sprava, kluc)` zašifruje text správy tak, že posunie každé písmeno abecedy podľa písmena `kluc`, čiže napríklad správa "ABC" sa kľúčom "B" zmení na "BCD". Funkcia `desifruj(sifra, kluc)` bude fungovať spätne.  Pre lepšiu bezpečnosť podporuj aj dlhšie kľúče. Každé písmeno bude vyjadrovať posun od začiatku abecedy písmena, s ktorým sa stretne. Potom správa "AVE CEZAR" s kľúčom "BCD" bude "BXH DGCBT".



3. **Pascalov trojuholník** - Vytvorte funkciu `pascalov_trojuholnik(n)`, ktorá vypíšte súčtovú pyramídu s *n* riadkami, ktorá má po okrajoch jednotky a nasledujúce riadky sa tvoria ako súčet dvoch čísel v predchádzajúcom riadku.

   ```
   Počet riadkov: 5
   
       1
      1 1
     1 2 1
    1 3 3 1
   1 4 6 4 1
   ```



4. **Bublikové triedenie** - Pre prehľadnosť údajov je užitočné vedieť ich utriediť podľa rôznych kritérií. Napíš program, ktorý vypíše študentov zo súboru zoradených podľa zadaného názvu stĺpčeka vzostupne.  Na začiatok použi algoritmus bublinkového triedenia, neskôr proces zefektívni využitím algoritmom triedenia zlučovaním alebo rýchlym triedením.

   - *Obsah súboru (ziaci.csv):*

     ```
     meno, priezvisko, vek, datum narodenia, bydlisko, priemer, trieda
     Milan, Peterka, 15, 2004-09-18, Bratislava, 1.6, I.B.
     ...
     ```



6. **Štatistika** - Pre investora je dôležité poznať podmienky trhu a potenciálnu konkurenciu predtým, než si naplánuje stratégiu investovania. Rozbiehaš realitnú kanceláriu a skôr než nastaviš ceny pre konkrétne byty, zisti v akom vzťahu je výmera bytu k jeho cene v lokalite. Pre každú štatistickú funkciu si napíš zodpovedajúcu procedúru. Údaje o bytoch načítaj zo súboru.

   *Pozri: [Wikipedia - Štatistika](https://sk.wikipedia.org/wiki/Matematick%C3%A1_%C5%A1tatistika)*

   ```
   Súbor s bytmi v lokalite: ______
   
   					:	Cena (€):	Výmera(m^2)	:
   Priemer 			: 			:				:
   Medián				:			:				:
   Modus				:			:				:
   Smerodajná odchýlka :			:				:
   ```



7. **Rímske čísla** - Od archeológov si dostal dlhý zoznam rímskych čísel, ktoré boli nájdené v novobjavených podzemených historických pamiatkach. Tažko sa v nich dá vyznať a je na tebe, aby si ich premenil na "normálne" arabské čísla. Pre zhrnutie ti poslali aj zoznam pravidiel prevodu týchto číselných systémov. Napíš funkciu `rimske_na_arabske(rimske)`, ktorá premení rímske na arabské číslo.

   ```
   I = 1
   V = 5
   X = 10
   L = 50
   C = 100
   D = 500
   M = 1000
   ```



8. **Základný tvar zlomku** - Zlomky sú vhodné na presné výpočty s častami z celku. Vytvor jednoduchú kalkulačku, ktorá umožňuje dva zlomky sčítať, odčítať, násobiť a deliť. Výsledok vždy zjednoduš na základný tvar (*Euklidov algoritmus pre NSD a NSN*).

   ```
   Kalkulačka zlomkov
   a = 3/4
   b = 1/2
   Vypočítaj (+, -, *, /): +
   
   Výsledok:
   3/4 + 1/2 = 5/4
   ```



9. **Hra Poklad** - Povráva sa, že na strašidelnom hrade v Karpatoch je bludisko so siedmimi tajomnými komnatami. Každá má meno a je v nej truhlica s pokladom. Mapa bludiska je náhodne poskladaná, uložená v pamäti počítača, ale nie je nakreslená na obrazovke. Hráč musí zistiť, ako sú komnaty navzájom pospájané. Na začiatku hry sa ocitne v náhodne vybranej komnate. Jeho úlohou je zhromaždiť všetky truhlice v jednej komnate, pričom môže vykonať iba ohraničený počet krokov.

   * *Komnaty v mriežke s uloženým pokladom:*
     1. Purpurová a pekelná - Drahokamy
     2. Červená a čudná - Žuvačky
     3. Sivá a studená - Nanuky
     4. Žltá a žeravá - Zlatky
     5. Čierna a čarodejná - Smeti
     6. Hnedá a hrozivá - Kalkulačky
     7. Zelená a záhadná - Medeňáky
   * *Vzorová časť hrania hry:*

   ```
   Počítač rozumie týmto príkazom
   S, V, J, Z   : Pohyb na sever, východ, juh, západ
   ZDVIHNI		 : Zdvihne truhlicu
   POLOZ		 : Položí truhlicu
   KDE			 : Informuje o polohe truhlíc
   SOS			 : Vypíše pravidlá hry
   
   Si v 4.komnate
   Je žltá a žeravá
   Sú v nej: ZLATKY
   Čo chceš robiť?
   ? ZDVIHNI
   Zdvihol si truhlicu, v ktorej sú zlatky.
   
   Ešte stále si 4.komnate
   Čo chceš robiť?
   ? Z
   ...
   ```



10. **Databáza** - Na školu za siedmimi horami a dolinami si objednali počítač na uloženie a prehliadanie záznamov o študentoch. Keďže rok, čo rok odchádzajú maturanti a prichádzajú prváci, potrebujú tabuľky i upravovať. Napíš databázový systém, ktorý bude umožňovať vytvárať a mazať tabuľky, kde každá bude vo vlastnom csv súbore. Budú sa dať vkladať a mazať aj riadky, či upravovať jednotlivé políčka. Ulož do databázy napríklad aj informácie o knihách zo školskej knižnice.

    *Pre nápady na rozšírenie pozri: [Postavme si databázu[EN]](https://cstack.github.io/db_tutorial/)*

    * *Ukážka možností systému:*

      ```
      DATABÁZA> NOVÁ TABUĽKA žiaci: meno, priezvisko, dátum narodenia
      DATABÁZA> TABUĽKY
      žiaci
      DATABÁZA> OTVOR TABUĽKU žiaci
      ŽIACI> VLOŽ Ružena, Kvetinková, 1998-11-15
      ŽIACI> ZOBRAZ
        +----+---------+-------------+-----------------+
        | id |  meno   |  priezvisko | dátum narodenia |
        +----+---------+-------------+-----------------+
        | 1  |  Ružena | Kvetinková  |  1998-11-15     |
        +----+---------+-------------+-----------------+
      ŽIACI> UPRAV 1 NASTAV priezvisko: Sedmokrásková
      ŽIACI> ZOBRAZ: ZORAĎ PODĽA priezvisko
      ...
      ŽIACI> ZOBRAZ: HĽADAJ PODĽA priezvisko: Sedmokrásková
      ...
      ŽIACI> ZMAŽ 1
      ŽIACI> ZMAŽ TABUĽKU žiaci
      DATABÁZA> SKONČI
      ```



11. **Kalkulačka** - Moderné vedecké kalkulačky sú takmer zázrakom. Buď tým, že sa mimo akademickej pôdy skoro vôbec nepoužívajú, alebo samotnou zložitosťou ich fungovania. Dokážu rozlíšiť, či má prednosť násobenie alebo sčítanie, zatiaľ čo vezmú do úvahy zátvorky. Nemôže byť pre nich nič jednoduchšie ako prijsť na to, čo je číslo a čo operátor v dlhom posuvnom texte displeja. Vytvor program kalkuačky, ktorá sa bude správať ako vrecková vedecká kalkulačka (s infixovým zápisom).

    *Pozri: [Algoritmus posunovacej stanice[EN]](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)*

    ```
    > 5 * (1589 - 2 * 74) / 2 + (33 * 8)
    > 3866.5
    > ...
    ```



12. **Turingov stroj** - Turingov stroj dokáže simulovať chod ľubovoľného programu. Pozostáva z nekonečnej pásky rozdelenej na políčka, po ktorých chodí čítacia/zapisovacia hlava podľa zadaných inštrukcií. Načítaj príkazy pre turingov stroj zo súboru a každú sekundu zobraz aktuálny stav pásky a pozíciu hlavy.

    *Pozri: [Simulátor Turingovho stroja[EN]](https://turingmachinesimulator.com/)*

    * Formát príkazu

      ```
      [súčasný stav], [prečítaj symbol], [zapíš symbol], [pohyb hlavy], [nový stav]
      ```

      ```
      Špeciálna značka:
      _ = Prázdne políčko
      
      Pohyb hlavy:
      < = doľava
      > = doprava
      - = žiaden
      ```

    * Inštrukcie pre simulátor Turingovho stroja počítajúceho binárne čísla nahor.

      ```
      A, _, 0, -, B
      B, 0, 1, -, C
      B, 1, 0, <, B
      B, _, 1, -, C
      C, _, _, <, B
      C, 0, 0, >, C
      C, 1, 1, >, C
      ```

    * Simulácia:

      ```
      0
      ^
      1
      ^
      1
       ^
      1
      ^
       0
      ^
      10
      ^
      ...
      ```


## Vzorové riešenia:
[Riešenia k 7.kapitole](/Hackerman/tasks-solutions/7-chapter.html)
 