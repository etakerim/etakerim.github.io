---
layout: default
title: Reťazce
nav_exclude: true
---

## 4. Najdlhšie slovo
```python
prejav = input("Rečnícky prejav: ")
slovo = ""
najdlhsie = ""

for znak in prejav:
    if znak.isalpha():
        slovo += znak
    else:
        if len(slovo) > len(najdlhsie):
            najdlhsie = slovo
        slovo = ""

print(f"Najdlhšie slovo v ňom: {najdlhsie}")
```

[Späť na úlohu](/coding/beginner/5-chapter/4.html)