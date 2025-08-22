import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "../../public/atlas-logo.png";
import LogoWhite from "../../public/atlas-logo-white.png";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Layanan Kami", href: "/layanan-kami" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak", href: "/kontak" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-atlas-white border-b border-atlas-blue/10 sticky top-0 z-50 lg:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Atlas Logo"
                className="w-44 lg:w-56 h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "min-w-fit text-sm font-medium transition-colors hover:text-atlas-blue",
                    location.pathname === item.href
                      ? "text-atlas-blue"
                      : "text-black",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={cn(
              "lg:hidden border-t border-atlas-blue/10 overflow-hidden transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0",
            )}
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium py-2 px-3 rounded transition-colors",
                    location.pathname === item.href
                      ? "text-atlas-red bg-atlas-red/5"
                      : "text-atlas-blue hover:text-atlas-red hover:bg-atlas-red/5",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-atlas-blue text-atlas-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center mb-4">
                <img
                  src={LogoWhite}
                  alt="Atlas Logo"
                  className="w-44 lg:w-56 h-auto"
                />
              </Link>
              <p className="text-atlas-white/80 mb-4 max-w-md">
                Solusi terpercaya untuk kebutuhan advertising dan reklame Anda.
                Berpengalaman melayani berbagai klien dengan kualitas terbaik.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold mb-4">Menu</h3>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-atlas-white/80 hover:text-atlas-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
              <div className="space-y-2 text-atlas-white/80">
                <p>
                  <strong>WhatsApp:</strong>
                  <br />
                  +62 813-2200-0798
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  admin@atlasadvertising.id
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-atlas-white/20 mt-8 pt-8 text-center">
            <p className="text-atlas-white/80">
              Copyright © {currentYear} Atlas Advertising. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
