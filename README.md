# Fly Technology & Innovation

Website de prezentare local, construit cu React, Vite, TypeScript și Tailwind CSS 4. Temă dark responsive pentru un studio solo, cu secțiunile Hero, About, Services, Projects, Approach, Contact și Privacy Policy.

## Pornire în VS Code

1. Instalează Node.js 22 LTS sau o versiune LTS mai nouă, care include npm. Redeschide VS Code după instalare.
2. În VS Code: **File → Open Folder…** și selectează folderul `Website`.
3. Deschide **Terminal → New Terminal**.
4. La prima rulare, instalează dependențele:

```sh
npm install
```

5. Pornește site-ul:

```sh
npm run dev
```

Deschide adresa afișată în terminal (de obicei http://localhost:5173). Modificările din `src` apar automat în browser. Oprește serverul cu **Ctrl+C**.

## Comenzi

- `npm run dev` — server local cu actualizare automată.
- `npm run typecheck` — verificare TypeScript.
- `npm run build` — verificare TypeScript și build de producție în `dist/`.
- `npm run preview` — previzualizează build-ul după `npm run build`.

## Personalizare

- `src/App.tsx`: pagini, navigare, meniu mobil animat și secțiuni.
- `src/projects.ts`: datele produselor, adresa de email, adresa studioului și linkul App Store.
- `src/styles.css`: stiluri responsive, culori și ilustrație CSS originală. Tailwind este integrat prin pluginul Vite și importul CSS.
- `index.html`: titlu, descriere și limbă.
- `public/favicon.svg`: favicon.

Textele publice sunt în engleză. NearPlay este lansat pe App Store; Pictarrow este marcat **In development**. Nu există rezultate, clienți sau testimoniale fictive. Ilustrațiile sunt locale, fără fonturi sau imagini externe.

## Contact și publicare ulterioară

Contactul folosește adresa publică contact@flytechnologyandinnovation.com printr-un link `mailto:` care deschide aplicația de email a vizitatorului; nu trimite automat. Adresa fizică provine de pe website-ul existent. Nu există formular sau backend de email.

Privacy Policy descrie implementarea locală actuală și trebuie completată cu identitatea operatorului, contactul, găzduirea și detaliile reale de prelucrare înainte de lansare. Nu este o politică juridică finală pentru o implementare publică.

Nu există analytics, cookies neesențiale, backend, Firebase sau integrare GitHub. Nu s-a configurat DNS și nu s-a publicat site-ul. `dist/` este doar rezultatul local al build-ului.

## Pagini de produs

- `/projects/nearplay` — prezentare de aplicație cu icon oficial, galerie de capturi (swipe, săgeți, vizualizare mărită), descriere, moduri de joc, suport și linkul App Store.
- `/projects/pictarrow` — produs în dezvoltare, fără buton de download sau dată de lansare inventată.
- `/privacy` — politica website-ului, separată de politica produselor.

Fiecare produs are o adresă directă. Vite oferă fallback pentru aceste rute în dezvoltare și preview. La publicarea ulterioară, configurează hostingul să servească `index.html` pentru rutele aplicației (SPA rewrite). Nu s-a configurat încă hosting. Pentru produse noi, adaugă o intrare în `src/projects.ts`; cardul și pagina se generează din aceleași date. NearPlay folosește iconul și cele cinci capturi oficiale din App Store, salvate local în `public/nearplay/`. Pictarrow păstrează o ilustrație conceptuală.

Meniul mobil are glisare la intrare și ieșire, animație succesivă a linkurilor, închidere prin Escape, backdrop sau selecție, blocarea scrollului și menținerea focusului în meniu. Setarea de sistem pentru mișcare redusă dezactivează animațiile.

## Documentele NearPlay

- `/projects/nearplay/privacy` — textul politicii existente de pe Google Sites, păstrat cu data și emailul original (`developer@flytechnologyandinnovation.com`). Migrarea nu constituie o reevaluare a practicilor aplicației.
- `/projects/nearplay/terms` — copia Terms of Use de la https://sites.google.com/view/nearplay-termsofuse/home. Data și conținutul sunt păstrate; la cererea utilizatorului, placeholderul din secțiunea 8 a fost înlocuit cu „Fly Technology & Innovation SRL”.
- `/projects/nearplay/support` — copia paginii Support de la https://sites.google.com/view/nearplay-contact/home, inclusiv emailul developer@flytechnologyandinnovation.com și scrierea originală „Inovation” din semnătură.

După lansarea publică HTTPS și verificarea accesului direct la aceste URL-uri, actualizează Privacy Policy URL în App Store Connect și linkurile din aplicație. Nu înlocui linkul public existent cu localhost. Nici App Store Connect, nici aplicația nativă nu au fost modificate. Un EULA propriu trebuie introdus ca text în App Store Connect; un link pe website nu îl configurează automat.

Resursele NearPlay provin din pagina App Store indicată de utilizator, preluate la 21 octombrie 2026. URL-urile sursă sunt în `public/nearplay/sources.json`. Conținutul aplicației este o copie locală, nu o sincronizare automată. Confirmă că politica și declarațiile App Privacy rămân concordante cu versiunea aplicației înainte de migrare.

Cele trei pagini sunt copii ale textelor originale, adaptate la designul site-ului. Placeholderul din Terms a fost completat; confirmă numele juridic din Support înainte de publicare. Nu s-au modificat paginile Google Sites sau linkurile aplicației.
