### Ⅱ. Podmienky - Riešenia



1. **Heslo** - Tvoj dom na strome už vykradlo pár nezvaných návštevníkov a preto si vymyslel spôsob ako dovoliť návštevu len povoleným osobám, ktoré poznajú tajné heslo.

```python
print("Stoj! Povedz Heslo!")
pokus = input("> ")

if pokus == "tajne heslo":
    print("Vstúp, priateľ")
else:
    print("Zmizni kade ľahšie")
```

---

2. **Najväčšie číslo** - Získaj tri čísla a zisti, ktoré z nich je najväčšie.

```python
x = int(input("1.číslo: "))
y = int(input("2.číslo: "))
z = int(input("3.číslo: "))

najviac = x
poradie = 1

if y > najviac:
    najviac = y
    poradie = 2

if z > najviac:
    najviac = z
    poradie = 3

print(f"Najväčie je {poradie}.číslo a to je {najviac}.")
```

---

3. **Vhodné oblečenie** - Módny poradcovia vyšli z módy a ich prácu prebrali počítače. Na základe počasia a príležitosti odporúčajú vhodný outfit. Vymysli pár tipov pre rôzne situácie a začni radiť.

```python
# TODO
```

---


4. **Pokazený rozpis** -  Podnik spracujúci rudu dostal časový rozpis trvania jednotlivých krokov vylepšeného technologického procesu. Činnosti zvyčajne trvajú dlhšie ako hodinu, nehodí sa im teda mať časy napísané iba ako údaj v minútach. Tvojou úlohou je rozpísať minúty na dni, hodiny, minúty pre jednoduchšie čítanie rozpisu. Vynechajte nepotrebné časové údaje.

```python
min = int(input("Trvanie (min.): "))

hod = min // 60
dni = hod // 24

hod -= dni * 24
min -= (hod * 60) + (dni * 24 * 60)

print("=", end=" ")
if dni > 0:
    print(f"{dni} d.", end=" ")
if hod > 0:
    print(f"{hod} hod.", end=" ")

print(f"{min} min.")
```

---


5. **Hovoriaca kalkulačka** - Výpočty neboli nikdy väčšia zábava, teda aspoň s kalkulačkou, ktorá namiesto čudných matematických znamienok hovorí ľudskou rečou. Vytvorte kalkulačku, ktorá si vypýta dve čísla a vie ich sčítať alebo odčítať.

```python
print("Som hovorica kalkulačka a rada počítam!")
a = int(input("Povedz mi prvé číslo: "))
b = int(input("Potrebujem ďašie číslo: "))
cinnost = input("Chceš ich sčítať alebo odčítať: ")

if cinnost == "sčítať":
    print(f"Výsledok tvojho príkladu: {a} plus {b} je {a + b}")
elif cinnost == "odčítať":
    print(f"Výsledok tvojho príkladu: {a} mínus {b} je {a - b}")
else:
    print(f"Neviem čo znamená '{cinnost}'")
```

---


6. **Kvadratická rovnica** - Pre zadané koeficienty `a`, `b`, `c` kvadratickej rovnice `ax² + bx + c = 0`  vypočítajte jej korene v obore reálnych čísel a vrchol paraboly daného predpisu.

```python
import math

a = float(input("a = "))
b = float(input("b = "))
c = float(input("c = "))

if a == 0:
    print("Ide o lineárnu rovnicu")
else:
    print(f"\n{a:g}x² + {b:g}x + {c:g} = 0")
    D = b ** 2 - 4 * a * c

    if D < 0:
        print("Kvadratická rovnica nemá riešenie v R")
    else:
        if D > 0:
            x1 = (-b - math.sqrt(D)) / (2 * a)
            x2 = (-b + math.sqrt(D)) / (2 * a)
            print(f"x₁ = {x1}")
            print(f"x₂ = {x2}")
        elif D == 0:
            x = -b / (2 * a)
            print(f"x = {x}")

        Vx = -b / (2 * a)
        Vy = c - ((b ** 2) / (4 * a))
        print(f"V[{Vx}; {Vy}]")
```

---


7. **Trojuholníky**

   *a)* Mýtická bytosť stredoškolskej matematiky, o ktorej je vždy treba zistiť, čo najviac bez rysovania, aj keď chýbajú rozmery. Ak je možné, doplň chýbajúce informácie pre ľubovoľný trojuholník (zadaný ako SSS) ako sú dĺžky strán a výšok, veľkosti uhlov, obsah a obvod. Využite trojuholníkoú nerovnosť, sínus(ovú) vetu, kosínus(ovú) vetu a vzorec na výpočet obsahu trojuholníkov.

   *b)* Rozšírte vypočet aj pre ostatné vety o trojuholníkoch: SUS, USU, UUS


```python
import math

print("Zadajte strany ľubovolného trojuholníka:")
a = input("a = ")
b = input("b = ")
c = input("c = ")

if a != "" and b != "" and c != "":
    a = float(a)
    b = float(b)
    c = float(c)
    if a + b <= c:
        print("Pre trojuholník neplatí trojuholníková nerovnosť")
        print("a + b ≤ c")
        print(f"{a} + {b} ≤ {c}")
    elif a + c <= b:
        print("Pre trojuholník neplatí trojuholníková nerovnosť")
        print("a + c ≤ b")
        print(f"{a} + {c} ≤ {b}")
    elif b + c <= a:
        print("Pre trojuholník neplatí trojuholníková nerovnosť")
        print("b + c ≤ a")
        print(f"{b} + {c} ≤ {a}")
    else:
        alpha = math.acos((a**2 - b**2 - c**2) / (-2*b*c))
        beta = math.acos((b**2 - a**2 - c**2) / (-2*a*c))
        gamma = math.acos((c**2 - a**2 - b**2) / (-2*a*b))

        va = c * math.sin(beta)
        vb = a * math.sin(gamma)
        vc = b * math.sin(alpha)

        alpha = math.degrees(alpha)
        beta = math.degrees(beta)
        gamma = math.degrees(gamma)

        print(f"\nStrany: a = {a}; b = {b}; c = {c}")
        print(f"Uhly: 𝛂 = {alpha}°; 𝛃 = {beta}°; 𝛄 = {gamma}°")
        print(f"Výšky: v(a) = {va}; v(b) = {vb}; v(c) = {vc}")
        print(f"O = {a + b + c}")
        print(f"S = {a * va * 0.5}")

        print("Trojuholník je:", end=" ")
        if a == b == c:
            print("Rovnostranný", end=", ")
        elif a == b or b == c or c == a:
            print("Rovnoramenný", end=", ")
        else:
            print("Rôznostranný", end=", ")

        if alpha < 90 and beta < 90 and gamma > 90:
            print("Ostrouhlý")
        elif alpha > 90 or beta > 90 or gamma > 90:
            print("Tupouhlý")
        else:
            print("Pravouhlý")
```

