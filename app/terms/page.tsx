import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — DirectRxGuide",
  description:
    "Terms of Service for DirectRxGuide.com. An independent information aggregator for manufacturer direct-to-patient drug programs.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
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
              Terms of Service
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
                Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before
                using DirectRxGuide.com (&ldquo;the Site&rdquo;), operated by DirectRxGuide
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing
                or using the Site, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                1. Nature of the service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                DirectRxGuide is an independent information aggregator. We compile
                publicly available information about manufacturer direct-to-patient
                (DTP) prescription drug programs to help patients and healthcare
                providers find, compare, and understand their options.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                DirectRxGuide is not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1.5 ml-1 mt-2">
                <li>A pharmacy or dispensary</li>
                <li>A prescriber or healthcare provider</li>
                <li>An insurance company or benefits administrator</li>
                <li>A representative or agent of any pharmaceutical manufacturer</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We do not sell, dispense, prescribe, or facilitate the purchase of any
                medication. We do not process insurance claims or enrollment
                applications.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                2. Medical disclaimer
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <p className="text-amber-900 leading-relaxed mb-3">
                  <strong>
                    The content on DirectRxGuide does not constitute medical advice.
                  </strong>
                </p>
                <p className="text-amber-800 leading-relaxed mb-3">
                  All information is provided for educational and informational purposes
                  only. Nothing on this Site should be interpreted as a recommendation
                  to start, stop, or change any medication or treatment plan. Always
                  consult your healthcare provider before making decisions about your
                  medications.
                </p>
                <p className="text-amber-800 leading-relaxed">
                  Drug pricing, program eligibility, and availability are subject to
                  change at any time. Always verify current details directly with the
                  manufacturer before enrolling in any program. Displaying a program
                  on this Site does not guarantee your eligibility.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                3. Accuracy of information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We make reasonable efforts to ensure the accuracy of program details
                including pricing, eligibility requirements, and availability. All
                program information is sourced directly from manufacturer websites and
                manually verified by a licensed pharmacist.
              </p>
              <p className="text-gray-600 leading-relaxed">
                However, program details change frequently and often without public
                notice. We do not guarantee that the information on this Site is
                complete, current, or error-free at any given time. Each program
                profile displays a &ldquo;Last Verified&rdquo; date for transparency.
                You should always confirm eligibility and pricing directly with the
                manufacturer.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                4. Third-party websites
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                DirectRxGuide contains links to official manufacturer DTP program
                websites. These links are provided solely for your convenience to
                access the manufacturer&apos;s enrollment or information pages.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you click an outbound link, you leave DirectRxGuide and are
                subject to the terms of service, privacy policy, and practices of the
                destination website. We display an exit disclaimer before directing you
                to any external site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not responsible for the content, accuracy, privacy practices,
                or availability of any third-party website. Inclusion of a link does
                not imply endorsement, affiliation, or sponsorship.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                5. Independence and editorial integrity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                No pharmaceutical manufacturer funds, sponsors, or influences this
                platform. No manufacturer pays to be listed, ranked, or featured. Program
                profiles are published based on public availability, not commercial
                relationships.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Program rankings in the &ldquo;Find My Options&rdquo; tool are
                determined algorithmically based on estimated out-of-pocket cost,
                accessibility, and insurance compatibility. Rankings are never influenced
                by manufacturer relationships, advertising, or payment.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                6. &ldquo;Find My Options&rdquo; tool
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The &ldquo;Find My Options&rdquo; tool matches users to DTP programs
                based on self-reported condition and insurance status. Results are
                informational only and do not constitute a determination of eligibility
                for any program.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All tool selections are processed entirely in your browser. No
                selections, inputs, or results are transmitted to our servers or stored
                in any database. We never have access to your health-related selections.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                7. Intellectual property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The content, design, and code of DirectRxGuide are the property of
                DirectRxGuide and are protected by applicable intellectual property
                laws. You may not copy, reproduce, distribute, or create derivative
                works from this Site without our prior written consent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Drug names, brand names, and manufacturer names referenced on this Site
                are trademarks of their respective owners. Their use here is for
                identification purposes only and does not imply endorsement or
                affiliation.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                8. Limitation of liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                To the fullest extent permitted by applicable law, DirectRxGuide and its
                operators shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from your use of or inability
                to use this Site, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1.5 ml-1">
                <li>Reliance on information presented on this Site</li>
                <li>Decisions made based on program information or tool results</li>
                <li>Changes to program pricing, eligibility, or availability</li>
                <li>Actions taken on third-party websites accessed through our links</li>
                <li>Interruptions or errors in Site availability</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                This Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                without warranties of any kind, either express or implied, including but
                not limited to implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                9. Prohibited uses
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1.5 ml-1">
                <li>Use this Site for any unlawful purpose</li>
                <li>Scrape, crawl, or automatically extract data from this Site without our consent</li>
                <li>Misrepresent your affiliation with DirectRxGuide</li>
                <li>Attempt to gain unauthorized access to our systems or infrastructure</li>
                <li>Use information from this Site to mislead patients about their eligibility or program terms</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                10. Governing law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the
                laws of the United States and the state in which DirectRxGuide operates,
                without regard to conflict of law principles. Any disputes arising under
                these Terms shall be resolved in the appropriate courts of that
                jurisdiction.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                11. Changes to these terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be
                posted on this page with an updated effective date. Your continued use
                of DirectRxGuide after any changes constitutes acceptance of the updated
                Terms.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                12. Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about these Terms, you may contact us at:{" "}
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
