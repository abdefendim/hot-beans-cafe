import { Link, useLocation } from "wouter";
import { Coffee, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/apply", label: "Apply" },
  { href: "/courses", label: "Courses" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <Coffee className="w-6 h-6" />
            <span>HOT BEANS</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold hover:text-primary transition-colors">
            Login
          </Link>
          <Button className="rounded-full font-bold px-6">Register</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 pt-12">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8 border-t pt-8">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center font-bold text-lg"
                >
                  Login
                </Link>
                <Button className="rounded-full font-bold w-full size-lg" onClick={() => setIsOpen(false)}>
                  Register
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
