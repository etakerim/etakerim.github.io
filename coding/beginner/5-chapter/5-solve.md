---
layout: default
title: Reťazce
nav_exclude: true
---

## 5. Frekvencia písmen
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

for i in range(len(abecedaReťazce a zoznamy - Riešenia)):
    pismeno = chr(ord("A") + i)
    vyskyt = 100 * (abeceda[i] / pismena)
    print(f"{pismeno}: {vyskyt:.2f}%")
```

[Späť na úlohu](/coding/beginner/5-chapter/5.html)