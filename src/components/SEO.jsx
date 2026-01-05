export default function SEO({
  title,
  description,
  canonicalPath,
  imagePath = "/og-default.png",
  siteName = "CYBERVAULT",
  locale = "el_GR",
  noindex = false,
}) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  const safePath =
    canonicalPath && canonicalPath.startsWith("/")
      ? canonicalPath
      : canonicalPath
      ? `/${canonicalPath}`
      : "";

  const normalizedPath =
    safePath && safePath !== "/" ? safePath.replace(/\/+$/, "") : safePath;

  const canonical = origin && normalizedPath ? `${origin}${normalizedPath}` : "";
  const image = origin && imagePath ? `${origin}${imagePath}` : "";

  return (
    <>
      {/* Primary */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Indexing */}
      <meta
        name="robots"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {siteName && <meta property="og:site_name" content={siteName} />}
      {locale && <meta property="og:locale" content={locale} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta
            property="og:image:alt"
            content={`${siteName} – Τεχνική Υποστήριξη & IT Υποδομές`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}

      {/* Twitter-compatible cards (no account needed) */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}
