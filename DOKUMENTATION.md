# My Angular Website - Dokumentation

## Installation und Setup

### Voraussetzungen

Du brauchst Node.js und npm. Download von https://nodejs.org (nimm die aktuelle LTS Version).

Nach der Installation in PowerShell überprüfen:
```
node --version
npm --version
```

Du brauchst auch Git. Download von https://git-scm.com und installieren.

### Projekt vorbereiten

```
cd my_angular_project
npm install
```

Das dauert ein paar Minuten. npm lädt alle Dependencies in den `node_modules` Ordner.

Wenn du Code ändern willst, konfiguriere dein Git:
```
git config --global user.name "Dein Name"
git config --global user.email "deine@email.com"
```

## Lokale Entwicklung

Server starten:
```
npm start
```

Dann öffnen: http://localhost:4200

Der Server lädt automatisch neu, wenn du Dateien speicherst.

### Wo bearbeiten?

- **HTML**: `src/components/[name]/[name].html`
- **Styles**: `src/components/[name]/[name].css` oder global in `src/styles.css`
- **Logik**: `src/components/[name]/[name].ts`

Beispiel: Homepage ändern → `src/components/home/home.html` öffnen, Text ändern, speichern.

## Build und Production

Build erstellen:
```
npm run build
```

Das kompiliert alles in den `dist` Ordner. Dauert ein paar Sekunden.

Die `dist` Datei wird nicht zu GitHub gepusht (ist in `.gitignore`), wird aber vom GitHub Actions Workflow automatisch gebaut.

## GitHub Pages - Public machen

Das Projekt ist schon so konfiguriert, dass es automatisch deployed wird.

### Wie es funktioniert

1. Du machst lokale Änderungen
2. Du committest und pushest:
```
git add .
git commit -m "was ich geändert habe"
git push
```

3. GitHub Actions lädt den Code runter
4. Baut die Website mit `npm run build`
5. Deployed den `dist` Ordner zu GitHub Pages

### GitHub Pages einrichten

Gehe zu https://github.com/Damian-der-echte/my-Angular-Website

1. Settings → Pages
2. Build and deployment → Branch auf `gh-pages` setzen
3. Folder auf `/ (root)` setzen
4. Save

Dann ist die Website live unter: https://damian-der-echte.github.io/my-Angular-Website/

Nach dem ersten Push dauert es 2-3 Minuten. Dann sollte die Website oben sein.

## Bilder hinzufügen

Bilder kommen in den `public/` Ordner.

In HTML:
```html
<img src="/my-Angular-Website/home.jpg" alt="beschreibung">
```

Die `baseHref` ist auf `/my-Angular-Website/` eingestellt (in `angular.json`), deshalb müssen die Bildpfade immer vollständig sein.

Wenn du ein neues Bild hinzufügst:
1. In `public/` speichern
2. In der HTML-Datei mit `/my-Angular-Website/bildname.jpg` referenzieren
3. `git add .` und `git push`

## Struktur des Projekts

```
my_angular_project/
├── src/
│   ├── components/
│   │   ├── home/
│   │   ├── faehigkeiten/
│   │   ├── benefits/
│   │   ├── wirtschaftsinformatiker/
│   │   ├── kontakt/
│   │   ├── headers/
│   │   └── footer/
│   ├── app/
│   ├── styles.css
│   └── main.ts
├── public/
│   ├── home.jpg
│   ├── faehigkeiten.png
│   ├── benefits.png
│   ├── wirtschaftsinformatiker.png
│   ├── kontakt.jpg
│   └── favicon.ico
├── dist/
│   └── my_angular_project/ (wird beim Build erstellt)
├── .github/workflows/
│   └── deploy.yml (GitHub Actions Konfiguration)
├── angular.json
├── package.json
└── node_modules/ (nicht committen)
```

## Probleme

### Bilder werden nicht angezeigt

- Ist die Datei im `public/` Ordner?
- Ist der Pfad richtig geschrieben? (Groß- und Kleinschreibung beachten)
- Ist der komplette Pfad verwendet? `/my-Angular-Website/bildname.jpg`
- Öffne DevTools (F12) und schau in Network, ob 404 Fehler gibt

### Website sieht lokal anders aus als auf GitHub

Wahrscheinlich ein Bildpfad-Problem. Überprüfe die img src.

### ng serve / npm start funktioniert nicht

- Hast du `npm install` gemacht?
- Ist Node.js installiert? `node --version`
- Port 4200 blockiert? Versuche `ng serve --port 4201`

### npm install schlägt fehl

Internet überprüfen. Oder:
```
rm -r node_modules
rm package-lock.json
npm install
```

### Deployment läuft nicht

Gehe zu GitHub → Actions und schaue was kaputt ist. Meistens ein Build-Fehler im Code.

## Arbeitsablauf

Normal machst du es so:

```
# 1. Änderungen machen
vim src/components/home/home.html

# 2. Lokal testen
npm start

# 3. Alles gut?
npm run build

# 4. Zu Git
git add .
git commit -m "Homepage aktualisiert"
git push

# 5. Warten bis GitHub Actions fertig ist
# Website ist dann aktualisiert
```

## Weitere Befehle

```
npm start              # Dev server starten
npm run build          # Production build
npm test               # Tests laufen
npm run lint           # Linter checkt Code
```

## Material Design

Das Projekt nutzt Angular Material für UI Komponenten. Doku: https://material.angular.io/

Falls du Material Komponenten benutzen willst, guck dort nach.

## TypeScript

Die `.ts` Dateien sind TypeScript, nicht normales JavaScript. Wenn du dorthin was schreibst, musst du auf Typen achten.

## Git Befehle die du kennen solltest

```
git status                    # Was hat sich geändert?
git add .                     # Alles für Commit vorbereiten
git commit -m "nachricht"     # Committen
git push                      # Zu GitHub pushen
git pull                      # Von GitHub ziehen
git log --oneline             # Commits ansehen
```

## Node Modules nicht committen

Die Datei `.gitignore` sorgt dafür dass `node_modules/` nicht in Git landet. Das ist richtig. Jeder can `npm install` selber machen.

## Fragen?

Schau die GitHub Issues an oder mach selber eine neue.
