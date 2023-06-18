---
layout: default
title: Premenné - Riešenia
nav_exclude: true
---


# I. Premenné - Riešenia


## 1. Pozdrav
```python
meno = input("Ako sa voláš?: ")
print("Ahoj " + meno)
```

## 2. Básnik
```python
slovo = input("Napíš slovo, ktoré sa rýmuje so slovom strach: ")
print("Tu je báseň:")
print(f"Z počítačov mával som vždy strach\n"
      f"teraz som však šťastný ako {slovo}.")
```

## 3. Pozvánka
```python
meno = input("Meno kamaráta: ")
cas = input("Čas oslavy: ")
vec = input("Prines: ")
jedlo = input("Jedlo: ")

sprava = (
    f"Ahoj {meno},\n"
    f"pozývam ťa na moju narodeninovú oslavu, ktorá sa bude konať 12.4. "
    f"o {cas}.\nNezabudni si priniesť {vec} a pekný darček. Na večeru ťa "
    f"čaká {jedlo} a samozrejme lahodná torta.\nTeším sa na teba! :) "
)

print(sprava)
```

## 4. Prevod jednotiek teploty
```python
f = input("Vonku je °F: ")
f = float(f)
c = (5 / 9) * (f - 32)
print(f"Doma by to bolo {c:.2f}°C.")
```


## 5. Hlboká roklina
```python
g = 9.81
t = input("Čas dopadu kameňa (s): ")
t = int(t)
h = (g * (t ** 2)) / 2
print("Hĺbka rokliny je potom", h, "metrov")
```


## 6. Vedro s vodou
```python
pi = 3.14159
v = input("Výška vedra (cm): ")
d = input("Priemer dna (cm): ")
v = int(v)
d = int(d)

V = pi * ((d / 2) ** 2)
V = V / 1000
print("Do vedra sa zmestí", V, "litrov vody.")
```


## 7. Cesta autom
```python
km = input("Dĺžka cesty (km): ")
odchod = input("Odchod z domu (hodina): ")
prichod = input("Príchod do hotela (hodina): ")

km = float(km)
odchod = int(odchod)
prichod = int(prichod)

hod = prichod - odchod
print(f"Pôjdete priemerne {km / hod:.2f} km/h.")
```


## 8. Kúpalisko
```python
dlzka = input("Dĺžka bazéna (m): ")
sirka = input("Šírka bazéna (m): ")
hlbka = input("Hĺbka bazéna (m): ")
okraj = input("Hĺbka hladiny od okraja (cm): ")
cena = input("Cena za m³ vody v €: ")

dlzka = float(dlzka)
sirka = float(sirka)
hlbka = float(hlbka)
okraj = int(okraj)
cena = float(cena)

V = dlzka * sirka * (hlbka - (okraj / 100))

print(f"Na bazén sa minie {V * 1000} litrov vody a bude to stáť {cena * V} €.")
```


## 9. Maľovanie
```python
# Získaj z klávesnice rozmery miestnosti
print("Rozmery miestnosti")
dlzka = input("Dĺžka (cm): ")
sirka = input("Širka (cm): ")
vyska = input("Výška (cm): ")

# Premeň z písmen na čísla
dlzka = int(dlzka)
sirka = int(sirka)
vyska = int(vyska)

# Získaj z klávesnice rozmery okna a výdatnosť farby
print("Rozmery okna")
okno_sirka = input("Širka (cm): ")
okno_vyska = input("Výška (cm): ")
vydatnost = input("Výdatnosť farby (m²/kg): ")

# Premeň z písmen na čísla
okno_sirka = int(okno_sirka)
okno_vyska = int(okno_vyska)
vydatnost = float(vydatnost)

# Spočítaj plochy stien, stropu a odpočítaj plochu okna
S_miestnost = (dlzka * sirka) + 2 * (vyska * sirka) + 2 * (vyska * dlzka)
S_okno = okno_sirka * okno_vyska

S = (S_miestnost - S_okno) / 10000
kg_farba = S / vydatnost

print(f"Maľovať budeš plochu {S:.2f} m². Kúp {kg_farba:.2f} kg farby.")
```


## 10. Brzdenie
```python
import math


M_CLOVEK = 80

print("Vlaková súprava")

v = int(input("- Rýchlosť (km/h): "))
lokomotiva = float(input("- Hmotnosť lokomotívy (t): "))
vagon = float(input("- Hmotnosť vagóna (t): "))

pocet_vagonov = int(input("- Počet vagónov: "))
pocet_cestujucich = int(input("- Počet miest na vagón: "))
naplnenie = int(input("- Zaplnenosť vlaku (%): "))
F_b = int(input("- Brzdná sila (N/t): "))

# Premeň jednotky na základné SI
v /= 3.6
lokomotiva *= 1000
vagon *= 1000
F_b /= 1000

# Hmotnosť súpravy je hmotnosť lokomotívy, všetkých vagónov a ľudí
m = (lokomotiva +
     (pocet_vagonov * vagon) +
     M_CLOVEK * (pocet_vagonov * pocet_cestujucich) * (naplnenie / 100))

# Vypočítaj celkovú kinetickú energiu, tá je rovnaká ako práca
# ktorú musia brzdy vykonať na zabrzdenie.
W = 0.5 * m * (v ** 2)

# Celková sila pôsobiaca proti pohybu vlaku
F = F_b * m

# Z definície práce W = F * s, vypočítaj dráhu potrebnú na zastavenie
s = W / F

# Vypočítaj čas potrebný na zastavenie pre rovnomerný spomalený pohyb
a = F / m
t = math.sqrt(2 * s / a)

print(f"V rýchlosti {int(v * 3.6)} km/h zabrzdí súprava s hmotnosťou "
      f"{int(m / 1000)} t na vzdialnosť {int(s)} m a bude to "
      f"trvať {int(t)} s.")
```

