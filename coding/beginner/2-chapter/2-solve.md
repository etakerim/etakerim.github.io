---
layout: default
title: Podmienky
nav_exclude: true
---

## 2. Najväčšie číslo
```python
x = input("1.skóre: ")
y = input("2.skóre: ")
z = input("3.skóre: ")

x = int(x)
y = int(y)
z = int(z)

najviac = x
poradie = 1
if y > najviac:
    najviac = y
    poradie = 2
if z > najviac:
    najviac = z
    poradie = 3

print(f"Najväčie skóre {najviac} bodov má {poradie} hráč.")
```

[Späť na úlohu](/coding/beginner/2-chapter/2.html)