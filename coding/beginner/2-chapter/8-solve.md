---
layout: default
title: Podmienky
nav_exclude: true
---

## 8. Kvadratická rovnica
```python
import math

print("Koeficienty kvadratickej rovnice:")
a = float(input("a = "))
b = float(input("b = "))
c = float(input("c = "))

if a == 0:
	print("Ide o lineárnu rovnicu")
else:
	print(f"{a:g}x^2 + {b:g}x + {c:g} = 0")
	D = b ** 2 - 4 * a * c
	if D < 0:
		print("Kvadratická rovnica nemá riešenie v R")
	elif D > 0:
		x1 = (-b - math.sqrt(D)) / (2 * a)
		x2 = (-b + math.sqrt(D)) / (2 * a)
		print(f"x1 = {x1}")
		print(f"x2 = {x2}")
	elif D == 0:
		x = -b / (2 * a)
		print(f"x = {x}")
		Vx = -b / (2 * a)
		Vy = c - ((b ** 2) / (4 * a))
		print(f"V[{Vx}; {Vy}]")
```

[Späť na úlohu](/coding/beginner/2-chapter/8.html)