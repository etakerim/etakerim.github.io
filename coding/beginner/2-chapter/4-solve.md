---
layout: default
title: Podmienky
nav_exclude: true
---

## 4. Morský vánok
```python
stupen = input("Sila vetra na Beaufortovej stupnici: ")
stupen = int(stupen)

if stupen == 0:
	nazov = "bezvetrie"
	rychlost = 0
	vlny = 0
elif stupen == 1:
	nazov = "vánok"
	rychlost = 2
	vlny = 0.1
elif stupen == 2:
	nazov = "slabý vietor"
	rychlost = 5
	vlny = 0.2
# Doplň ostatné stupne podľa Beafortovej stupnice

print(f"Vietor sa nazýva {nazov}.")
print(f"Vietor má rýchlosť {rychlost} kt.")
print(f"Očakávaná výška vĺn je {vlny} m.")
```

[Späť na úlohu](/coding/beginner/2-chapter/4.html)