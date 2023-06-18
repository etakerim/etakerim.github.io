# Ⅵ. Súbory - Riešenia


1. **Prepisovanie** - Pri prepisovaní dlhých textov na vstup programu sa často mýliš a príde ti to zbytočne zdĺhavé. Načítaj články u zadaní z predchádajúcej kapitoly zo súboru, ktorého názov si na začiatku vypýtaš. Pri úlohe "veľa opakovania" ulož záznam o ceste robota do nového súboru.

```python
nazov_suboru = input("Názov súboru")
subor = open(nazov_suboru, "r")

for riadok in subor:
    riadok = riadok.rstrip()

subor.close()
```

---

2. **Turistika** - Na víkend sa črtajú ideálne podmienky na horskú turistiku. Nenecháš nič na náhodu a pripravíš si detailný plán s výškovým profilom trasy. Na každých desať metrov trasy si do súboru poznačíš aktuálnu nadmorskú výšku. Zisti celkové stúpanie a klesanie počas celého výletu spolu s najvyššou a najnižšou nadmorskou výškou. Vypíš aj celkovú dĺžku túry v kilometroch a trvanie prechodu horami v hodinách.

```python
nazov = input("Výškový profil trasy je v súbore: ")

ROVINA_KMH = 3.6
KROK_M = 10

predch_vyska = None
vzdialenost_m = 0
trvanie_min = 0

celkom_stupanie = 0
celkom_klesanie = 0

najvyssie = None
najnizsie = None

trasa = open(nazov, "r")

for miesto in trasa:
    nadmorska_vyska = int(miesto)
    vzdialenost_m += KROK_M

    # Ak neexistuje predošlá nadmorská výška, tak sme neprešli žiaden úsek
    if predch_vyska != None:
        stupanie = nadmorska_vyska - predch_vyska

        # Zisti, či sme dosiahli rekordnú nadmorskú výšku a zaznamenaj si ju.
        if najvyssie == None or nadmorska_vyska > najvyssie:
            najvyssie = nadmorska_vyska
        elif najnizsie == None or nadmorska_vyska < najnizsie:
            najnizsie = nadmorska_vyska

        # Zobrazenie vzdialenosti medzi dvomi miestami zo svahu do roviny.
        # Pri stúpaní prejdeme za rovnaký čas akoby kratšiu vzdialenosť, preto
        # sa prepona zobrazí do dolnej odvesy a pri klesaní naopak
        if stupanie > 0:
            rovina_vzd = KROK_M ** 2 - stupanie ** 2
            celkom_stupanie += stupanie

        elif stupanie < 0:
            rovina_vzd = KROK_M ** 2 + stupanie ** 2
            celkom_klesanie += abs(stupanie)

        else:
            rovina_vzd = KROK_M

        # Čas na prejdenie medzi miestami v minútach
        trvanie_min += ((rovina_vzd / 1000) / ROVINA_KMH) * 60

    predch_vyska = nadmorska_vyska

trasa.close()

print(f"Trasa: {vzdialenost_m / 1000:.3f} km - "
      f"{int(trvanie_min // 60)} h {int(trvanie_min % 60)} min")
print(f"Stúpanie: {celkom_stupanie} m")
print(f"Klesanie: {celkom_klesanie} m")
print(f"Najnižšie miesto trasy: {najnizsie} m")
print(f"Najvyššie miesto trasy: {najvyssie} m")
```

---

3. **Vedomostný kvíz** - Bifľovanie ti vôbec nepríde ako zábava. Keby existoval spôsob, ktorým si opakovanie poznatkov spríjemniť. Včera si zo smútku nad vidinou takto premárneho času pri jedení čokolády a čipsov pozeral kvízovú reláciu. Prišlo ti to neuveriteľne poučné. Polož náhodnú otázku s možnostami zo súboru kvízových otázok a bodovo ohodnoť správnu odpoveď. Všetky kvízové otázky s možnosťami sa však nezmestia do pamäti programu, preto vždy vyber náhodnu otázku priamo zo súboru.

