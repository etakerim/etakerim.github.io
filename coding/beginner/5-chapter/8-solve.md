---
layout: default
title: Reťazce
nav_exclude: true
---

## 8. Akronym
```python
veta = input("Slovné spojenie: ")

skratka = ""
je_medzera = True
for znak in veta:
	if znak.isspace():
		je_medzera = True
	elif je_medzera and znak.isalpha():
		je_medzera = False
		skratka += znak.upper()

print(f"Skratka: {skratka}")
```

[Späť na úlohu](/coding/beginner/5-chapter/8.html)