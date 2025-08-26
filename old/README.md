# Sablon generátor repository

Ez a repository automata levelekhez és dokumentumokhoz szükséges sablonokat tartalmaz. A sablonok moduláris, dinamikus elemekből épülnek fel, amelyekből statikus HTML fájlok generálhatók. Ezeket a statikus sablonokat külső dokumentum renderelők használják.

````markdown
# Sablon generátor repository

Ez a repository az automata levelekhez és dokumentumokhoz szükséges sablonokat tartalmazza. A sablonok moduláris, dinamikus elemekből épülnek fel, amelyeket a Maizzle (Node.js) build folyamata fordít statikus, e-mail-barát HTML fájlokká.

## Mappastruktúra
- `dynamic_templates/` – Dinamikus, Maizzle/Nunjucks sablonok és komponensek
- `static/` – Statikus assetek (képek, egyéb források)
- `output/` – Generált statikus sablonok, amiket a külső rendszerek használnak

## Használat (Node.js + Maizzle)

Előfeltétel: Node.js (14+ javasolt) és npm.

1. Node.js verzió ellenőrzése (PowerShell):

```powershell
node -v
npm -v
```

2. Függőségek telepítése (a projekt gyökérkönyvtárában):

```powershell
npm install
```

3. Sablonok buildelése (maizzle -> `output/`):

```powershell
npm run build
```

4. Fejlesztői (watch) mód, élő szerver Maizzle-lal:

```powershell
npm run watch
```

A Maizzle konfigurációját a `maizzle.config.js` fájl tartalmazza; a build eredménye a `output/` mappába kerül.

## Szerkesztés
- Új sablonok és komponensek létrehozása: `dynamic_templates/` (használj `.njk` / Nunjucks fájlokat vagy Maizzle által támogatott szintaxist).
- Statikus assetek: `static/` mappa (maizzle.assets beállítás szerint kerül felhasználásra).

## Hibakeresés
- Ha a `maizzle` parancs nem található, győződj meg róla, hogy lefuttattad az `npm install`-t a projekt gyökérkönyvtárában.
- Windows PowerShell exekúciós szabályok általában nem érintik a Node parancsokat; nem kell Python virtuális környezetet létrehozni.

---
Kérdés vagy hibajelentés esetén keresd a fejlesztői csapatot.

````
