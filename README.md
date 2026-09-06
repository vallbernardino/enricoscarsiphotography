# Fotografo Torino

Brief

Build a bilingual (Italian / English) marketing website for Enrico Scarsi Fotografia, a professional photography studio in Turin, Italy, serving both private clients (portraits, families, couples, maternity, weddings) and professional/corporate clients (events, congresses, advertising, catalogs, editorial). The studio has a 4.9-star rating from 371 Google reviews and has operated for years — the site should read as established, classic, and quietly confident, not like a trendy startup. Think: the visual register of a serious European portrait/reportage studio — closer to a gallery or a hand-set letterpress invitation than a SaaS landing page.

Hard constraint: zero border-radius anywhere. No rounded buttons, no rounded image frames, no rounded cards, no circular icons or avatars. Every edge is sharp/square. This is a deliberate reaction against the current site (which uses rounded gift-voucher badges and circular social icons) and against the generic soft-UI look — sharp corners are part of the brand's classic, editorial identity.

Do not use the reference collage image anywhere in the build — it was only a mood reference for photographic subject matter (portraits, events, product, corporate, lifestyle). Every photo position in the new site must be an empty, clearly-marked placeholder the owner will fill in later (see "Photo placeholders" below).

Design system

Palette (4–6 colors, named):

--paper 
#F6F3EC — warm ivory background, not stark white
--ink 
#1B1A17 — near-black charcoal for text and dark sections
--brass 
#B8862E — muted, desaturated brass/mustard — a restrained nod to the studio's existing yellow logo mark, without being loud
--stone 
#8C8577 — warm mid-grey for secondary text, hairlines, captions
--card 
#EFEAE0 — slightly deeper ivory for panels/cards against paper
--white 
#FFFFFF — reserved for photo placeholder fields only

Typography (define 3 roles, pair deliberately):

Display serif for headlines: a high-contrast editorial serif (e.g. Fraunces or Canela-style) set fairly large, tight leading, occasionally italic for pull-quotes/testimonials
Body sans: a clean, humanist grotesk (e.g. Inter or Neue Haas–style) for paragraphs and UI
Utility mono: a monospace face (e.g. IBM Plex Mono) used only for small metadata labels — service tags, photo-placeholder captions, review star counts, EXIF-style labels. This is the site's signature detail (see below).

Signature element — "contact sheet" motif: Borrow the vocabulary of analog photography rather than generic web decoration. Every photo placeholder is framed like a frame on a contact sheet or a slide mount: a thin hairline border (1px, --stone), a small mono-caption underneath in the style of EXIF data (e.g. IMG_014 — RITRATTO / PORTRAIT), and sprocket-hole tick marks running along the top edge of full-width gallery strips. This ties every empty placeholder back to the subject matter (film, contact sheets) instead of looking like a broken image icon.

Layout principles:

Square corners everywhere — buttons, cards, image frames, nav pills, badges, form inputs
Hairline rules (1px --stone at low opacity) to divide sections instead of heavy drop-shadows or big gaps of colored blocks
Generous whitespace, editorial grid (12-col), asymmetric hero rather than centered-everything
Buttons: solid --ink fill with --paper text, or outline style with 1px --ink border — no shadows, no gradients, no rounding
Motion: restrained — a slow fade/rise on scroll-in for sections, a subtle underline-draw on link hover. No bouncy or playful easing.
Language switching
On first visit, show a small modal/overlay centered on --paper with sharp corners: "Italiano" / "English" as two square buttons, no flags (flags feel touristy — use the words only, set in the display serif). Store the choice (localStorage-equivalent in-memory state is fine for this build).
After selection, a persistent small language toggle (IT / EN) sits in the top nav, always visible, so the user can switch at any time.
All copy below is provided in both languages — use it verbatim per language rather than inventing new copy. Where I give only one language for a UI label (buttons, nav), translate it consistently in the same voice as the rest of that language's copy.
Site structure & copy
1. Navigation (sticky, --paper background, hairline bottom border)

Logo: wordmark only, display serif, e.g. "Enrico Scarsi — Fotografia", small line under it in mono: STUDIO FOTOGRAFICO · TORINO. Nav links — IT: Chi Siamo · Privati · Aziende · Servizi · Portfolio · Recensioni · Contatti — EN: About · Private · Corporate · Services · Portfolio · Reviews · Contact. Right side: IT/EN toggle, then three square outline buttons: phone icon (call), envelope icon (email), WhatsApp icon (message) — icons only or icon+label, sharp square buttons, no circles.

2. Hero

