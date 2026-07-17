# Mike Dixon — portfolio

Senior Front-End / UI Developer based in Lancaster, PA. This is the source for
my personal site.

**Live:** https://mdixondesigns.github.io/

It's deliberately a small, hand-built static site — no framework, no bundler, no
tracking. The interesting part isn't the size, it's the engineering decisions
behind keeping it fast and accessible.

## Lighthouse (mobile)

| Performance | Accessibility | Best Practices |   SEO   |
| :---------: | :-----------: | :------------: | :-----: |
|   **100**   |    **100**    |     **96**     | **100** |

_The remaining 4 Best-Practices points require HTTP response headers
(CSP/HSTS/COOP) that GitHub Pages doesn't allow setting — a host limitation, not
a page issue._

## Engineering notes

- **No framework, on purpose.** Semantic HTML + hand-written SCSS. For a
  single-page portfolio, a framework would be more weight and more risk than
  value. The whole payload is a few KB of CSS and a few lines of JS.
- **Click-to-load media facades.** The hero video, a second YouTube embed, and a
  CodePen embed each load as a static poster + play button; the real third-party
  iframe is only injected on click. Nothing from YouTube or CodePen touches the
  initial load — no ~1 MB of player JS, no third-party cookies — until the user
  opts in. One small generic handler drives all three from `data-` attributes.
- **Images.** Portfolio thumbnails are WebP with explicit `width`/`height`
  (~112 KB total, down from ~1.6 MB of PNG) so there's zero layout shift.
- **Type.** Fonts are self-hosted (woff2/woff) with `font-display: swap` to
  avoid invisible text on load.
- **Accessibility.** Landmark structure, logical heading order, AA-contrast
  colors, and decorative SVGs hidden from assistive tech.

## Tech

- Semantic HTML5
- SCSS compiled with [Dart Sass](https://sass-lang.com/dart-sass) (`@use` module
  system) → a single minified stylesheet
- A little vanilla JS (the facade loader)
- Hosted on GitHub Pages

`sass` is the only dependency.

## Local development

```bash
npm install
npm run dev      # watch scss/ and rebuild css/style-min.css on save
npm run build    # one-off compressed build
```

The site is fully static — once built, open `index.html` or serve the folder
with any static server.

## Structure

```
index.html            # the page
scss/                 # source styles (style.scss + partials, compiled by sass)
css/style-min.css     # compiled, minified output (what the page loads)
images/               # WebP thumbnails + icons
fonts/                # self-hosted woff2/woff
```

## Notes

Recent performance and accessibility work was done pair-programming with Claude
Code — part of leaning into AI-assisted development day to day.

## Contact

- LinkedIn: https://www.linkedin.com/in/mdixondesigns/
- CodePen: https://codepen.io/mdixondesigns
