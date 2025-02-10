"use client"

import { Heart, ShoppingBag, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartSidebar } from "./CartSidebar"
import AccountMenu from "./AccountMenu"
import { TBaseUser } from "@/lib/schema/user.schema"

type Props = {
  user: TBaseUser | null
}

const rightLinks = [
  { name: "COLLECTIONS", href: "/collections" },
  { name: "SLING BAGS", href: "/sling-bags" },
  { name: "SCHOOL BAGS", href: "/school-bags" },
  { name: "TOTE BAGS", href: "/tote-bags" },
  { name: "HANDBAGS", href: "/handbags" },
  { name: "SHOULDER BAGS", href: "/shoulder-bags" },
  { name: "CLUTCH BAGS", href: "/clutch-bags" },
]

export function MainNav(props: Props) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`flex h-16 items-center justify-between px-4 md:px-6 transition-shadow duration-200 ${isScrolled ? "border-b border-brand-primary/10 shadow-sm" : ""}`}
    >
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px]">
          <nav className="flex flex-col space-y-4">
            <div className="my-2 h-px bg-border" />
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium transition-colors hover:text-brand-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <Link href="/" className="flex items-center justify-center">
        <span className="text-2xl font-bold text-brand-secondary">aaifa</span>
        <span className="text-2xl font-bold text-brand-primary">.</span>
      </Link>

      {/* Desktop Right Links */}
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex md:gap-6">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-brand-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <AccountMenu user={props.user} />
          <Link href="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5 text-brand-primary hover:text-brand-primary/80 transition-colors" />
            </Button>
          </Link>
          <div className="">
            <CartSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