```python
import random

nazov = input("Súbor s kvízovými otázkami: ")
kviz = open(nazov, "r")

otazky = []
skore = 0

# Ulož si pozície otázok v súbore
while True:
    riadok = kviz.readline()
    if not riadok:
        break

    if riadok.startswith("Otázka: "):
        znacka = kviz.tell() - len(riadok)
        otazky.append(znacka)

print("Kvízové otázky pripravené.")
print("Ideme na to!", end="\n\n")

while True:
    # Náhodne vyber otázku
    i = random.randint(0, len(otazky) - 1)
    znacka = otazky[i]
    kviz.seek(znacka)

    # Spýtaj sa otázku a navrhni možnosti
    for riadok in kviz:
        riadok = riadok.rstrip()

        if riadok.startswith("Odpoveď: "):
            odpoved = riadok.lstrip("Odpoveď: ")
            break

        print(riadok.lstrip("Otázka: "))

    # Hráčov tip
    tip = input("Aká je správna odpoveď?: ")
    if tip == odpoved:
        skore += 1
        print(f"Správne! Máš {skore} bodov.\n")
    else:
        print("Nabudúce si to lepšie premysli. Skúsime niečo iné.\n")

kviz.close()
```

---

4. **Narodeniny** - Darčeky k narodeninám zvykneš kupovať na poslednú chvílu. Potrebuješ mať prehľad aspoň na mesiac dopredu, kto bude mať narodeniny, aby si stihol vybrať niečo výnimočné. Zo súboru načítaj ľudí, ktorí majú sviatok v požadovaný mesiac v roku.

```python
datum = input("Zobraz narodeniny pre mesiac v roku: ")
datum = datum.split(".")

NAZVY_MESIACOV = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl",
                  "August", "September", "Október", "November", "December"]
mesiac = int(datum[0])
rok = int(datum[1])

narodeniny = open("narodeniny.csv", "r")
print(f"\nNarodeniny: {NAZVY_MESIACOV[mesiac - 1]} {rok}")

for osoba in narodeniny:
    osoba = osoba.split(",")
    meno = osoba[0]
    datum = osoba[1].split(".")

    narodenie_den = int(datum[0])
    narodenie_mesiac = int(datum[1])
    narodenie_rok = int(datum[2])

    if narodenie_mesiac == mesiac:
        print(f"{narodenie_den}.{narodenie_mesiac} - {meno} - "
              f"{rok - narodenie_rok} rokov")

narodeniny.close()
```

---

5. **Pripomienky v kalendári** - Po čase zistíš, že jednoduchšie by bolo, ak by sa ti týždeň pred kamarátovými narodeninami objavila pripomienka v tvojom osobnom elektronickom kalendári. Máš veľa kontaktov, nechceš ich však všetky prepisovať ručne. Zistiš, že zoznam narodenín môžeš do kalendárovej aplikácie vložiť vo formáte *iCalendar (.ics)*. Preveď súbor s menami a dátumami narodenia do tejto podoby.

