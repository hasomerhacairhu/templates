# Sablon generátor repository

Ez a repository automata levelekhez és dokumentumokhoz szükséges sablonokat tartalmaz. A sablonok moduláris, dinamikus elemekből épülnek fel, amelyekből statikus HTML fájlok generálhatók. Ezeket a statikus sablonokat külső dokumentum renderelők használják.

## Mappastruktúra
- `dynamic_templates/` – Dinamikus, moduláris sablon-elemek és fő sablonok
- `static/` – Kézzel szerkesztett, statikus sablonok (legacy)
- `output/` – Generált statikus sablonok, amiket a külső rendszerek használnak

## Használat

1. **Virtuális környezet létrehozása**

Windows PowerShell-ben:
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

2. **Függőségek telepítése**

```powershell
pip install -r requirements.txt
```

3. **Sablonok generálása**

```powershell
python generate_templates.py
```

A generált sablonok az `output/` mappába kerülnek.

## Szerkesztés
- Új sablon-elemeket a `dynamic_templates/` mappában lehet létrehozni.
- A fő sablonok Jinja2 szintaxist használnak, így könnyen bővíthetők és testreszabhatók.

---
Kérdés vagy hibajelentés esetén keresd a fejlesztői csapatot.
