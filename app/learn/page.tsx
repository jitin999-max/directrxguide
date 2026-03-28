import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Learn — DirectRxGuide",
  description:
    "Patient guides on direct-to-patient drug programs, prescription savings, and how to access brand-name medications at lower prices. Free, unbiased, and pharmacist-reviewed.",
  openGraph: {
    title: "Learn — DirectRxGuide",
    description:
      "Patient guides on direct-to-patient drug programs, prescription savings, and how to access brand-name medications at lower prices.",
    url: "https://directrxguide.com/learn",
    siteName: "DirectRxGuide",
    type: "website",
  },
};

const articles = [
  {
    title: "What Are Direct-to-Patient Drug Programs?",
    description:
      "Learn how direct-to-patient (DTP) programs work, who qualifies, and what to consider before enrolling. A complete guide for patients.",
    href: "/learn/direct-to-patient-programs-explained",
    date: "March 28, 2026",
    readTime: "8 min read",
    tag: "Essentials",
  },
  {
    title: "How to Get Prescription Drugs Without Insurance",
    description:
      "Options for uninsured patients looking to access brand-name medications at lower prices through manufacturer direct-to-patient programs.",
    href: "/learn/prescription-drugs-without-insurance",
    date: "March 28, 2026",
    readTime: "9 min read",
    tag: "Uninsured",
  },
  {
    title: "Direct-to-Consumer Drug Programs: What Patients Need to Know",
    description:
      "Understanding the difference between DTC and DTP programs, most-favored-nation pricing, and how these new models affect your prescription options.",
    href: "/learn/direct-to-consumer-drug-programs",
    date: "March 28, 2026",
    readTime: "10 min read",
    tag: "Policy",
  },
  {
    title: "The Cheapest Way to Get Brand-Name Prescription Drugs",
    description:
      "A comparison of every way to save on brand-name medications, from insurance formularies and copay cards to direct-to-patient programs.",
    href: "/learn/cheapest-way-to-get-brand-name-drugs",
    date: "March 28, 2026",
    readTime: "10 min read",
    tag: "Savings",
  },
];

export default function LearnPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-white pt-20 pb-12 sm:pt-28 sm:pb-16 border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              Patient Guides
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Learn about direct-to-patient{" "}
              <em
                className="not-italic italic"
                style={{ color: "#0D9E80" }}
              >
                drug programs.
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Free, unbiased guides to help you understand how manufacturer
              drug programs work, who qualifies, and how to find the lowest
              price for your medication.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {articles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  className="block bg-white rounded-2xl border border-gray-200 p-6 hover:border-teal-300 hover:shadow-md hover:shadow-teal-50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-teal-50 text-teal-700 border border-teal-200">
                          {article.tag}
                        </span>
                        <span className="text-xs text-gray-400">
                          {article.date}
                        </span>
                        <span className="text-xs text-gray-400">
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl sm:text-2xl text-gray-900 group-hover:text-teal-700 transition-colors mb-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-teal-500 flex-shrink-0 mt-8 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="font-serif text-2xl text-gray-900 mb-3">
                Ready to find your options?
              </h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Use our free tool to see which direct-to-patient programs
                match your condition and insurance status.
              </p>
              <a
                href="/#eligibility"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-200 transition-all duration-200"
              >
                Find My Options
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
