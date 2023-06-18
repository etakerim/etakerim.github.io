# Ⅶ. Funkcie - Riešenia


1. **Vraky** - V šírich vodách Atlantiku sa stále ukrýka nepreberné bohatstvo vo vrakoch potopených lodí. V tejto minhre bude tvojou úlohou odkryť tajomstvo skrývajúce sa pod hladinou, nájdením parníku vytvoreného na náhodnej pozícii. Do programu napíš funkciu `vzdialenost(x, y)`, ktorá na základe zadaných súradníc vypočíta ako ďaleko si od vraku.

```python
import random
import math

MIERKA = 15
VRAK_X = random.randint(0, MIERKA)
VRAK_Y = random.randint(0, MIERKA)


def vzdialenost(x, y):
    return math.hypot(x - VRAK_X, y - VRAK_Y)


def nasiel(x, y):
    return x == VRAK_X and y == VRAK_Y


print("Sonar hlási potopený parník na dohľad!")

while True:
    suradnice = input("Tvoje súradnice?: ")
    suradnice = suradnice.split(",")
    x = int(suradnice[0])
    y = int(suradnice[1])

    if nasiel(x, y):
        print("Našiel si vrak. Dobrá práca!")
        break

    print(f"Od vraku si {vzdialenost(x, y):.3f} námornych míľ")
```

---

2. **Lietadlo** - Pilotov v kokpite lietadlo by počas letu zaujímalo, ako ďaleko sú ešte od prístatia. Zo zemepisných súradníc aktuálnej polohy a súradníc cieľa vypočíataj vo funkcii `letime(x, y)` najkratšiu vzdialenosť medzi týmito bodmi na sférickom povrchu zemegule.

```python
from math import sin, cos, acos, radians


def letime(x, y):
    POLOMER_ZEME = 6371.11
    uhol = acos(sin(x[0]) * sin(y[0]) +
                cos(x[0]) * cos(y[0]) * cos(abs(x[1] - y[1])))
    obluk = POLOMER_ZEME * uhol
    return obluk


start = input("Pozícia: ")
ciel = input("Cieľ: ")

start = start.split(" ")
start = [
    radians(float(start[0])),
    radians(float(start[1]))
]
ciel = ciel.split(" ")
ciel = [
    radians(float(ciel[0])),
    radians(float(ciel[1]))
]

vzdielenost = letime(start, ciel)
print(f"\nVzdialenosť: {vzdielenost:.2f} km")
```

---

3. **Cézarová šifra** - Pri tvojich cestách po lodných pokladoch ťa odpočúvajú piráti, ktorí ťa chcú predbehnúť a obohatiť sa. Na utajenie svojej polohy a správ s pevninou musíš svoje informácie šifrovať. Funkcia `sifruj(sprava, kluc)` zašifruje text správy tak, že posunie každé písmeno abecedy podľa písmena `kluc`, čiže napríklad správa "ABC" sa kľúčom "B" zmení na "BCD". Funkcia `desifruj(sifra, kluc)` bude fungovať spätne.  Pre lepšiu bezpečnosť podporuj aj dlhšie kľúče. Každé písmeno bude vyjadrovať posun od začiatku abecedy písmena, s ktorým sa stretne. Potom správa "AVE CEZAR" s kľúčom "BCD" bude "BXH DGCBT".

```python
def sifruj(sprava, kluc):
    sifra = ""
    A = ord("A")
    Z = ord("Z")
    ABECEDA = Z - A + 1
    sprava = sprava.upper()

    for i in range(len(sprava)):
        pismeno = sprava[i]
        k = kluc[i % len(kluc)]

        if A <= ord(pismeno) <= Z:
            poradie = ord(pismeno) - A
            posun = ord(k) - A

            poradie = (poradie + posun) % ABECEDA
            sifra += chr(poradie + A)

    return sifra


def desifruj(sifra, kluc):
    sprava = ""
    A = ord("A")
    Z = ord("Z")
    ABECEDA = Z - A + 1
    sifra = sifra.upper()

    for i in range(len(sifra)):
        pismeno = sifra[i]
        k = kluc[i % len(kluc)]

        if A <= ord(pismeno) <= Z:
            poradie = ord(pismeno) - A
            posun = ord(k) - A

            poradie = (poradie - posun) % ABECEDA
            sprava += chr(poradie + A)

    return sprava


retazec = input("Zadaj správu: ")
kluc = input("Vlož tajný kľúč: ")
akcia = input("Čo spraviť (šifruj / dešifruj): ")
s = ""

if akcia == "šifruj":
    print("Zašifrovaná správa: ", end="")
    s = sifruj(retazec, kluc)

elif akcia == "dešifruj":
    print("Dešifrovaná správa: ", end="")
    s = desifruj(retazec, kluc)

print(s)
```

