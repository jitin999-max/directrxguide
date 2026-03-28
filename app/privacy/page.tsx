import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — DirectRxGuide",
  description:
    "DirectRxGuide privacy policy. We never collect, store, or sell personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-white pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400">
              Effective date: March 26, 2026 &middot; Last updated: March 26, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Intro */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                DirectRxGuide (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                operates the website directrxguide.com. This Privacy Policy explains what
                information we collect, how we use it, and your rights regarding that
                information.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong className="text-gray-900">The short version:</strong> We do not
                collect, store, or sell any personally identifiable information (PII).
                We do not require accounts, logins, or registrations to use this site.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                1. Information we do not collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                DirectRxGuide is designed to operate without collecting personal
                information. We do not collect or store:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1.5 ml-1">
                <li>Names, email addresses, or contact information</li>
                <li>Health conditions, diagnoses, or medical history</li>
                <li>Insurance information or financial details</li>
                <li>Social Security numbers or government identifiers</li>
                <li>Precise geolocation data</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                When you use the &ldquo;Find My Options&rdquo; tool, your selections
                (condition, insurance status) are processed entirely in your browser.
                These selections are never transmitted to our servers or stored in any
                database.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                2. Information we collect automatically
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Like most websites, we collect limited, non-identifying technical
                information through:
              </p>

              <h3 className="font-semibold text-lg text-gray-900 mt-5 mb-2">
                Google Analytics 4
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use Google Analytics 4 to understand how visitors use our site.
                Google Analytics is <strong className="text-gray-900">only loaded after
                you provide consent</strong> via the cookie banner displayed on your first
                visit. If you decline, no analytics scripts are loaded and no analytics
                cookies are set. If you accept, Google Analytics collects aggregated,
                anonymized data including pages visited, time on site, device type, browser
                type, and general geographic region (country/state level). Google Analytics
                does not collect your name, email, IP address (IP anonymization is enabled),
                or any health-related information. You can change your preference at any
                time by clearing your browser&apos;s local storage for this site. You can
                also opt out of Google Analytics by installing the{" "}
                <span className="text-gray-900 font-medium">
                  Google Analytics Opt-out Browser Add-on
                </span>.
              </p>

              <h3 className="font-semibold text-lg text-gray-900 mt-5 mb-2">
                Anonymous session logs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain anonymous session logs (via Supabase) for site performance
                monitoring. These logs contain randomly generated session identifiers
                and do not contain any personally identifiable information.
              </p>

              <h3 className="font-semibold text-lg text-gray-900 mt-5 mb-2">
                Hosting and CDN
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our site is hosted on Vercel and uses Cloudflare for DNS and content
                delivery. These services may automatically collect standard server logs
                (IP addresses, request timestamps) as part of their infrastructure.
                We do not access or use these logs to identify individual users.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                3. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you first visit DirectRxGuide, a cookie consent banner asks whether
                you accept or decline analytics cookies. Your choice is saved in your
                browser&apos;s local storage so the banner is not shown again on future visits.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong className="text-gray-900">If you accept:</strong> Google Analytics
                sets first-party cookies to distinguish unique visitors and throttle
                request rates. These are the only cookies on this site.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong className="text-gray-900">If you decline:</strong> No analytics
                cookies are set and no analytics scripts are loaded.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We do not use cookies for advertising, tracking, retargeting, or any
                purpose beyond aggregated site analytics. We do not use third-party
                advertising cookies.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                4. Third-party links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                DirectRxGuide contains links to manufacturer direct-to-patient (DTP)
                program websites. When you click an outbound link, you leave our site
                and are subject to the privacy policy of the destination website. We
                display an exit disclaimer before directing you to any external site.
                We are not responsible for the privacy practices of third-party
                websites.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                5. Data sales and sharing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, rent, lease, or share any personal information with
                third parties. We have no personal information to sell.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                6. Your rights under state privacy laws
              </h2>

              <h3 className="font-semibold text-lg text-gray-900 mt-5 mb-2">
                California (CCPA/CPRA)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Under the California Consumer Privacy Act and California Privacy Rights
                Act, California residents have the right to know what personal
                information is collected, request deletion, and opt out of the sale of
                personal information. Because we do not collect or store personal
                information, these rights are satisfied by default. We do not sell
                personal information as defined by the CCPA.
              </p>

              <h3 className="font-semibold text-lg text-gray-900 mt-5 mb-2">
                Virginia (VCDPA)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Under the Virginia Consumer Data Protection Act, Virginia residents
                have the right to access, correct, delete, and obtain a copy of their
                personal data, and to opt out of data processing for targeted advertising
                or sale. Because we do not collect personal data, these rights are
                satisfied by default.
              </p>

              <h3 className="font-semibold text-lg text-gray-900 mt-5 mb-2">
                Other states
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you are a resident of a state with consumer data privacy legislation
                (Colorado, Connecticut, Utah, Oregon, Texas, Montana, etc.), the same
                principle applies: we do not collect personal information, so your
                rights under those laws are inherently satisfied.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                7. Children&apos;s privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                DirectRxGuide is not directed at children under the age of 13. We do
                not knowingly collect any information from children. If you believe a
                child has provided information to us, please contact us and we will take
                steps to address it.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                8. Changes to this policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be
                posted on this page with an updated effective date. Your continued use
                of DirectRxGuide after any changes constitutes acceptance of the
                updated policy.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                9. Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy, you may contact us at:{" "}
                <span className="text-gray-900 font-medium">
                  info@directrxguide.com
                </span>
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
