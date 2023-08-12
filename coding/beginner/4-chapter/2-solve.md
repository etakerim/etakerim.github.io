---
layout: default
title: Náhodné čísla
nav_exclude: true
---

## 2. Hádaj číslo
```python
import random

hadaj = random.randint(1, 100)

while True:
	tip = int(input("Hádaj číslo: "))
	if tip > hadaj:
		print("Veľa")
	elif tip < hadaj:
        print("Málo")
    else:
        print("Uhádol si")
        break
```

[Späť na úlohu](/coding/beginner/4-chapter/2.html)