---

4. **Pascalov trojuholník** - Vytvorte funkciu `pascalov_trojuholnik(n)`, ktorá vypíšte súčtovú pyramídu s *n* riadkami, ktorá má po okrajoch jednotky a nasledujúce riadky sa tvoria ako súčet dvoch čísel v predchádzajúcom riadku.

```python
def pascalov_trojuholnik(n):
    row = [1, 1]
    medzery = n
    pocet = 0

    for i in range(n):
        pocet += 1
        medzery -= 1

        print(" " * medzery, end="")
        for cislo in row[:pocet]:
            print(cislo, end=" ")
        print()

        for j in range(pocet - 1,  0, -1):
            row[j] = row[j] + row[j - 1]
        row.append(1)


vyska = int(input("Zadajte výšku Pascalovho trojuholníka: "))
pascalov_trojuholnik(vyska)
```

---

5. **Bublikové triedenie** - Pre prehľadnosť údajov je užitočné vedieť ich utriediť podľa rôznych kritérií. Napíš program, ktorý vypíše študentov zo súboru zoradených podľa zadaného názvu stĺpčeka vzostupne.  Na začiatok použi algoritmus bublinkového triedenia, neskôr proces zefektívni využitím algoritmom triedenia zlučovaním alebo rýchlym triedením.

```python
def bublinkove_triedenie(zoznam, stlpec):
    for i in range(len(zoznam) - 1):
        for j in range(len(zoznam) - i - 1):
            if zoznam[j][stlpec] > zoznam[j + 1][stlpec]:
                x = zoznam[j]
                zoznam[j] = zoznam[j + 1]
                zoznam[j + 1] = x


subor = open("ziaci.csv", "r")
hlavicka = []
ziaci = []

for riadok in subor:
    riadok = riadok.strip()
    if not hlavicka:
        hlavicka = riadok.split(",")
    else:
        ziaci.append(riadok.split(","))

subor.close()

kriterium = input("Triediť podľa stĺpca: ")
stlpec = 0

for i in range(len(hlavicka)):
    if hlavicka[i].strip() == kriterium:
        stlpec = i

bublinkove_triedenie(ziaci, stlpec)
for nadpis in hlavicka:
    print(f"{nadpis:20s}", end=":")
print()

for ziak in ziaci:
    for nadpis in ziak:
        print(f"{nadpis:20s}", end=":")
    print()
```

---

6. **Štatistika** - Pre investora je dôležité poznať podmienky trhu a potenciálnu konkurenciu predtým, než si naplánuje stratégiu investovania. Rozbiehaš realitnú kanceláriu a skôr než nastaviš ceny pre konkrétne byty, zisti v akom vzťahu je výmera bytu k jeho cene v lokalite. Pre každú štatistickú funkciu si napíš zodpovedajúcu procedúru. Údaje o bytoch načítaj zo súboru.

```python
import math


def priemer(zoznam):
    sucet = 0
    for prvok in zoznam:
        sucet += prvok
    return sucet / len(zoznam)


def modus(zoznam):
    nazvy = []
    vyskyty = []

    # Zisti koľkokrát sa čo vyskytuje
    for prvok in zoznam:
        index = -1
        for i in range(len(nazvy)):
            if prvok == nazvy[i]:
                index = i

        if index != -1:
            vyskyty[index] += 1
        else:
            nazvy.append(prvok)
            vyskyty.append(0)

    # Pozri sa po najväčšom počte objavení sa a prehlás ho za modus
    najviac = None
    rekorder = -1

    for i in range(len(vyskyty)):
        if najviac == None or vyskyty[i] > najviac:
            najviac = vyskyty[i]
            rekorder = i

    return nazvy[rekorder]


def utried(zoznam):
    for i in range(len(zoznam) - 1):
        for j in range(len(zoznam) - i - 1):
            if zoznam[j] > zoznam[j + 1]:
                x = zoznam[j]
                zoznam[j] = zoznam[j + 1]
                zoznam[j + 1] = x


def median(zoznam):
    utried(zoznam)
    stred = (len(zoznam) + 1) // 2
    return zoznam[stred - 1]


def smerodajna_odchylka(zoznam):
    average = priemer(zoznam)

    sucet = 0
    for prvok in zoznam:
        sucet += (prvok - average) ** 2

    return math.sqrt(sucet / len(zoznam))


subor = input("Súbor s bytmi v lokalite: ")
ceny = []
vymery = []

byty = open(subor, "r")

for byt in byty:
    zaznam = byt.split(",")
    ceny.append(int(zaznam[0]))
    vymery.append(int(zaznam[1]))

byty.close()

# Pozri tiež modul "statistics" - https://docs.python.org/3/library/statistics.html
print(f"{'':25s}:{'Cena (€)':15s}:{'Výmera(m^2)':15s}:")
print(f"{'Priemer':25s}:{priemer(ceny):15.2f}:{priemer(vymery):15.2f}:")
print(f"{'Medián':25s}:{median(ceny):15.2f}:{median(vymery):15.2f}:")
print(f"{'Modus':25s}:{modus(ceny):15.2f}:{modus(vymery):15.2f}:")
print(f"{'Smerodajná odchýlka':25s}:{smerodajna_odchylka(ceny):15.2f}:{smerodajna_odchylka(vymery):15.2f}:")
```

