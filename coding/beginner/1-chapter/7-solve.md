---
layout: default
title: Premenné
nav_exclude: true
---

## 7. Cesta autom

```python
km = input("Dĺžka cesty (km): ")
odchod = input("Odchod z domu (hodina): ")
prichod = input("Príchod do hotela (hodina): ")

km = float(km)
odchod = int(odchod)
prichod = int(prichod)
hod = prichod - odchod

print(f"Auto pôjde priemernou rýchlosťou {km / hod:.2f} km/h.")
```

[Späť na úlohu](/coding/beginner/1-chapter/7.html)
