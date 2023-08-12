---
layout: default
title: Podmienky
nav_exclude: true
---

## 5. Pokazený rozpis
```python
min = input("Trvanie (min.): ")
min = int(min)

hod = min // 60
dni = hod // 24
hod -= dni * 24
min -= (hod * 60) + (dni * 24 * 60)

print("=", end=" ")
if dni > 0:
    print(f"{dni} d.", end=" ")
if hod > 0:
    print(f"{hod} hod.", end=" ")

print(f"{min} min.")
```

[Späť na úlohu](/coding/beginner/2-chapter/5.html)