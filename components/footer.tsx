import Link from "next/link";
import Image from "next/image";
import { Sun, Wind, Droplets } from "lucide-react";
import shiftlyLogo from "@/public/ShiftlyLogo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={shiftlyLogo}
                alt="Shiftly logo"
                width={19}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-serif text-2xl font-medium">Shiftly</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Shifting towards nature. Fresh vegetables grown with 100% renewable energy.
            </p>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Sun className="h-4 w-4 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Wind className="h-4 w-4 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Droplets className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/shop" className="hover:text-primary">All Products</Link></li>
              <li><Link href="/shop?category=Vegetables" className="hover:text-primary">Vegetables</Link></li>
              <li><Link href="/shop?category=Leafy+Greens" className="hover:text-primary">Leafy Greens</Link></li>
              <li><Link href="/shop?category=Root+Vegetables" className="hover:text-primary">Root Vegetables</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/about#farms" className="hover:text-primary">Our Farms</Link></li>
              <li><Link href="/about#mission" className="hover:text-primary">Our Mission</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Our Values</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>100% Green Sources</li>
              <li>Full Transparency</li>
              <li>Freshness & Taste</li>
              <li>Fair Pay for Farmers</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shiftly. All rights reserved. Shifting towards a greener future.
          </p>
        </div>
      </div>
    </footer>
  );
}
