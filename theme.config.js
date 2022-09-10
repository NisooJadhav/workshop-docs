export default {
  github: 'https://github.com/nisoojadhav/workshop',
  docsRepositoryBase: 'https://github.com/nisoojadhav/workshop-docs/blob/master',
  titleSuffix: ' – Workshoply',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Workshoply</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        one stop solution for managing workshops
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Workshoply: one stop solution for managing workshops" />
      <meta name="og:description" content="Workshoply: one stop solution for managing workshops" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icon.png"
      />
      <meta name="msapplication-TileImage" content="/icon.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>© {new Date().getFullYear()} <a href="https://nisootech.vercel.app">nisoojadhav</a>, <a href="https://workshop-nj.herokuapp.com">Workshoply</a> open source</>,
  unstable_faviconGlyph: '👷',
}
