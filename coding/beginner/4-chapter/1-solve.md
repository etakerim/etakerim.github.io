---
layout: default
title: Náhodné čísla
nav_exclude: true
---

## 1. Hádzanie kockou
```python
import random
input("HOĎ")
kocka = random.randint(1, 6)

if kocka == 1:
	print("+-------+")
	print("|       |")
	print("|   #   |")
	print("|       |")
	print("+-------+")
elif kocka == 2:
	print("+-------+")
	print("| #     |")
	print("|       |")
	print("|     # |")
	print("+-------+")
elif kocka == 3:
	print("+-------+")
	print("| #     |")
	print("|   #   |")
	print("|     # |")
	print("+-------+")
elif kocka == 4:
	print("+-------+")
	print("| #   # |")
	print("|       |")
	print("| #   # |")
	print("+-------+")
elif kocka == 5:
	print("+-------+")
	print("| #   # |")
	print("|   #   |")
	print("| #   # |")
	print("+-------+")
elif kocka == 6:
	print("+-------+")
	print("| #   # |")
	print("| #   # |")
	print("| #   # |")
	print("+-------+")
```

[Späť na úlohu](/coding/beginner/4-chapter/1.html)