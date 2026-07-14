import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weareapplyloop.com"),
  applicationName: "ApplyLoop",
  title: "ApplyLoop | Resume & Job Application Services",
  description:
    "ApplyLoop combines AI and human expertise to optimize resumes, find matching roles, and submit tailored job applications.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "ApplyLoop | Spend Less Time Applying",
    description:
      "Optimize your resume, discover matching roles, and submit tailored job applications with AI and human expertise.",
    url: "/",
    siteName: "ApplyLoop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApplyLoop | Spend Less Time Applying",
    description:
      "Optimize your resume, discover matching roles, and submit tailored job applications.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.weareapplyloop.com/#organization",
  name: "ApplyLoop",
  alternateName: "Applyloop",
  url: "https://www.weareapplyloop.com",
  logo: "https://www.weareapplyloop.com/icon.png",
  description:
    "ApplyLoop combines AI and human expertise to optimize resumes, find matching roles, and submit tailored job applications.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.weareapplyloop.com/#website",
  name: "ApplyLoop",
  alternateName: "Applyloop",
  url: "https://www.weareapplyloop.com",
  publisher: {
    "@id": "https://www.weareapplyloop.com/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
