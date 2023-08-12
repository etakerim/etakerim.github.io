---
layout: default
title: Podmienky
nav_exclude: true
---

## 7. Chaos v lístkoch
```python
print("Popíš mi svoju cestu s MHD")
zony = int(input("Koľko zón prejdeš?:"))
minuty = int(input("Koľko minút má trvať cesta?:"))

if zony == 2 and minuty <= 30:
	cena = 0.55
elif zony == 3 and minuty <= 60:
	cena = 0.80
elif zony == 4 and minuty <= 60:
	cena = 1.00
elif zony == 5 and minuty <= 90:
	cena = 1.25
elif zony == 6 and minuty <= 90:
	cena = 1.50
elif zony == 7 and minuty <= 120:
	cena = 1.65

print("Zlavnený lístok stojí {cena:.2f} eur.")
```

[Späť na úlohu](/coding/beginner/2-chapter/7.html)