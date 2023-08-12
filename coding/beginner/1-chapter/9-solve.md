---
layout: default
title: Premenné
nav_exclude: true
---

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
sirkaOkna = input("Širka (cm): ")
vyskaOkna = input("Výška (cm): ")
vydatnost = input("Výdatnosť farby (m^2/kg): ")

# Premeň z písmen na čísla
sirkaOkna = int(sirkaOkna)
vyskaOkna = int(sirkaOkna)
vydatnost = float(vydatnost)

# Spočítaj plochy stien, stropu a odpočítaj plochu okna
PlochaMiestnost = \
(dlzka * sirka) + 2 * (vyska * sirka) + 2 * (vyska * dlzka)
PlochaOkno = sirkaOkna * vyskaOkna
S = (PlochaMiestnost - PlochaOkno) / 10000
farbaKg = S / vydatnost

print(f"Maľovať budeš plochu {S:.2f} m2.")
print(f"Kúp {farbaKg:.2f} kg farby.")
```

[Späť na úlohu](/coding/beginner/1-chapter/9.html)

