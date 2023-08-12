---
layout: default
title: Reťazce
nav_exclude: true
---

## 2. Cenzúra
```python
vstup = input("Správa: ")
prepis = input("Samohlásku nahraď: ")
vystup = ""
samohlasky = "aeiouyáéíóúý"
najdene = False

for i in range(len(vstup)):
    for j in range(len(samohlasky)):
        if vstup[i] == samohlasky[j]:
            vystup += prepis
            najdene = True
            break
    if not najdene:
        vystup += vstup[i]
    najdene = False
 
print("Cenzurované", vystup)
```

[Späť na úlohu](/coding/beginner/5-chapter/2.html)