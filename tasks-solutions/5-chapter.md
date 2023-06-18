# Ⅴ. Reťazce a zoznamy - Riešenia


1. **Vymeň písmeno** - Niekto ti posiela správy s diakritikou, ale po ceste sa vždy prekrúti jedno písmeno. Texty obsahujú aj pekné básne, ktoré si chceš vytlačiť a pripnúť na nástenku. Pokazený znak však kazí celkový dojem z diela. Zameň zadané chybné písmeno v celom reťazci.

```python
text = input("Správa: ")
chyba = input("Za chybné písmeno: ")
nahrada = input("Vymeň: ")

upravene = ""
for pismeno in text:
    if pismeno == chyba:
        upravene += nahrada
    else:
        upravene += pismeno

print("\nOpravené!")
print(upravene)
```

---

2. **Cenzúra** - Prišla tvrdá cenzúra s nariadením, že nikto už nesmie vidieť žiadnu samohlásku. Nahraď každý prečin vo vstupnom texte ľubovoľným iným špeciálnym znakom.

```python
vstup = input("Správa: ")
prepis = input("Samohlásku nahraď: ")
vystup = ""

samohlasky = "aeiouyáéíóúý"
najdene = False

for i in range(len(vstup)):
    for j in range(len(samohlasky)):
        if vstup[i] == samohlasky[j]:
            vystup += prepis
            najdene = True
            break

    if not najdene:
        vystup += vstup[i]

    najdene = False

print("Cenzurované", vystup)
```

---

3. **Počítanie slov** - Do redakcie miestnych novín chodia denno denne články, vtipy, poviedky a príbehy zo života od verných čitateľov. Aby mohli byť uverejnené potrebujú sa zmestiť do vyhradeného priestoru. Vypíš počet znakov, slov, viet a normostrán (*=1800 znakov*) pre rýchlejšie spracovanie textov.

```python
clanok = input("Článok: ")

pocet_znakov = 0
pocet_slov = 0
pocet_viet = 0

je_medzera = True

for znak in clanok:
    pocet_znakov += 1

    if znak == ".":
        pocet_viet += 1

    if znak.isspace():
        je_medzera = True
    elif je_medzera and not znak.isspace():
        pocet_slov += 1
        je_medzera = False


print(f"Znaky: {pocet_znakov}")
print(f"Slová: {pocet_slov}")
print(f"Vety: {pocet_viet}")
print(f"Normostany: {int(pocet_znakov / 1800)}")
```

---

4. **Najdlhšie slovo** - Hra staršia ako ľudstvo samo. Debatný spolok usporiadal súťaž o nájdenie najdlhšieho slova, ktoré sa kedy vyskytlo v historických prejavoch. Zaujali ťa odmeny, ale nechce sa ti prehrabávať knižnicou starých záznamníkov a preto si prácu uľahčíš. Nájdi najdlhšie slovo v reťazci.

```python
prejav = input("Rečnícky prejav: ")
slovo = ""
najdlhsie = ""

for znak in prejav:
    if znak.isalpha():
        slovo += znak
    else:
        if len(slovo) > len(najdlhsie):
            najdlhsie = slovo
        slovo = ""

print(f"Najdlhšie slovo v ňom: {najdlhsie}")
```

---

5. **Frekvencia písmen** - Dlho do noci čítaš časopisy o umelej inteligencii a fascinuje ťa jej schopnosť rozprávať sa s človekom. Na vytvorenie viet na danú tému potrebuje mať prehľad o percentuálnom výskyte hlások v texte. Spočítaj a vypíš zoznam frekvencie písmen v reťazci.

```python
clanok = input("Článok: ")
abeceda = [0] * 26
pismena = 0

for pismeno in clanok:
    if pismeno.isalpha():
        pozicia = ord(pismeno.upper()) - ord("A")
        if pozicia >= 0 and pozicia <= 26:
            abeceda[pozicia] += 1
            pismena += 1

for i in range(len(abeceda)):
    pismeno = chr(ord("A") + i)
    vyskyt = 100 * (abeceda[i] / pismena)
    print(f"{pismeno}: {vyskyt:.2f}%")
```

