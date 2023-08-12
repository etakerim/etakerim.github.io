---
layout: default
title: Cykly
nav_exclude: true
---

## 6. Mriežka slov
```python
n = int(input("Počet riadkov a stĺpcov: "))
slovo = input("Opakovať slovo: ")

for riadok in range(n):
    for stlpec in range(n):
        print(slovo, end=" ")
    print()
```

[Späť na úlohu](/coding/beginner/3-chapter/6.html)