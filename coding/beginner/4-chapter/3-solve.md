---
layout: default
title: Náhodné čísla
nav_exclude: true
---

## 3. Opakovanie násobilky
```python
import random

while True:
    x = random.randint(1, 10)
    y = random.randint(1, 10)
    print(f"Koľko je {x} x {y}?")
    vysledok = int(input("= "))

    while vysledok != x * y:
        print("Nesprávne - hádaj znovu")
        vysledok = int(input("= "))

    print("Správne - len tak ďalej")
    pokracuj = input("Chceš ďaľší príklad? (a / n): ")
    if pokracuj == 'n':
        break
```

[Späť na úlohu](/coding/beginner/4-chapter/3.html)