# Dokumentation: My Angular Website - Wirtschaftsinformatiker Portfolio

Dieses Dokument beschreibt detailliert, wie du das Projekt "My Angular Website" installierst, entwickelst und auf GitHub öffentlich machst.

---

## Inhaltsverzeichnis

1. [Voraussetzungen](#voraussetzungen)
2. [Installation](#installation)
3. [Projektstruktur](#projektstruktur)
4. [Lokale Entwicklung](#lokale-entwicklung)
5. [Bauen und Kompilieren](#bauen-und-kompilieren)
6. [Deployment auf GitHub Pages](#deployment-auf-github-pages)
7. [Bilder und Assets](#bilder-und-assets)
8. [Häufig gestellte Fragen (FAQ)](#häufig-gestellte-fragen-faq)
9. [Fehlerbehandlung](#fehlerbehandlung)

---

## Voraussetzungen

Bevor du mit diesem Projekt arbeiten kannst, benötigst du folgende Software auf deinem Computer:

### 1. Node.js und npm

**Was ist das?**
- **Node.js**: Eine JavaScript-Laufzeitumgebung, die es dir ermöglicht, JavaScript außerhalb des Browsers auszuführen
- **npm**: Node Package Manager – ein Paketmanager für JavaScript, mit dem du Abhängigkeiten installieren kannst

**Installation:**

1. Öffne die offizielle Website: https://nodejs.org/
2. Lade die neueste LTS-Version herunter (mindestens Version 18.0.0)
3. Starte das Installationsprogramm und folge den Anweisungen
4. Während der Installation: Stelle sicher, dass die Optionen „npm package manager" und „Add to PATH" ausgewählt sind
5. Nach der Installation: Starten Sie deinen Computer neu

**Überprüfung der Installation:**

Öffne die Eingabeaufforderung (PowerShell oder Command Prompt) und gib folgende Befehle ein:

```bash
node --version
npm --version
```

Du solltest Versionsnummern sehen (z.B. v18.17.0 und 9.6.7). Wenn dies der Fall ist, ist die Installation erfolgreich.

### 2. Git

**Was ist das?**
Git ist ein Versionskontrollsystem, das es dir ermöglicht, deine Codeänderungen zu verfolgen und mit anderen zusammenzuarbeiten.

**Installation:**

1. Öffne die offizielle Website: https://git-scm.com/
2. Lade das Installationsprogramm für Windows herunter
3. Starte das Installationsprogramm und folge den Anweisungen
4. Bei der Frage „Adjust your PATH environment": Wähle „Git from the command line and also from 3rd-party software"
5. Nach der Installation: Starten Sie deinen Computer neu

**Überprüfung der Installation:**

Öffne die Eingabeaufforderung und gib folgende Befehle ein:

```bash
git --version
```

Du solltest eine Versionsnummer sehen (z.B. git version 2.41.0).

### 3. Angular CLI (wird später automatisch installiert)

Angular CLI ist das Befehlszeilentool für Angular. Es wird später beim Ausführen der `npm install` automatisch installiert.

### 4. Ein GitHub-Konto

Du benötigst ein kostenloses GitHub-Konto:
- Gehe zu https://github.com
- Klicke auf „Sign up" und erstelle ein neues Konto
- Folge den Anweisungen zur Kontobestätigung

---

## Installation

### Schritt 1: Repository klonen oder öffnen

Falls du das Projekt noch nicht heruntergeladen hast, klone das Repository von GitHub:

```bash
git clone https://github.com/Damian-der-echte/my-Angular-Website.git
cd my_angular_project
```

Falls das Projekt bereits vorhanden ist, navigiere einfach zum Projektverzeichnis:

```bash
cd c:\Users\damia\OneDrive - BBBaden\Informatik\Modul_293\LB_293\my_angular_project
```

### Schritt 2: Dependencies installieren

Alle erforderlichen Pakete und Abhängigkeiten werden installiert:

```bash
npm install
```

**Was passiert hier?**
- npm liest die Datei `package.json`
- Alle Abhängigkeiten werden heruntergeladen und im Ordner `node_modules` installiert
- Dies kann einige Minuten dauern (typisch 2-5 Minuten, abhängig von deiner Internetverbindung)
- Angular CLI wird hierbei automatisch installiert

**Erfolgreiche Installation:**
Du solltest kein Fehler sehen und die Eingabeaufforderung sollte normalisiert zurückkommen.

### Schritt 3: (Optional) Git-Konfiguration

Wenn du das Projekt bearbeiten möchtest und es zu GitHub pushen willst, konfiguriere Git mit deinen Daten:

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine.email@example.com"
```

Ersetze "Dein Name" und "deine.email@example.com" mit deinen tatsächlichen Daten.

---

## Projektstruktur

Hier ist der Aufbau des Projekts und die Bedeutung der wichtigsten Dateien und Ordner:

```
my_angular_project/
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions Deployment-Konfiguration
├── src/
│   ├── app/
│   │   ├── app.routes.ts              # Routing-Konfiguration
│   │   ├── app.config.ts              # App-Konfiguration
│   │   └── app.ts                     # Hauptkomponente
│   ├── components/
│   │   ├── home/                      # Startseite
│   │   ├── wirtschaftsinformatiker/   # Seite: Was ist ein Wirtschaftsinformatiker?
│   │   ├── faehigkeiten/              # Seite: Fähigkeiten
│   │   ├── benefits/                  # Seite: Vorteile des Berufs
│   │   ├── kontakt/                   # Seite: Kontaktseite
│   │   ├── headers/                   # Navigation und Header
│   │   └── footer/                    # Fußzeile
│   ├── main.ts                        # Einstiegspunkt der Anwendung
│   ├── index.html                     # HTML-Hauptdatei
│   ├── styles.css                     # Globale Styles
│   └── material-theme.scss            # Material Design Theme
├── public/
│   ├── home.jpg                       # Bild für Startseite
│   ├── wirtschaftsinformatiker.png    # Bild für Wirtschaftsinformatiker-Seite
│   ├── faehigkeiten.png               # Bild für Fähigkeiten-Seite
│   ├── benefits.png                   # Bild für Benefits-Seite
│   ├── kontakt.jpg                    # Bild für Kontaktseite
│   └── favicon.ico                    # Browser-Icon
├── dist/
│   └── my_angular_project/            # Kompilierte Produktionsversion (wird beim Bauen erstellt)
├── angular.json                       # Angular-Projektkonfiguration
├── package.json                       # NPM-Projektdatei mit Abhängigkeiten
├── package-lock.json                  # Genau definierte Versionen der Abhängigkeiten
├── tsconfig.json                      # TypeScript-Konfiguration
├── .gitignore                         # Dateien, die nicht zu Git hinzugefügt werden
└── README.md                          # Ursprüngliche README-Datei

```

---

## Lokale Entwicklung

### Entwicklungsserver starten

Starte den lokalen Entwicklungsserver mit folgendem Befehl:

```bash
npm start
```

oder alternativ:

```bash
ng serve
```

**Was passiert:**
- Angular kompiliert das Projekt
- Ein lokaler Webserver startet auf `http://localhost:4200`
- Die Website wird automatisch neu geladen, wenn du Dateien bearbeitest (Hot Module Replacement)

**Zugriff auf die Webseite:**
- Öffne deinen Browser (Chrome, Firefox, Safari, Edge)
- Gehe zu `http://localhost:4200`
- Du solltest nun deine Website sehen können

**Entwicklung beenden:**
Drücke `Ctrl + C` in der Eingabeaufforderung, um den Server zu stoppen.

### Dateien bearbeiten

Die Hauptdateien, die du bearbeiten kannst:

**1. HTML-Templates** (Seiteninhalte)
- Pfad: `src/components/[komponentenname]/[komponentenname].html`
- Beispiele:
  - `src/components/home/home.html` – Startseite
  - `src/components/faehigkeiten/faehigkeiten.html` – Fähigkeiten-Seite

**2. CSS-Styles** (Aussehen)
- Globale Styles: `src/styles.css`
- Komponenten-spezifische Styles: `src/components/[komponentenname]/[komponentenname].css`

**3. TypeScript-Code** (Logik)
- Datei-Endung: `.ts`
- Beispiel: `src/components/home/home.ts`
- Hier kannst du Interaktivität und Funktionalität hinzufügen

**Beispiel: Text auf der Startseite ändern**

1. Öffne `src/components/home/home.html`
2. Ändere den Text zwischen den `<p>` Tags
3. Speichere die Datei (Strg + S)
4. Der Browser aktualisiert sich automatisch

---

## Bauen und Kompilieren

### Produktions-Build erstellen

Um eine optimierte Produktionsversion zu erstellen, nutze:

```bash
npm run build
```

oder:

```bash
ng build
```

**Was passiert:**
- Angular kompiliert deinen Code in ein optimiertes Format
- Der Build wird im Ordner `dist/my_angular_project/browser` gespeichert
- JavaScript-Code wird minimiert und optimiert
- CSS und Assets werden ebenfalls optimiert
- Die Dateigröße wird reduziert (Minification)

**Ausgabe nach erfolgreichem Build:**
Du solltest sehen:
```
Initial chunk files | Names                   | Raw size | Estimated transfer size
[...]

Application bundle generation complete.
Output location: C:\...\dist\my_angular_project
```

**Build-Zeit:** Typisch 5-10 Sekunden

### Build-Fehler beheben

Falls es Fehler gibt:

1. **TypeScript-Fehler**: Überprüfe die Fehlermeldung sorgfältig
2. **Fehlende Dependencies**: Führe `npm install` erneut aus
3. **Port 4200 bereits in Benutzung**: Ändere den Port mit `ng serve --port 4201`

---

## Deployment auf GitHub Pages

GitHub Pages ermöglicht es dir, deine Website kostenlos öffentlich ins Internet zu bringen.

### Voraussetzung: Repository auf GitHub

Stelle sicher, dass:
- Dein Projekt auf GitHub hochgeladen ist (Repository: `my-Angular-Website`)
- Du Zugriff auf das Repository hast

### Schritt 1: Automatischer Deployment mit GitHub Actions

Das Projekt ist bereits mit GitHub Actions konfiguriert. Beim jeden Push zu `master` wird die Website automatisch gebaut und deployed.

**So funktioniert es:**
1. Du machst Änderungen lokal
2. Du committest und pushst zu GitHub: `git push`
3. GitHub Actions führt automatisch `npm install` und `npm run build` aus
4. Der Build wird zu GitHub Pages deployed

**Datei:** `.github/workflows/deploy.yml`

Diese Datei orchestriert den gesamten Prozess.

### Schritt 2: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub: https://github.com/Damian-der-echte/my-Angular-Website
2. Klicke auf **Settings** (Zahnrad-Icon oben rechts)
3. Wähle **Pages** im linken Menü
4. Unter "Build and deployment":
   - Source: **Deploy from a branch** (sollte bereits ausgewählt sein)
   - Branch: Wähle **gh-pages** aus dem Dropdown
   - Folder: **/root**
5. Klicke **Save**

**Was passiert:**
- GitHub wird die `gh-pages` Branch zum Hosting verwenden
- Deine Website wird unter `https://[dein-username].github.io/my-Angular-Website/` verfügbar sein

### Schritt 3: Änderungen pushen und deployen

Um deine Website zu aktualisieren:

```bash
# 1. Änderungen vornehmen (z.B. HTML-Dateien bearbeiten)
# 2. Änderungen speichern

# 3. Änderungen zu Git hinzufügen
git add .

# 4. Mit Nachricht committen
git commit -m "Beschreibung deiner Änderungen"

# 5. Zu GitHub pushen
git push
```

**Beispiele für Commit-Nachrichten:**
```bash
git commit -m "Update Startseite mit neuem Text"
git commit -m "Bild für Fähigkeiten-Seite hinzugefügt"
git commit -m "Fehlerhafte Links behoben"
```

### Schritt 4: Deployment überwachen

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Actions** (oben in der Navigation)
3. Du siehst die Deployment-Pipeline:
   - 🟡 **Yellow/Orange**: Wird gerade ausgeführt
   - 🟢 **Green**: Erfolgreich deployed
   - 🔴 **Red**: Fehler beim Deployment

4. Wenn grün: Warte 1-2 Minuten, dann aktualisiere deine Website im Browser

**Website-URL:** `https://damian-der-echte.github.io/my-Angular-Website/`

---

## Bilder und Assets

### Bilder hinzufügen oder ändern

**Wo sind die Bilder?**
- Alle Bilder sind im Ordner `public/` gespeichert
- Dieser Ordner wird automatisch in den Build inkludiert

**Neue Bilder hinzufügen:**

1. Speichere dein Bild (JPG oder PNG) im Ordner `public/`
   - Beispiel: `public/mein-bild.jpg`

2. Verwende es in einer HTML-Datei mit absolutem Pfad:
   ```html
   <img src="/my-Angular-Website/mein-bild.jpg" alt="Beschreibung" />
   ```

3. Speichere die HTML-Datei

4. Committen und pushen:
   ```bash
   git add .
   git commit -m "Neues Bild hinzugefügt"
   git push
   ```

**Wichtig: Bildpfade**

- **Lokale Entwicklung**: Pfade wie `/mein-bild.jpg` funktionieren
- **GitHub Pages (öffentlich)**: Muss der vollständige Pfad sein: `/my-Angular-Website/mein-bild.jpg`

Die aktuellen Bilder nutzen bereits die korrekte Konfiguration.

### Bildformate

**Empfohlene Formate:**
- **Fotografien**: JPG (kleinere Dateigröße)
- **Icons/Grafiken**: PNG (mit Transparenz möglich)
- **Maximale Größe**: 1-2 MB pro Bild (sonst wird die Website langsam)

### Bilder optimieren

Große Bilder können deine Website verlangsamen. Nutze:
- [TinyPNG](https://tinypng.com) – kostenloses Bildkompressions-Tool
- [ImageOptim](https://imageoptim.com) – für Mac
- [FileOptimizer](http://nikkhokkho.sourceforge.net/) – für Windows

---

## Häufig gestellte Fragen (FAQ)

### F: Die Website sieht lokal anders aus als auf GitHub Pages

**A:** Das ist normalerweise ein Bildpfad-Problem. Stelle sicher, dass alle `<img src="...">` Tags den vollständigen Pfad verwenden:
- Falsch: `src="home.jpg"`
- Richtig: `src="/my-Angular-Website/home.jpg"`

### F: Ich habe eine Datei bearbeitet, aber die Änderung wird nicht angezeigt

**A:** 
1. Speichere die Datei (Strg + S)
2. Im Browser: Harte Aktualisierung mit `Strg + Shift + R` (oder `Cmd + Shift + R` auf Mac)
3. Falls lokal: Starte den Server neu mit `npm start`

### F: Wie lange dauert es, bis meine Änderungen online sichtbar sind?

**A:** 
- Nach `git push` startet GitHub Actions automatisch
- Typisch dauert der Deployment 2-5 Minuten
- Du siehst den Status unter **Actions** im Repository

### F: Kann ich mehrere Seiten hinzufügen?

**A:** Ja! Füge eine neue Komponente hinzu:

```bash
ng generate component components/new-page
```

Dann registriere sie in `src/components/components.routes.ts`:

```typescript
{ path: 'neue-seite', loadComponent: () => import('./neue-seite/neue-seite').then(m => m.NeueSeite) }
```

### F: Wie ändere ich die Farben oder das Design?

**A:** 
- Globale Styles: `src/styles.css`
- Component-spezifische Styles: `src/components/[name]/[name].css`
- Material Design Theme: `src/material-theme.scss`

### F: Muss ich node_modules pushen?

**A:** **Nein!** Der Ordner `node_modules` ist in `.gitignore` und wird nicht gepusht. Das ist richtig und gewünscht. Jeder kann die Dependencies mit `npm install` erneut downloaden.

### F: Kann ich ein eigenes Domain verwenden?

**A:** Ja! Du kannst deine eigene Domain mit GitHub Pages verbinden:
1. Gehe zu **Settings > Pages**
2. Unter "Custom domain" gib deine Domain ein
3. Passe die DNS-Einstellungen deiner Domain an (abhängig vom Domain-Provider)

---

## Fehlerbehandlung

### Error: "node is not recognized"

**Problem:** Node.js ist nicht installiert oder nicht im PATH konfiguriert

**Lösung:**
1. Installiere Node.js von https://nodejs.org
2. Starten Sie deinen Computer neu
3. Öffne eine neue Eingabeaufforderung und teste: `node --version`

### Error: "npm ERR! code ENOENT"

**Problem:** Dependencies konnten nicht installiert werden

**Lösung:**
```bash
# 1. Lösche den node_modules Ordner
rm -r node_modules

# 2. Lösche package-lock.json
rm package-lock.json

# 3. Installiere neu
npm install
```

### Error: "The target entry-point has missing dependencies"

**Problem:** Eine Abhängigkeit fehlt

**Lösung:**
```bash
npm install
```

### Bilder werden nicht angezeigt

**Problem:** `<img>` Tags zeigen kein Bild

**Überprüfung:**
1. Existiert die Bilddatei im `public/` Ordner?
2. Ist der Pfad korrekt? (z.B. `/my-Angular-Website/home.jpg`)
3. Ist der Dateiname und die Erweiterung korrekt geschrieben? (z.B. `.jpg` nicht `.JPG`)

**Lösung:**
- Öffne die Developer-Tools im Browser: F12
- Gehe zum Tab "Network"
- Prüfe, ob die Bilder mit Status 404 (Not Found) angezeigt werden
- Korrigiere den Pfad in der HTML-Datei

### Build schlägt fehl mit TypeScript-Fehler

**Problem:** `ng build` zeigt Fehlermeldungen

**Lösung:**
1. Lese die Fehlermeldung sorgfältig
2. Typische Fehler:
   - Vergessene Klammern: `}` oder `)`
   - Falsche Variablennamen
   - Import-Fehler
3. Korrigiere die Fehler in der angegebenen Datei
4. Führe `ng build` erneut aus

### Port 4200 ist bereits in Benutzung

**Problem:** `ng serve` zeigt: "Port 4200 is already in use"

**Lösung Option 1:** Verwende einen anderen Port
```bash
ng serve --port 4201
```

**Lösung Option 2:** Beende den anderen Prozess
```powershell
# Finde den Prozess, der Port 4200 nutzt
netstat -ano | findstr :4200

# Beende den Prozess (ersetze PID mit der Nummer aus dem obigen Befehl)
taskkill /PID [PID] /F
```

### GitHub Actions schlägt fehl

**Problem:** Deployment wird rot angezeigt

**Überprüfung:**
1. Gehe zu **Actions** in deinem Repository
2. Klicke auf den fehlgeschlagenen Build
3. Schau dir die Logs an
4. Typische Fehler:
   - `npm install` fehlgeschlagen → Check internet connection
   - `npm run build` fehlgeschlagen → TypeScript-Fehler im Code
   - Deployment fehlgeschlagen → GitHub Pages nicht aktiviert

**Lösung:**
- Behebe den Fehler lokal
- Teste mit `npm run build`
- Wenn erfolgreich: `git push`

---

## Best Practices

### 1. Committe regelmäßig

```bash
# Nach jeder Änderung committen
git add .
git commit -m "Klare Beschreibung der Änderung"
git push
```

### 2. Aussagekräftige Commit-Nachrichten

❌ Schlecht:
```bash
git commit -m "update"
git commit -m "fix"
```

✅ Gut:
```bash
git commit -m "Textinhalt auf Startseite aktualisiert"
git commit -m "Responsive Design für Mobile Geräte verbessert"
```

### 3. Teste vor dem Push

```bash
# Starte lokal und überprüfe
npm start

# Baue und überprüfe auf Fehler
npm run build

# Wenn alles gut sieht: push
git push
```

### 4. Halte Dependencies aktuell

```bash
# Überprüfe auf Updates
npm outdated

# Update durchführen
npm update
```

---

## Weitere Ressourcen

- **Angular Dokumentation**: https://angular.dev/
- **Node.js Dokumentation**: https://nodejs.org/docs/
- **Git Dokumentation**: https://git-scm.com/doc
- **GitHub Pages Dokumentation**: https://docs.github.com/en/pages
- **Material Design for Angular**: https://material.angular.io/

---

## Zusammenfassung

**Quick Start:**

```bash
# 1. Repository klonen oder öffnen
cd my_angular_project

# 2. Dependencies installieren
npm install

# 3. Lokal entwickeln
npm start
# Öffne http://localhost:4200

# 4. Änderungen machen und testen

# 5. Build erstellen
npm run build

# 6. Zu GitHub pushen
git add .
git commit -m "Meine Änderung"
git push

# 7. Auf GitHub Pages warten (2-5 Minuten)
# Website ist dann live unter: https://damian-der-echte.github.io/my-Angular-Website/
```

---

**Letztes Update:** 6. Juli 2026

Für Fragen oder Probleme: Überprüfe die GitHub Issues oder kontaktiere den Projektmaintainer.
