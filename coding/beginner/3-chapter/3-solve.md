---
layout: default
title: Cykly
nav_exclude: true
---

## 3. Pyramída
```python
vyska = int(input("Výška pyramídy: "))
for riadok in range(vyska):
    medzery = vyska - riadok - 1
    hviezdy = 2 * riadok + 1
    print(" " * medzery + "*" * hviezdy)
```

[Späť na úlohu](/coding/beginner/3-chapter/3.html)