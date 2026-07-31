# Portfolio professionale in Next.js

Portfolio bilingue (IT/EN) costruito con Next.js App Router, next-intl, next-themes e MDX.

## Funzionalità

- Italiano e inglese con routing `/{lang}`
- Tema chiaro/scuro con default chiaro
- Sezioni: Home, About, Resume, Research, ESN, Blog
- Articoli Research e Blog in `.mdx`
- Supporto a contenuti esterni Substack
- Immagini locali in `public/images`
- File di configurazione centrale in `src/config/site.settings.ts`

## Avvio

```bash
npm install
npm run dev
```

## Personalizzazione

- Aggiorna dati base in `src/config/site.settings.ts`
- Modifica traduzioni in `src/messages/it.json` e `src/messages/en.json`
- Aggiungi articoli in `src/content/research/{it,en}` e `src/content/blog/{it,en}`
- Sostituisci le immagini placeholder in `public/images`
