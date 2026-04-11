import type { Metadata } from "next";
import { headers } from "next/headers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "Which Drug Makers Could Launch DTP Programs Next? | DirectRxGuide",
  description:
    "AbbVie (Humira, Skyrizi, Rinvoq), Sanofi (Dupixent), and Merck (Keytruda) have not launched direct-to-patient programs yet. Here is what we know and what to watch for.",
  alternates: { canonical: "/learn/upcoming-dtp-programs" },
  keywords: [
    "humira direct-to-patient program",
    "humira without insurance",
    "skyrizi DTP program",
    "skyrizi without insurance",
    "rinvoq without insurance",
    "dupixent direct-to-patient",
    "dupixent without insurance",
    "dupixent price without insurance",
    "keytruda direct-to-patient",
    "keytruda cost without insurance",
    "upcoming DTP programs",
    "new direct-to-patient programs",
    "abbvie DTP",
    "sanofi DTP",
    "merck DTP",
    "drug manufacturer direct programs",
  ],
  openGraph: {
    title:
      "Which Drug Makers Could Launch DTP Programs Next?",
    description:
      "AbbVie, Sanofi, and Merck have not launched direct-to-patient programs yet. Here is what we know and what to watch for.",
    url: "https://www.directrxguide.com/learn/upcoming-dtp-programs",
    siteName: "DirectRxGuide",
    type: "article",
    publishedTime: "2026-03-29T00:00:00Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Which Drug Makers Could Launch DTP Programs Next?",
  description:
    "AbbVie (Humira, Skyrizi, Rinvoq), Sanofi (Dupixent), and Merck (Keytruda) have not launched direct-to-patient programs yet. Here is what we know and what to watch for.",
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  author: {
    "@type": "Organization",
    name: "DirectRxGuide",
    url: "https://www.directrxguide.com",
  },
  publisher: {
    "@type": "Organization",
    name: "DirectRxGuide",
    url: "https://www.directrxguide.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.directrxguide.com/learn/upcoming-dtp-programs",
  },
};