```python
from datetime import datetime
from datetime import timedelta

csv_nazov = input("Prečítaj narodeniny zo súboru (.csv): ")
ics_nazov = input("Priprav kalendár s názvom (.ics): ")

narodeniny = open(csv_nazov, "r")
kalendar = open(ics_nazov, "w")
ciselnik = 0

print("BEGIN:VCALENDAR", file=kalendar)
print("PRODID:Programatorsky kruzok", file=kalendar)
print("VERSION:2.0", file=kalendar)

for osoba in narodeniny:
    osoba = osoba.split(",")
    meno = osoba[0].strip()
    narodenie = osoba[1].strip()

    print("BEGIN:VEVENT", file=kalendar)

    # Pre zjednodušenie prečítaj časovú značku na vstupe.
    casova_znacka = datetime.now().strftime("%Y%m%dT%H%M%SZ")
    print(f"DTSTAMP:{casova_znacka}", file=kalendar)

    # Podľa správnosti by si mal vygenerovať jedinečný kód, napríklad takto:
    # from uuid import uuid1
    # ciselnik = uuid1()
    ciselnik += 1
    print(f"UID:{ciselnik}", file=kalendar)

    # Krátky popis a kategória udalosti v kalendári. Ide o narodeniny.
    print(f"SUMMARY:{meno} narodeniny", file=kalendar)
    print("CATEGORIES:Narodeniny", file=kalendar)

    # Kalendár zobrazí udalosť každý rok
    print("RRULE:FREQ=YEARLY", file=kalendar)

    # Pre zjednodušenie zostav dátum narodenín spájaním reťazcov.
    datum = datetime.strptime(narodenie, "%d.%m.%Y")
    start = datum.strftime("%Y%m%d")
    print(f"DTSTART;VALUE=DATE:{start}", file=kalendar)

    koniec = datum + timedelta(days=1)
    koniec = koniec.strftime("%Y%m%d")
    print(f"DTEND;VALUE=DATE:{koniec}", file=kalendar)

    # Umožní vytvárať aj iné udalosti na deň narodenín
    print("TRANSP:TRANSPARENT", file=kalendar)

    # Pripomienka týždeň pred narodeninami
    print("BEGIN:VALARM", file=kalendar)
    print("DESCRIPTION:", file=kalendar)
    print("ACTION:DISPLAY", file=kalendar)
    print("TRIGGER:-P7D", file=kalendar)
    print("END:VALARM", file=kalendar)

    print("END:VEVENT", file=kalendar)

print("END:VCALENDAR", file=kalendar)
print("Hotovo.")

narodeniny.close()
kalendar.close()
```

---


6. **Cestovné poriadky** - Z celoštátneho rýchlika prestupujú v okresných mestách cestujúci na miestne autobusy.  Podľa času odchodu a trvania cesty zisti, ktorý autobus stihnú a vypíš najbližší spoj s najmenším čakaním medzi vlakom a autobusom. Daj pozor, pretože prvý časový údaj v riadku s odchodmi autobusu je v skutočnosti trvanie cesty vlakom, kým sa dostaneš do stanice, odkiaľ odchádza ten autobus.


```python
odchod = input("Čas: ")
trvanie = input("Trvanie cesty vlakom: ")

odchod = odchod.split(":")
hod = int(odchod[0])
min = int(odchod[1])
odchod = [hod, min]

trvanie = trvanie.split(":")
hod = int(trvanie[0])
min = int(trvanie[1])
trvanie = [hod, min]

vlaky = []
autobusy = []
cp = open("cp.csv", "r")

for spoj in cp:
    spoj = spoj.split(",")
    doprava = spoj[0].strip()

    if doprava == "bus":
        autobusy.append([])

    for cas in spoj[1:]:
        cas = cas.split(":")
        hod = int(cas[0])
        min = int(cas[1])

        if doprava == "vlak":
            vlaky.append([hod, min])
        elif doprava == "bus":
            autobusy[-1].append([hod, min])

print("Najbližší spoj (vlak, autobus):")
nasiel = False

for vlak in vlaky:
    # Nájdi najbližší odchod vlaku
    if (vlak[0] * 60 + vlak[1]) >= (odchod[0] * 60 + odchod[1]):
        # Zisti, kedy prídeme odchod + trvanie = prichod
        min = (vlak[1] + trvanie[1]) % 60
        hod = ((vlak[0] + trvanie[0]) + ((vlak[1] + trvanie[1]) // 60)) % 24
        prichod = [hod, min]

        for linka in autobusy:
            stanica = linka[0]

            # K tomu pozri autobusovú linku, ktorá odchádza zo stanice, do ktorej vlak ide
            if (stanica[0] * 60 + stanica[1]) >= (trvanie[0] * 60 + trvanie[1]):

                for autobus in linka[1:]:
                    # Prestup: Nájdi autobus, ktorý odchádza najskôr po príchode vlaku
                    if (not nasiel and (autobus[0] * 60 + autobus[1]) > (prichod[0] * 60 + prichod[1])):
                        print(f"{vlak[0]:02d}:{vlak[1]:02d} - "
                              f"{prichod[0]:02d}:{prichod[1]:02d}, "
                              f"{autobus[0]:02d}:{autobus[1]:02d} - ")
                        nasiel = True
cp.close()
```
