"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CartModal from "@/components/CartModal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav toggleCart={toggleCart} />
        {cartOpen && <CartModal toggleCart={toggleCart} />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
