// components/Nav.tsx
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center font-bold text-primary">RD</div>
          <div>
            <div className="font-semibold">RealData Africa</div>
            <div className="text-xs text-blue-100">Property Intelligence Across the Continent</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/register" className="bg-white text-primary px-3 py-2 rounded-md font-semibold">Register</Link>
        </nav>
        {/* mobile nav quick links */}
        <div className="md:hidden">
          <Link href="/contact" className="text-white/90">Contact</Link>
        </div>
      </div>
    </header>
  );
}
