const footerLinks = {
  Navigate: [
    { label: "Find My Options", href: "#eligibility" },
    { label: "DTP Programs", href: "#programs" },
    { label: "About", href: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-serif text-xl text-white tracking-normal">
                Direct<span style={{ color: "#0D9E80" }}>Rx</span>Guide
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              Independent. Unsponsored. Built to help patients and providers
              navigate manufacturer drug programs.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <a
                href="mailto:info@directrxguide.com"
                className="hover:text-teal-400 transition-colors"
              >
                info@directrxguide.com
              </a>
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Not affiliated with any pharmaceutical manufacturer.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-xs text-gray-600 leading-relaxed max-w-4xl">
            <strong className="text-gray-500">Disclaimer:</strong> DirectRxGuide is an independent
            information resource and is not affiliated with, endorsed by, or sponsored by any
            pharmaceutical manufacturer. Program details change frequently — always verify
            current eligibility requirements directly with the manufacturer. This site does not
            provide medical or financial advice. Information is provided for educational purposes
            only.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} DirectRxGuide. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