Large photo placeholder (full-bleed, ~70vh), contact-sheet framed, caption: IMG_001 — STUDIO, VIA OROPA 54B. Headline — IT: "Fotografo a Torino. Oltre il semplice scatto." — EN: "Photographer in Turin. Beyond the simple shot." Subhead — IT: "La passione per la fotografia incontra professionalità ed esperienza: reportage, ritratto, eventi e fotografia pubblicitaria a Torino e in tutto il Piemonte." — EN: "A passion for photography meets professionalism and experience: reportage, portraiture, events, and advertising photography in Turin and across Piedmont." Three CTA buttons, square, evenly weighted — IT: Telefona allo Studio / Scrivi un'Email / Messaggio WhatsApp — EN: Call the Studio / Send an Email / WhatsApp Message.

3. Private clients section

Heading — IT: "Servizi Fotografici per Clienti Privati" — EN: "Professional Photography Services for Private Clients". Body (paraphrase, don't reproduce verbatim from source docs — write fresh copy in each language that covers): customized sessions for portraits, family photos, couples, maternity photography; unique, authentic shots capturing real personality; a relaxed, attentive studio experience that puts clients at ease for spontaneous results. 3–4 photo placeholders in a grid (portrait / family / couple / maternity), each contact-sheet framed with mono captions: RITRATTO, FAMIGLIA, COPPIA, MATERNITÀ (mirrored in EN captions when EN is active: PORTRAIT, FAMILY, COUPLE, MATERNITY).

4. Corporate / professional clients section

Heading — IT: "Servizi Fotografici per Aziende e Professionisti" — EN: "Professional Photography Services for Professional Clients". Body (paraphrased): corporate event and conference reportage, trade shows and exhibitions capturing real atmosphere; editorial, advertising campaign, and catalog photography; strong advertising-photography experience producing visuals that reinforce brand identity. Photo placeholder strip (wide, 3 frames): EVENTO AZIENDALE, PUBBLICITARIA, CATALOGO / EN: CORPORATE EVENT, ADVERTISING, CATALOG.

5. Method — "How we work" (numbered, this is a real sequence so numbering is justified)

Heading — IT: "Il Nostro Metodo" — EN: "Our Method". Three numbered steps, each with a short heading + 2–3 sentences, written fresh in each language, based on:

Ascolto e Primo Contatto / Listening & First Contact — every first contact is treated individually; with private clients the conversation is about emotions and memories, with businesses it's about communication and brand goals; the guiding question is always "how can we really help you?"
Pianificazione / Planning Before the Shoot — private clients get guidance on clothing, palette, and mood; corporate clients get detailed planning on timing, logistics, and final use of the images.
L'Esperienza Durante lo Shooting / The Experience During the Shoot — for families/portraits, the focus is empathy and a relaxed atmosphere; for professional clients, the same care shows up as precision, discretion, and reliability — knowing when to be present and when to stay invisible. No photo needed here — keep this section text-led with generous whitespace and a hairline-numbered layout (01 / 02 / 03 in mono type).
6. Services list

Heading — IT: "Tutti i Servizi" — EN: "All Services". Render as a clean tag/chip grid (square chips, hairline border, hover fills --ink), one language at a time:

Book fotografico professionale per modelle e attrici / Professional photo book for models and actresses
Servizio fotografico per siti web e e-commerce / Photography for websites and e-commerce
Casting per attori e modelli / Casting photography for actors and models
Servizio fotografico per case vacanza / Vacation rental photography
Luxury Photo Tour a Torino / Luxury Photo Tour in Turin
Fotografo corporate ed eventi / Corporate and Event Photographer
Servizio fotografico per la famiglia / Family photography
Servizio fotografico per aziende e uffici / Photography for companies and offices
Fotografo di matrimonio / Wedding photographer
Riprese video per eventi, interviste, tutorial / Video for events, interviews, tutorials
Corso di fotografia — lezioni individuali / Photography course — private lessons
Fototessere per visti e passaporti / Passport & visa photo service
Buoni regalo / Gift vouchers

Pull the gift voucher and passport photo items out as two featured callout cards (square, --card background, brass hairline top border) since the current site treats these as standalone promos — e.g. "Regala un servizio fotografico" / "Gift a photography session" and "Fototessere per Visto USA e passaporti stranieri" / "Passport photos for US visas and foreign passports".

7. Coverage area

Heading — IT: "Dove Lavoriamo" — EN: "Where We Work". Body (paraphrased): based in Turin, working across Piedmont (Cuneo, Asti, Alessandria, Novara, Vercelli, Biella, Verbano Cusio Ossola), including the Langhe and Roero, Monferrato, Lake Maggiore and Lake Orta, the Susa and Ossola valleys, and the Alps; also serving Valle d'Aosta (Aosta, Courmayeur, Cervinia, Saint Vincent) and Liguria (Genoa, Savona, Imperia, La Spezia). Simple square-framed map placeholder or a minimal line-art map graphic (not a live embed) with pinned city names as small mono labels.

8. Portfolio / gallery

Heading — IT: "Portfolio" — EN: "Portfolio". Filterable tab bar (square tabs, active tab = solid --ink): Tutti / All, Ritratto / Portrait, Eventi / Events, Corporate, Prodotto / Product, Matrimoni / Weddings. A responsive grid of 8–12 empty contact-sheet-framed placeholders, each numbered (IMG_002, IMG_003…) with a category mono-caption. No real images — clearly styled as "photo coming soon" placeholders (e.g. a faint camera glyph centered in --stone at low opacity inside the frame) so the owner can tell exactly where to drop each photo later.

9. Reviews

Heading — IT: "Cosa Dicono i Nostri Clienti" — EN: "What Our Clients Say". Rating badge: 4.9 ★ — 371 recensioni Google / 371 Google reviews, set in mono/display mix, square badge. Testimonial cards (square, hairline border, serif italic quote, name + mono attribution), using these six real, paraphrased (not verbatim-quoted) testimonials — write each as a fresh 1–2 sentence paraphrase in both languages, attributed by name only:

Barbara Cappi — hired Enrico for her 17-year-old son's portrait session; praised his ability to put teenagers at ease and get natural, spontaneous results.
Edoardo Busti — had very specific requirements and was fully satisfied; appreciated help preparing content for publication after the shoot.
Enrico Mauro — found him professional and attentive, capturing natural, clean images suited for professional use.
Ashish Thodupunuri (Google review) — praised the studio for high-quality, well-priced passport/ID photos and a great conversation with Enrico.
Marco Martinetti (Google review) — said Enrico acted as both photographer and informal tour guide, sharing Turin's history while shooting his family at the city's landmarks.
Arnaud Ruch (Google review) — said the shoot was fun and the CV/work-document photos came out exactly as imagined.
10. About the photographer

Heading — IT: "Enrico Scarsi, Fotografo a Torino" — EN: "Enrico Scarsi, Photographer in Turin". Square (not circular) headshot placeholder, contact-sheet framed, caption ENRICO SCARSI. Short bio paragraph (paraphrase, both languages): Turin-based photographer specializing in portraiture and reportage, working with both private and professional clients across the region, known for a calm, attentive approach that puts subjects at ease; continually invests in equipment and technique to keep pace with contemporary photography.

11. Contact & footer

Heading — IT: "Contatti" — EN: "Contact". Details, set in mono/body mix:

Address: Via Oropa 54B, Vanchiglietta/Vanchiglia, 10153 Torino TO — near Corso Belgio and Corso Casale
Phone: +39 011 8998291 · +39 348 9229300
Email: enrico.scarsi@gmail.com
VAT / P.IVA: 05529370016 Square map placeholder (labelled "Google Maps" mono caption — leave as a static framed placeholder, not a live embed, so the owner can wire it up). Social row: LinkedIn, Instagram, X (Twitter), Facebook, Threads — render as square icon buttons (hairline border, no circular backgrounds), not the rounded/colored app-icon badges from the old site. Repeat primary nav links + language toggle. Footer legal line, both languages, small --stone text: IT: "Questo sito non utilizza alcun tipo di cookie, né cookie tecnici né cookie di profilazione. La navigazione avviene senza la raccolta o il tracciamento di dati personali degli utenti." — EN: "This website does not use any type of cookies, including technical or profiling cookies. Browsing takes place without the collection or tracking of users' personal data." Copyright line: © [current year] Enrico Scarsi Fotografia — P.IVA 05529370016.
Photo placeholders — implementation notes
Every placeholder must be a distinct, styled empty container (not a broken <img> tag) — square corners, 1px --stone hairline border, faint centered camera glyph, and a small mono caption beneath stating what belongs there in the active language.
Use consistent aspect ratios per section (e.g. 4:5 for portraits, 3:2 for events/corporate, 1:1 for gallery grid, square for headshot) so the layout doesn't shift once real photos are dropped in.
Where feasible, make each placeholder a simple component that accepts an image prop/upload later, so the owner can swap in real photography without touching layout code.
What to avoid
No rounded corners, pill buttons, or circular icons/avatars anywhere
No collage-style stacked photo grids like the current site's hero
No colorful rounded promo badges (gift voucher / passport ribbons) — replace with the square featured-callout cards described above
No stock gradient backgrounds or soft drop-shadows — keep it flat, hairline-divided, editorial
Don't invent new services or claims beyond what's listed above

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/692bc463-6724-49fe-af4f-41ba6a16bf06).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
