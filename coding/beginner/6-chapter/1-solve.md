---
layout: default
title: Súbory
nav_exclude: true
---

## 1. Prepisovanie
```python
nazov_suboru = input("Názov súboru")
subor = open(nazov_suboru, "r")
for riadok in subor:
    riadok = riadok.strip()
    ...
subor.close()
```

[Späť na úlohu](/coding/beginner/6-chapter/1.html)