---
layout: default
title: Funkcie - Riešenia
nav_exclude: true
---

# Ⅶ. Funkcie - Riešenia


## 1. Vraky

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


## 2. Lietadlo

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


## 3. Cézarová šifra

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


## 4. Pascalov trojuholník

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


## 5. Bublikové triedenie

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


## 6. Štatistika

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


## 7. Rímske čísla

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


## 8. Základný tvar zlomku

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


## 9. Spisovateľ

```python
import random

autor = input("Chcem písať ako: ")
dlzka_ngram = int(input("Dĺžka n-gramu: "))
dlzka_generuj = int(input("Počet znakov výsledného textu: "))
dlzka_generuj //= dlzka_ngram

print("Spracúvam korpus tvorby autora ...")
korpus = open(autor.lower() + ".txt", "r")

legenda = []        # Každý nový znak si zaznač do hlavičky tabuľky
pocty = []          # Počet znakov korpusu
matica = []         # Tabuľka výskytov po sebe idúcich dvoch znakov z legendy
pred_pozicia = None
ngram = ""

for riadok in korpus:
    riadok = riadok.strip()

    for znak in riadok:
        # Zhromažduj znaky, kým nemáš n-gram požadovanej dĺžky
        ngram += znak
        if len(ngram) != dlzka_ngram:
            continue

        # Poznač si, či sme znak už predtým videli
        videl = False
        pozicia = 0
        for i in range(len(legenda)):
            if legenda[i] == ngram:
                pozicia = i
                videl = True
                break

        if not videl:
            # Ak sme znak nevideli pridaj preň matici nakoniec prázdny riadok a stĺpec
            pred_pozicia = len(legenda)
            legenda.append(ngram)
            pocty.append(1)

            for r in matica:
                r.append(0)
            nuly = []
            for i in range(len(legenda)):
                nuly.append(0)
            matica.append(nuly)

        else:
            # Ak sme ho videli pripočítaj prechodový stav
            if pred_pozicia != None:
                matica[pred_pozicia][pozicia] += 1
                pocty[pozicia] += 1
                pred_pozicia = pozicia

        ngram = ""
korpus.close()

print("Spočítavam maticu prechodových stavov ...")
# Normalizuj: premen početnosť na pravdepodobnosť
for r in range(len(matica)):
    for s in range(len(matica[r])):
        matica[r][s] /= pocty[r]


print("Generujem originálny text ...")
text = ""

# Vyber z možných začiatkov začinajúcich veľkým písmenom
zaciatky = []
for retazec in legenda:
    if retazec[0].isupper():
        zaciatky.append(retazec)


vyber = random.randint(0, len(zaciatky) - 1)
ngram = zaciatky[vyber]
text += ngram

# Nájdi stav, v ktorom sme na začiatku
stav = 0
for i in range(len(legenda)):
    if legenda[i] == ngram:
        stav = i
        break


for i in range(dlzka_generuj - 1):
    # Podľa pravdepodobností v danom riadku matice vyber stĺpec a tým aj nový ngram
    uroven = 1.0
    p = random.random()
    # https://stackoverflow.com/questions/3679694/a-weighted-version-of-random-choice
    for j in range(len(matica[r])):
        vaha = matica[stav][j]
        p -= vaha
        if p < vaha:
            ngram = legenda[j]
            stav = j
            text += ngram
            break

print(text)
```