---

6. **Histogram** - Pri svojom predchádzajúceho pokuse s početnosťou písmen si všimneš, že každé ďaľšie písmeno v zozname sa oveľa menej objavuje ako očakávaš. Vykresli hviezdičky namiesto počtu percent a over si tak svoje pozorovanie graficky.

```python
clanok = input("Článok: ")

STO_PERCENT = 100
abeceda = [0] * 26
pismena = 0

for pismeno in clanok:
    if pismeno.isalpha():
        pozicia = ord(pismeno.upper()) - ord("A")
        if pozicia >= 0 and pozicia <= 26:
            abeceda[pozicia] += 1
            pismena += 1

for i in range(len(abeceda)):
    pismeno = chr(ord("A") + i)
    vyskyt = int(STO_PERCENT * (abeceda[i] / pismena))
    print(f"{pismeno}: {'*' * vyskyt}")
```

---

7. **Nákupný košík** - Pri veľkých nákupoch sa často zíde prehľadný zoznam s tým, čo doma treba. Pýtaj si položky s ich cenami až kým sa nerozhodneš, že máš spísané všetko. Zobraz prehľadnú orámovanú tabuľku s údajmi podobne ako na pokladničom bločku (názov tovaru, DPH tovaru, cena tovaru s DPH, celková suma na zaplatenie).

```python
nakup = []

while True:
    tovar = input("Čo kúpiť?: ")

    if tovar == "HOTOVO":
        break

    cena = float(input(f"Cena {tovar}?: "))
    nakup.append([tovar, cena])

riadok = "+" + 20 * "-" + "+" + 15 * "-" + "+" + 15 * "-" + "+"
print(riadok)
print(f"|{'Tovar':20s}|{'DPH':15s}|{'Cena s DPH':15s}|")

celkom = 0

for polozka in nakup:
    tovar = polozka[0]
    cena = polozka[1]
    celkom += cena
    print(riadok)
    print(f"|{tovar:20s}|{cena * 0.2:15.2f}|{cena:15.2f}|")


print(riadok)
print(f"|{'CELKOM':20s}|{celkom * 0.2:15.2f}|{celkom:15.2f}|")
print(riadok)
```

---

8. **Akronym** - SMS-ky rapídne zdraželi a napadlo ti, že bude lepšie posielať slovné spojenia ako skratky. Zo zadaných slov vytvor akronym. Vezmi začiatočné písmená každého slova a vytvor sktatku, ktorá bude pozostávať len z týchto písmen.

```python
veta = input("Slovné spojenie: ")
skratka = ""
je_medzera = True

for znak in veta:
    if znak.isspace():
        je_medzera = True
    elif je_medzera and znak.isalpha():
       je_medzera = False
       skratka += znak.upper()

print(f"Skratka: {skratka}")
```

---

9. **Veľa opakovania** - Roboti rozvážajúci pizzu po meste si zaznamenávajú zmenu smeru pre postupné vylepšovanie trás na lokality k častým zákazníkom. Keďže sa firme darí, prešli roboti už toľko, že sa im všetky záznamy o ich cestách nezmestia do pamäti. Všimneš si, že si značia každý krok a to vedie k častému opakovaniu. Nahraď postupnosť za sebou idúceho písmena, počtom výskytu a písmenom.

```python
cesta = input("Cesta robota: ")
skratene = ""
smer = ""
n = 0

for krok in cesta:
    if krok.isalpha():
        if smer == "":
            smer = krok
            n = 1
        elif krok != smer:
            skratene += f"{n}{smer}"
            smer = krok
            n = 1
        else:
            n += 1
skratene += f"{n}{smer}"

print(f"Skomprimované: {skratene}")
```
