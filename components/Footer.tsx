import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/foundation-os', label: 'Foundation OS' },
  { href: '/60-day-revenue-system', label: '60-Day System' },
  { href: '/about', label: 'About' },
  { href: '/book', label: 'Book a Call' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair text-2xl font-bold text-cream">
                Aligned Systems
              </span>
            </Link>
            <p className="label-caps text-sage/80 text-[10px] tracking-[0.22em] mb-4">
              Turn your business into a system
            </p>
            <p className="font-inter text-sm text-cream/60 leading-relaxed max-w-xs">
              We help coaches and service-based business owners turn their chaos into a simple, scalable system that consistently brings in clients without doing everything manually.
            </p>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/lola.longevity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-inter text-sage hover:text-teal transition-colors duration-200 group"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                @lola.longevity
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="label-caps text-[10px] tracking-[0.22em] text-sage/80 mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-cream/60 hover:text-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="label-caps text-[10px] tracking-[0.22em] text-sage/80 mb-5">
              Ready to Build?
            </h3>
            <p className="font-inter text-sm text-cream/60 leading-relaxed mb-6">
              From first client to fully automated business. Let&apos;s build
              your system together.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-teal text-cream font-inter font-semibold text-sm px-6 py-3 rounded-[10px] hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              Book Your Foundation Call
              <span>→</span>
            </Link>
            <div className="mt-8 pt-8 border-t border-cream/10">
              <p className="label-caps text-[10px] tracking-[0.18em] text-sage/60 mb-2">
                The Promise
              </p>
              <p className="font-playfair italic text-cream/40 text-sm leading-relaxed">
                &ldquo;We help coaches and service-based business owners turn their chaos into a simple, scalable system that consistently brings in clients without doing everything manually.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-cream/30">
            © {new Date().getFullYear()} Lola Systems. All rights reserved.
          </p>
          <p className="font-inter text-xs text-cream/30 text-center max-w-md">
            Results vary. Foundation OS is a business systems service, not a
            guaranteed income program. Individual results depend on effort,
            industry, and market conditions.
          </p>
        </div>
      </div>
    </footer>
  )
}