---

7. **Rímske čísla** - Od archeológov si dostal dlhý zoznam rímskych čísel, ktoré boli nájdené v novobjavených podzemených historických pamiatkach. Tažko sa v nich dá vyznať a je na tebe, aby si ich premenil na "normálne" arabské čísla. Pre zhrnutie ti poslali aj zoznam pravidiel prevodu týchto číselných systémov. Napíš funkciu `rimske_na_arabske(rimske)`, ktorá premení rímske na arabské číslo.

```python
def rimske_na_arabske(rimske):
    TABULKA = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    arabske = []
    vysledok = 0

    for symbol in rimske:
        arabske.append(TABULKA[symbol])

    i = 0
    while i < len(arabske):
        if i + 1 != len(arabske) and arabske[i] < arabske[i + 1]:
            vysledok += arabske[i + 1] - arabske[i]
            i += 2
        else:
            vysledok += arabske[i]
            i += 1

    return vysledok


cislo = input("Zadaj rímske číslo: ")
print(rimske_na_arabske(cislo))
```

---

8. **Základný tvar zlomku** - Zlomky sú vhodné na presné výpočty s častami z celku. Vytvor jednoduchú kalkulačku, ktorá umožňuje dva zlomky sčítať, odčítať, násobiť a deliť. Výsledok vždy zjednoduš na základný tvar (*Euklidov algoritmus pre NSD a NSN*).

```python
def nsd(a, b):
    # Najväčší spoločný deliteľ
    # alebo: math.gcd(a, b)
    while b > 0:
        a, b = b, a % b
    return a


def nsn(a, b):
    # Najmenší spoločný násobok
    return a * b // nsd(a, b)


def zakladny_tvar(zlomok):
    delitel = nsd(zlomok[0], zlomok[1])
    return [
        zlomok[0] // delitel,
        zlomok[1] // delitel
    ]


def vytvor_zlomok(retazec):
    # alebo: map(int, retazec.split("/"))
    zlomok = retazec.split("/")
    for i in range(len(zlomok)):
        zlomok[i] = int(zlomok[i])
    return zlomok


def nasobit(x, y):
    citatel = x[0] * y[0]
    menovatel = x[1] * y[1]
    zlomok = [citatel, menovatel]
    return zakladny_tvar(zlomok)


def delit(x, y):
    citatel = x[0] * y[1]
    menovatel = x[1] * y[0]
    zlomok = [citatel, menovatel]
    return zakladny_tvar(zlomok)


def scitat(x, y):
    menovatel = nsn(x[1], y[1])
    x_citatel = x[0] * (menovatel // x[1])
    y_citatel = y[0] * (menovatel // y[1])
    citatel = x_citatel + y_citatel
    zlomok = [citatel, menovatel]
    return zakladny_tvar(zlomok)


def odcitat(x, y):
    menovatel = nsn(x[1], y[1])
    x_citatel = x[0] * (menovatel // x[1])
    y_citatel = y[0] * (menovatel // y[1])
    citatel = x_citatel - y_citatel
    zlomok = [citatel, menovatel]
    return zakladny_tvar(zlomok)


def vypis(zlomok):
    return f"{zlomok[0]}/{zlomok[1]}"


print("Kalkulačka zlomkov")
a = input("a = ")
b = input("b = ")
akcia = input("Vypočítaj (+, -, *, /): ")

a = zakladny_tvar(vytvor_zlomok(a))
b = zakladny_tvar(vytvor_zlomok(b))

print("\nVýsledok:")
if akcia == '+':
    print(f"{vypis(a)} + {vypis(b)} = {vypis(scitat(a, b))}")
elif akcia == '-':
    print(f"{vypis(a)} - {vypis(b)} = {vypis(odcitat(a, b))}")
elif akcia == '*':
    print(f"{vypis(a)} * {vypis(b)} = {vypis(nasobit(a, b))}")
elif akcia == '/':
    print(f"{vypis(a)} / {vypis(b)} = {vypis(delit(a, b))}")

```



