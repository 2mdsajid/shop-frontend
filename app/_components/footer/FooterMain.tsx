import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, PhoneCallIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/New-purse/100069938766151/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/new_purse_2011", label: "Instagram" },
  { icon: PhoneCallIcon, href: "+919718923964", label: "Whatsapp" },
  { icon: Mail, href: "mailto:support@newpurse.in", label: "Gmail" },

  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Youtube, href: "#", label: "Youtube" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const aboutLinks = [
  { name: "Customer Reviews", href: "/reviews" },
  { name: "About Us", href: "/about" },
  { name: "Store Locator", href: "/store-locator" },
]

const usefulLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Refund Policy", href: "/refund" },
  { name: "Shipping Policy", href: "/shipping-policy" },
]

export function Footer() {
  return (
    <footer className="bg-[#C65D47] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Find us on */}
          <div>
            <h3 className="text-lg font-semibold">Find us on</h3>
            <p className="mt-4 text-sm">Aaifa is a Modern Indian Lifestyle Brand for Bags, Wallets & Luggage.</p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* About Aaifa */}
          <div>
            <h3 className="text-lg font-semibold">About Aaifa</h3>
            <ul className="mt-4 space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="mt-4 space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold">Bulk Order</h4>
            <p className="mt-4 text-sm">
              Looking for a bulk deal? Call us at{" "}
              <Link href="tel:+919718923964" className="underline">
                +91 9718923964
              </Link>{" "}
              or{" "}
              <Link href="mailto:support@aaifa.in" className="underline">
                support@aaifa.in
              </Link>{" "}
              to submit your requirements.
            </p>
          </div>


          {/* <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="mt-6 space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-teal-800 hover:bg-teal-700">SUBSCRIBE</Button>
            </form>
          </div> */}
        </div>

        {/* Company Description */}
        <div className="mt-16 border-t border-white/20 pt-8 text-sm">
          <p className="mb-4">
            Manufacture & suppliers of all kind of ladies purse. We produce a variety of bags for women across different style and utility ideas. We have our range of ladies’ bags created in different shapes, designs, crafts, colors, accessories, closures, and holding & keeping units. With our vast women handbags wholesale range, we cater to different commercial bases and retail units to serve their customers across different parts of the globe.
          </p>
          <p>&copy; {new Date().getFullYear()} Aaifa.</p>
        </div>
      </div>
    </footer>
  )
}

