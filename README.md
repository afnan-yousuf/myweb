# ABC Traders — 3-Page Website

Static HTML/CSS/JavaScript catalogue website, no installation required.

## Pages
- `index.html` — Homepage with hero, categories, featured products.
- `products.html` — Product catalogue with category/condition filters and search.
- `contact.html` — About, contact information and email-draft enquiry form.
- `styles.css` — Responsive visual design.
- `app.js` — Inventory, filtering, WhatsApp links and email form.
- `assets/product-placeholder.svg` — Fallback product illustration.

## Run
Open `index.html` in any modern browser. For development, optionally serve with `python -m http.server 8000` and visit http://localhost:8000.

## Important before publishing
1. Replace `STORE.whatsapp` and `STORE.email` in `app.js` with real contact details. The WhatsApp number must be in international format without `+` or spaces.
2. Replace all DEMO inventory entries and sample product specifications in `products` in `app.js` with verified stock and real product images.
3. Replace shop address, opening hours and map placeholder in `contact.html`.
4. Replace demonstration photography with photos licensed for your intended use, preferably original store/product photographs. External Unsplash images need an internet connection.
5. The contact form intentionally uses `mailto:`; to accept messages without an email client, connect a server endpoint or reputable form service.
6. Update SEO descriptions and any business claims to match your real shop.

No checkout or payment functionality is included. WhatsApp enquiry links are used instead.
