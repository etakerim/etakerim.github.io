---
layout: default
title: Funkcie
nav_exclude: true
---

## 1. Vraky
```python
import random
import math

MIERKA = 15
VRAK_X = random.randint(0, MIERKA)
VRAK_Y = random.randint(0, MIERKA)

def vzdialenost(x, y):
    return math.hypot(x - VRAK_X, y - VRAK_Y)
  
def nasiel(x, y):
    return x == VRAK_X and y == VRAK_Y

print("Sonar hlási potopený parník na dohľad!")
while True:
    suradnice = input("Tvoje súradnice?: ")
    suradnice = suradnice.split(",")
    x = int(suradnice[0])
    y = int(suradnice[1])
    if nasiel(x, y):
        print("Našiel si vrak. Dobrá práca!")
        break
    print(f"Od vraku si {vzdialenost(x, y):.3f} námornych míľ")
```

[Späť na úlohu](/coding/beginner/7-chapter/1.html)