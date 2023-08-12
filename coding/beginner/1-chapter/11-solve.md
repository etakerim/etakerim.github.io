---
layout: default
title: Premenné
nav_exclude: true
---

## 11. Brzdenie

```python
import math

print("Vlaková súprava")
v = int(input("- Rýchlosť (km/h): "))
lokomotiva = float(input("- Hmotnosť lokomotívy (t): "))
vagon = float(input("- Hmotnosť vagóna (t): "))
pocet_vagonov = int(input("- Počet vagónov: "))
F_b = int(input("- Brzdná sila (N/t): "))

# Premeň jednotky na základné SI
v /= 3.6
lokomotiva *= 1000
vagon *= 1000
F_b /= 1000

# Hmotnosť súpravy je hmotnosť lokomotívy a všetkých vagónov
m = lokomotiva + (pocet_vagonov * vagon)
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

print(f"Vlaková súprava má hmotnosť {int(m / 1000)} ton.")
print(f"V rýchlosti {int(v * 3.6)} km/h zabrzdí na vzdialnosť {int(s)} metrov.")
print(f"Brzdenie bude trvať {int(t)} sekúnd.")
```

[Späť na úlohu](/coding/beginner/1-chapter/11.html)
