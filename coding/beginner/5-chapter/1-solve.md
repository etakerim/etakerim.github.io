---
layout: default
title: Reťazce
nav_exclude: true
---

## 1. Vymeň písmeno
```python
text = input("Správa: ")
chyba = input("Za chybné písmeno: ")
nahrada = input("Vymeň: ")

upravene = ""
for pismeno in text:
    if pismeno == chyba:
        upravene += nahrada
    else:
        upravene += pismeno

print("\nOpravené!")
print(upravene)
```

[Späť na úlohu](/coding/beginner/5-chapter/1.html)