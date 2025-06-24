import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elfredy | Fullstack Developer",
  description:
    "Elfredy'nin kişisel portfolyo sitesi. React, Next.js, Firebase ve modern teknolojilerle geliştirilmiştir.",
  openGraph: {
    title: "Elfredy | Fullstack Developer",
    description: "Elfredy'nin fərdi vebsaytı.",
    url: "https://elfredy.com",
    siteName: "Elfredy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elfredy Portfolio",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elfredy | Fullstack Developer",
    description: "Elfredy'nin kişisel portfolyo sitesi.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.className}>
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
