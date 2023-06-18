# Ⅳ. Náhodné čísla - Riešenia


1. **Hádzanie kockou** - Vytvorte simuláciu hodu kockou. Po stlačení klávesy Enter sa nakreslí kocka s padnutým číslom.

```python
import random

while True:
    input("HOĎ")
    kocka = random.randint(1, 6)

    if kocka == 1:
        print("+-------+\n"
              "|       |\n"
              "|   #   |\n"
              "|       |\n"
              "+-------+")
    elif kocka == 2:
        print("+-------+\n"
              "| #     |\n"
              "|       |\n"
              "|     # |\n"
              "+-------+")
    elif kocka == 3:
        print("+-------+\n"
              "| #     |\n"
              "|   #   |\n"
              "|     # |\n"
              "+-------+")
    elif kocka == 4:
        print("+-------+\n"
              "| #   # |\n"
              "|       |\n"
              "| #   # |\n"
              "+-------+")
    elif kocka == 5:
        print("+-------+\n"
              "| #   # |\n"
              "|   #   |\n"
              "| #   # |\n"
              "+-------+")
    elif kocka == 6:
        print("+-------+\n"
              "| #   # |\n"
              "| #   # |\n"
              "| #   # |\n"
              "+-------+")
```

---

2. **Hádaj číslo** - Náhodne vyber číslo s rozsahu medzi 0 a 100 a nechaj hráča hádať dokým neuhádne. Pri tom mu poskytni nápovedy, či je jeho tip priveľa alebo primalo. Zakomponuj rôzne obtiažnosti s možnosťou nastavenia rozsahu alebo maximálnym počtom tipov.

```python
import random

hadaj = random.randint(1, 100)

while True:
    tip = int(input("Hádaj číslo: "))

    if tip > hadaj:
        print("Veľa")
    elif tip < hadaj:
        print("Málo")
    else:
        print("Uhádol si")
        break
```

---


3. **Opakovanie násobilky** - Vďaka tvojej tabuľke malej násobilky sa malý školáci mohli naučiť násobiť. Ako dobre to vedia, musíš teraz odtestovať. Vygeneruj dve čísla od 1 do 10 do príkladu na násobenie. Over správnosť žiačikovej odpovede.

```python
import random

while True:
    x = random.randint(1, 10)
    y = random.randint(1, 10)
    print(f"\nKoľko je {x} x {y}?")
    vysledok = int(input("= "))

    while vysledok != x * y:
        print("Nesprávne - hádaj znovu")
        vysledok = int(input("= "))

    print("Správne - len tak ďalej")

    pokracuj = input("Chceš ďaľší príklad? (a / n): ")
    if pokracuj == 'n':
        break
```
