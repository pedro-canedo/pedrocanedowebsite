'use client'

import Script from 'next/script'

export function Analytics() {
  // Using Plausible Analytics (privacy-friendly, no cookies)
  // To enable, set NEXT_PUBLIC_PLAUSIBLE_DOMAIN in .env.local
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  if (!plausibleDomain) {
    return null
  }

  return (
    <Script
      defer
      data-domain={plausibleDomain}
      src="https://plausible.io/js/script.js"
    />
  )
}

// Alternative: Google Analytics
// Uncomment if you prefer Google Analytics
// export function Analytics() {
//   const gaId = process.env.NEXT_PUBLIC_GA_ID
//
//   if (!gaId) {
//     return null
//   }
//
//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${gaId}');
//         `}
//       </Script>
//     </>
//   )
// }

