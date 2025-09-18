import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";
import Navbar from "@/src/shared/ui/Navbar";
import Footer from "@/src/shared/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "CryptoHub",
    template: "%s | CryptoHub",
  },
  description: "Live crypto market dashboard and currency converter.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          <div className="pt-16 min-h-screen">
            {children}
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
