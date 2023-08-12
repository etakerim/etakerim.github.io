## 8. Kúpalisko

```python
dlzka = input("Dĺžka bazéna (m): ")
sirka = input("Šírka bazéna (m): ")
hlbka = input("Hĺbka bazéna (m): ")
okraj = input("Hĺbka hladiny od okraja (cm): ")
cena = input("Cena za m^3 vody v eurách: ")

dlzka = float(dlzka)
sirka = float(sirka)
hlbka = float(hlbka)
okraj = int(okraj)
cena = float(cena)
V = dlzka * sirka * (hlbka - (okraj / 100))
V *= 1000
cena = cena * V

print(f"Na bazén sa minie {V} litrov vody")
print(f"Voda bude to stáť {cena} eur.")
```

[Späť na úlohu](/coding/beginner/1-chapter/8.html)
