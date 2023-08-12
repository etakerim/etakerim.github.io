---
layout: default
title: Podmienky
nav_exclude: true
---

## 9. Trojuholníky
```python
import math

print("Zadajte strany ľubovolného trojuholníka:")
a = input("a = ")
b = input("b = ")
c = input("c = ")

a = float(a)
b = float(b)
c = float(c)

if a + b <= c:
	print("Pre trojuholník neplatí trojuholníková nerovnosť")
	print("a + b <= c")
	print(f"{a} + {b} <= {c}")
elif a + c <= b:
	print("Pre trojuholník neplatí trojuholníková nerovnosť")
	print("a + c <= b")
	print(f"{a} + {c} <= {b}")
elif b + c <= a:
	print("Pre trojuholník neplatí trojuholníková nerovnosť")
	print("b + c <= a")
	print(f"{b} + {c} <= {a}")
else:
	alpha = math.acos((a**2 - b**2 - c**2) / (-2*b*c))
	beta = math.acos((b**2 - a**2 - c**2) / (-2*a*c))
	gamma = math.acos((c**2 - a**2 - b**2) / (-2*a*b))

	va = c * math.sin(beta)
	vb = a * math.sin(gamma)
	vc = b * math.sin(alpha)

	alpha = math.degrees(alpha)
	beta = math.degrees(beta)
	gamma = math.degrees(gamma)

    print(f"\nStrany: a = {a}; b = {b}; c = {c}")
    print(f"Uhly: alpha = {alpha}°; beta = {beta}°; gamma = {gamma}°")
    print(f"Výšky: v(a) = {va}; v(b) = {vb}; v(c) = {vc}")
    print(f"O = {a + b + c}")
    print(f"S = {a * va * 0.5}")

        print("Trojuholník je:", end=" ")
        if a == b == c:
            print("Rovnostranný", end=", ")
        elif a == b or b == c or c == a:
            print("Rovnoramenný", end=", ")
        else:
            print("Rôznostranný", end=", ")

	if alpha < 90 and beta < 90 and gamma > 90:
		print("Ostrouhlý")
	elif alpha > 90 or beta > 90 or gamma > 90:
		print("Tupouhlý")
	else:
        print("Pravouhlý")
```

[Späť na úlohu](/coding/beginner/2-chapter/9.html)