---
layout: default
title: Cykly - Riešenia
nav_exclude: true
---

# Ⅲ. Cykly - Riešenia


## 1. 100-krát napíš

```python
veta = input("Musím napísať: ")
pocet = int(input("Toľkoto krát: "))

for i in range(pocet):
    print(veta)
```

## 2. Hodnotenie

```python
skore = int(input("Skóre: "))

for i in range(skore):
    print("*", end="")
print()
```


## 3. Pyramída

```python
vyska = int(input("Výška pyramídy: "))
print()

for riadok in range(vyska):
    medzery = vyska - riadok - 1
    hviezdy = 2 * riadok + 1
    print(" " * medzery + "*" * hviezdy)
```

## 4. Smaragd

```python
vyska = int(input("Veľkosť: "))

if vyska < 3 or vyska % 2 != 1:
    print("Neviem vytvoriť taký smaragd")
else:
    vyska = (vyska // 2) + 1

    # Horná časť
    for riadok in range(vyska):
        medzery = vyska - riadok - 1
        hviezdy = 2 * riadok + 1
        print(" " * medzery + "*" * hviezdy)

    # Dolná časť
    for riadok in range(1, vyska):
        medzery = riadok
        hviezdy = 2 * (vyska - riadok) - 1
        print(" " * medzery + "*" * hviezdy)
```


## 5. Duté vnútro

```python
vyska = int(input("Výška pyramídy: "))
print()

for riadok in range(vyska):
    medzery = vyska - riadok - 1
    dute = 2 * riadok - 1

    print(" " * medzery, end="")
    if riadok == 0:
        print("*")
    elif riadok == vyska - 1:
        print("*" * (dute + 2))
    else:
        print("*" + " " * dute + "*")
```

```python
vyska = int(input("Veľkosť: "))

if vyska < 3 or vyska % 2 != 1:
    print("Neviem vytvoriť taký smaragd")

else:
    vyska = (vyska // 2) + 1

    # Horná časť
    for riadok in range(vyska):
        medzery = vyska - riadok - 1
        dute = 2 * riadok - 1

        print(" " * medzery, end="")
        if riadok == 0:
            print("*")
        else:
            print("*" + " " * dute + "*")

    # Dolná časť
    for riadok in range(1, vyska):
        medzery = riadok
        dute = 2 * (vyska - riadok) - 3

        print(" " * medzery, end="")
        if riadok == vyska - 1:
            print("*")
        else:
            print("*" + " " * dute + "*")
```


## 6. Mriežka slov

```python
n = int(input("Počet riadkov a stĺpcov: "))
slovo = input("Opakovať slovo: ")

for riadok in range(n):
    for stlpec in range(n):
        print(slovo, end=" ")
    print()
```


## 7. Rám

```python
n = int(input("Počet riadkov a stĺpcov: "))
slovo = input("Opakovať slovo: ")
ram = len(slovo) * "#"

for riadok in range(n):
    for stlpec in range(n):
        if riadok == 0 or stlpec == 0 or riadok == n - 1 or stlpec == n - 1:
            print(ram, end=" ")
        else:
            print(slovo, end=" ")
    print()
```


## 8. Malá násobilka

```python
for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i * j:3d}", end=" ")
    print()
```


## 9. Sporenie

```python
vklad = float(input("Vklad v €: "))
sadzba = float(input("Úroková sadzba p.a. v %: "))
urocenie = input("Typ úročenia (jednoduché / zložené): ")
ciel = float(input("Žiadaná suma v €: "))

sadzba /= 100
rok = 0
suma = vklad

if urocenie == "jednoduché":
    urok = vklad * sadzba
if urocenie == "zložené":
    sadzba += 1
    povodna_sadzba = sadzba

print(f"{'Mesiac':10s} {'Suma':15s} {'Úrok':10s}")

while suma < ciel:
    if urocenie == "jednoduché":
        suma += urok
    elif urocenie == "zložené":
        urok = suma * (sadzba - 1)
        suma = vklad * sadzba
        sadzba *= povodna_sadzba
    else:
        break
    rok += 1
    print(f"{rok:10d} {suma:15.2f} {urok:10.2f}")
```