export default function UpcomingDTPProgramsArticle() {
  const nonce = headers().get("x-nonce") ?? undefined;
  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-white pt-20 pb-12 sm:pt-28 sm:pb-16 border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <a
                href="/"
                className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
              >
                Home
              </a>
              <span className="text-gray-300">/</span>
              <a
                href="/learn"
                className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
              >
                Learn
              </a>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-500">
                Upcoming DTP Programs
              </span>
            </div>
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              Industry Watch
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Which drug makers could launch DTP programs next?{" "}
              <em
                className="not-italic italic"
                style={{ color: "#0D9E80" }}
              >
                Here is what we know.
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Right now, 12 direct-to-patient (DTP) platforms are active in
              the United States, covering 45 brand-name drugs. But some of
              the most prescribed (and most expensive) medications in the
              country are not on any DTP platform yet. We are watching
              three major drug makers closely: AbbVie, Sanofi, and Merck.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-03-29">March 29, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <ShareButtons path="/learn/upcoming-dtp-programs" title="Which Drug Makers Could Launch DTP Programs Next?" />
          </div>
        </section>

        {/* Article body */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="space-y-12">
              {/* TL;DR summary */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                <h2 className="font-serif text-xl text-gray-900 mb-3">
                  The short version
                </h2>
                <ul className="space-y-2">
                  {[
                    "AbbVie (Humira, Skyrizi, Rinvoq) has a patient assistance program but no direct-to-patient dispensing platform yet. These are among the most prescribed immunology drugs in the U.S.",
                    "Sanofi (Dupixent) has no confirmed DTP program. Dupixent costs over $3,000 per month at retail and is one of the most-searched drugs for savings options.",
                    "Merck (Keytruda) has no confirmed DTP program. Keytruda is the highest-revenue oncology drug in the world.",
                    "None of these companies have announced DTP launch dates. This article reflects what is publicly known as of March 2026.",
                    "DirectRxGuide monitors these manufacturers and will add them to the platform the moment a DTP program launches.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-sm text-teal-800 leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What is a DTP program */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  What is a direct-to-patient program?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A direct-to-patient (DTP) program is when a drug maker
                  sells their medication directly to you, the patient. You
                  skip the traditional pharmacy and insurance process. The
                  drug ships to your door at a fixed price set by the
                  manufacturer.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  DTP programs have grown quickly since 2024. Companies
                  like Eli Lilly (LillyDirect), Novo Nordisk (NovoCare),
                  and Pfizer (PfizerForAll) were among the first. Today,
                  12 DTP platforms cover drugs for diabetes, obesity,
                  asthma, COPD, heart disease, psoriasis, migraine, and
                  more. But several big drug makers have not launched DTP
                  programs yet — and patients are waiting.
                </p>
              </div>

              {/* AbbVie */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  AbbVie — Humira, Skyrizi, Rinvoq
                </h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-amber-800">
                    Status: No DTP program confirmed
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AbbVie makes some of the most widely used drugs for
                  autoimmune conditions. Humira (adalimumab) was the
                  best-selling drug in the world for nearly a decade.
                  Skyrizi and Rinvoq are its newer replacements, used for
                  psoriasis, Crohn&apos;s disease, rheumatoid arthritis,
                  and other autoimmune conditions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At retail, these drugs are expensive. Skyrizi can cost
                  over $5,000 per month without insurance. Rinvoq is
                  similar. Even Humira, which now has biosimilar
                  competition, still costs over $6,000 per month at list
                  price.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AbbVie currently offers the myAbbVie Assist patient
                  assistance program, which helps some patients get their
                  medications at reduced cost or for free. However, this is
                  a traditional patient assistance program (PAP) — not a
                  direct-to-patient dispensing platform. It typically
                  requires income verification and has more restrictions
                  than a DTP program.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A DTP program from AbbVie would be significant. Millions
                  of patients take Humira, Skyrizi, or Rinvoq, and many
                  struggle with the cost — especially those without
                  insurance or with high-deductible plans. As of March
                  2026, AbbVie has not announced plans to launch a DTP
                  platform.
                </p>

                <div className="overflow-x-auto -mx-4 px-4 mt-6">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Drug
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Used for
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Retail price
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          DTP available?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          name: "Humira",
                          generic: "adalimumab",
                          use: "RA, Crohn\u2019s, psoriasis, UC",
                          price: "$6,000+/mo",
                          dtp: "No",
                        },
                        {
                          name: "Skyrizi",
                          generic: "risankizumab",
                          use: "Psoriasis, Crohn\u2019s, UC",
                          price: "$5,000+/mo",
                          dtp: "No",
                        },
                        {
                          name: "Rinvoq",
                          generic: "upadacitinib",
                          use: "RA, psoriatic arthritis, UC, eczema",
                          price: "$5,000+/mo",
                          dtp: "No",
                        },
                      ].map((row) => (
                        <tr key={row.name} className="text-gray-600">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            {row.name}
                            <span className="block text-xs font-normal text-gray-400 mt-0.5">
                              {row.generic}
                            </span>
                          </td>
                          <td className="px-4 py-3">{row.use}</td>
                          <td className="px-4 py-3">{row.price}</td>
                          <td className="px-4 py-3 font-medium text-amber-600">
                            {row.dtp}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sanofi */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Sanofi — Dupixent
                </h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-amber-800">
                    Status: No DTP program confirmed
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dupixent (dupilumab) is one of the most important new
                  drugs in immunology. It is FDA-approved for moderate-to-severe
                  eczema (atopic dermatitis), asthma, chronic rhinosinusitis
                  with nasal polyps, and other conditions. For many patients
                  with severe eczema or hard-to-control asthma, Dupixent is
                  life-changing.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The problem is the price. Without insurance, Dupixent
                  costs roughly $3,000 to $3,500 per month. Even with
                  insurance, copays can be hundreds of dollars. Sanofi
                  offers a copay card for commercially insured patients,
                  but there is no self-pay or cash-price DTP program
                  available today.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dupixent is one of the most-searched drugs for savings
                  options. If Sanofi were to launch a DTP program with
                  transparent cash pricing — similar to what Novo Nordisk
                  did with Wegovy or what Novartis did with Cosentyx — it
                  would immediately become one of the most impactful DTP
                  programs in the market. As of March 2026, Sanofi has not
                  announced any plans to do so.
                </p>

                <div className="overflow-x-auto -mx-4 px-4 mt-6">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Drug
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Used for
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Retail price
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          DTP available?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="text-gray-600">
                        <td className="px-4 py-3 font-medium text-gray-800">
                          Dupixent
                          <span className="block text-xs font-normal text-gray-400 mt-0.5">
                            dupilumab
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          Eczema, asthma, nasal polyps
                        </td>
                        <td className="px-4 py-3">$3,000–$3,500/mo</td>
                        <td className="px-4 py-3 font-medium text-amber-600">
                          No
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Merck */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Merck — Keytruda
                </h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-amber-800">
                    Status: No DTP program confirmed
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Keytruda (pembrolizumab) is the highest-revenue drug in
                  the world. It is an immunotherapy medication used to
                  treat many types of cancer, including lung cancer,
                  melanoma, head and neck cancer, bladder cancer, and
                  others. For many cancer patients, Keytruda is a critical
                  part of their treatment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Keytruda is given as an IV infusion at a doctor&apos;s
                  office or hospital, which makes it different from most
                  DTP drugs (which are pills or self-injections you take at
                  home). The cost is also much higher — over $10,000 per
                  infusion at list price. Most patients receive Keytruda
                  through insurance or hospital programs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Merck currently offers the Merck Helps patient assistance
                  program for eligible patients, but it is a traditional
                  PAP with income requirements. A true DTP program for
                  Keytruda would be complex because of the IV
                  administration, but Merck has other drugs in its
                  portfolio (like Januvia for diabetes) that could be
                  candidates for a DTP model. As of March 2026, Merck has
                  not announced any DTP plans.
                </p>

                <div className="overflow-x-auto -mx-4 px-4 mt-6">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Drug
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Used for
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Retail price
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          DTP available?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          name: "Keytruda",
                          generic: "pembrolizumab",
                          use: "Lung cancer, melanoma, others",
                          price: "$10,000+/infusion",
                          dtp: "No",
                        },
                        {
                          name: "Januvia",
                          generic: "sitagliptin",
                          use: "Type 2 diabetes",
                          price: "$500+/mo",
                          dtp: "No",
                        },
                      ].map((row) => (
                        <tr key={row.name} className="text-gray-600">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            {row.name}
                            <span className="block text-xs font-normal text-gray-400 mt-0.5">
                              {row.generic}
                            </span>
                          </td>
                          <td className="px-4 py-3">{row.use}</td>
                          <td className="px-4 py-3">{row.price}</td>
                          <td className="px-4 py-3 font-medium text-amber-600">
                            {row.dtp}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* What about BI expansion */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Existing platforms that may add more drugs
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  It is not just new platforms we are watching. Some
                  existing DTP platforms are expected to expand their drug
                  offerings over time.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Boehringer Ingelheim Direct",
                      body: "Currently offers 4 drugs (Spiriva, Striverdi, Jentadueto, Jentadueto XR). Boehringer Ingelheim has a larger respiratory and diabetes portfolio that could be added to the platform, including Combivent Respimat and Jardiance (co-marketed with Lilly).",
                    },
                    {
                      title: "AZ Patient Direct",
                      body: "Currently offers 4 drugs (Farxiga, Airsupra, Xigduo XR, Bevespi). AstraZeneca has many other high-demand drugs including Symbicort (asthma/COPD), Brilinta (heart), and FluMist (seasonal flu vaccine) that could be added.",
                    },
                    {
                      title: "PfizerForAll",
                      body: "Currently offers 5 drugs across migraine, infectious disease, dermatology, and rheumatology. Pfizer has a large portfolio including Ibrance (breast cancer) and Vyndaqel (heart) that could expand the platform.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-50 rounded-xl p-5"
                    >
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why does this matter */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Why does this matter for patients?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  DTP programs give patients a way to buy their medication
                  at a fixed, transparent price — without dealing with
                  insurance approvals, prior authorizations, or surprise
                  pharmacy bills. For patients who are uninsured, or who
                  have high-deductible plans, these programs can save
                  hundreds or even thousands of dollars per month.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The more manufacturers that launch DTP programs, the more
                  options patients have. Right now, drugs like Dupixent,
                  Skyrizi, and Rinvoq leave many patients with few
                  affordable options outside of traditional insurance or
                  patient assistance programs with income requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe this space will continue to grow. The success
                  of LillyDirect, NovoCare, and other early DTP platforms
                  has shown that patients want transparent pricing and
                  direct access. The question is not if more manufacturers
                  will launch DTP programs — it is when.
                </p>
              </div>

              {/* How DirectRxGuide helps */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How DirectRxGuide helps
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  DirectRxGuide is an independent information aggregator
                  that tracks every active direct-to-patient program in the
                  United States. No pharmaceutical manufacturer funds,
                  sponsors, or influences this platform. We monitor the
                  industry daily and add new programs as soon as they
                  launch.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If AbbVie, Sanofi, Merck, or any other manufacturer
                  launches a DTP program, you will find it on
                  DirectRxGuide. In the meantime, you can use our Find My
                  Options tool to see every DTP program that is available
                  today for your condition and insurance status.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 sm:p-8 text-center">
                <h2 className="font-serif text-2xl text-gray-900 mb-3">
                  See what DTP programs are available now
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Use our free tool to compare every active DTP program.
                  Select your condition and insurance status to see prices
                  available to you. No account required.
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

              {/* Disclaimer */}
              <div className="border-t border-gray-100 pt-10">
                <p className="text-xs text-gray-400 leading-relaxed">
                  <strong className="text-gray-500">
                    Medical disclaimer:
                  </strong>{" "}
                  DirectRxGuide does not provide medical advice. All content
                  is for informational purposes only. Always consult your
                  healthcare provider before making changes to your
                  medications. DirectRxGuide is not a pharmacy, prescriber,
                  or healthcare provider. The manufacturers mentioned in
                  this article have not confirmed DTP program launches.
                  Information reflects publicly available data as of the
                  published date. Verify current details directly with each
                  manufacturer.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
