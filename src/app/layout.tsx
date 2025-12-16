import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/global.css";
import Header from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { ShopProvider } from "@/context/ShopContext";
import { GlobalModals } from "@/components/layout/GlobalModals";
import { TopBanner } from "@/components/layout/Header/TopBanner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Karibea | Moda Exclusiva",
  description: "Descubre las últimas tendencias en moda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased flex flex-col min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white transition-colors duration-300`}>

        {/* 1. Proveedor de Tema (Oscuro/Claro) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 2. Proveedor de Idioma (ES/EN) */}
          <LanguageProvider>

            {/* 3. Estado Global de la Tienda */}
            <ShopProvider>

              <TopBanner />
              <Header />

              <main className="flex-1">
                {children}
              </main>

              <Footer />
              <GlobalModals />

            </ShopProvider>
          </LanguageProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}