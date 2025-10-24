import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const Policy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Page Header */}
      <header className="bg-white border-b shadow-sm mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Policy &amp; Privacy
              </h1>
              <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" />
                <span>Last updated: October 23, 2025</span>
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-2">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  On this page
                </p>
                <ul className="space-y-1 text-sm">
                  {[
                    "introduction",
                    "definitions",
                    "data-collected",
                    "use-of-data",
                    "security",
                    "contact",
                  ].map((id) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        {id
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Article */}
            <article className="lg:col-span-3 bg-white shadow-md rounded-2xl p-8 border border-gray-100">
              {/* Introduction */}
              <section id="introduction" className="prose prose-neutral max-w-none">
                <h2 className="text-xl font-bold text-gray-900">Introduction</h2>
                <p>
                  This Privacy Policy describes our policies and procedures on
                  the collection, use, and disclosure of your information when
                  you use the Service and explains your privacy rights and how
                  the law protects you.
                </p>
                <p className="mt-4">
                  By using the Service, you agree to the collection and use of
                  information in accordance with this Privacy Policy.
                </p>
              </section>

              {/* Definitions */}
              <section id="definitions" className="mt-8 prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900">
                  Interpretation and Definitions
                </h3>
                <p>
                  Words whose initial letters are capitalized have meanings
                  defined under the following conditions. These definitions
                  shall have the same meaning whether they appear in singular or
                  plural form.
                </p>

                <h4 className="mt-4 font-medium text-gray-800">Definitions</h4>
                <ul>
                  <li>
                    <strong>Account</strong> means a unique account created for
                    you to access our Service.
                  </li>
                  <li>
                    <strong>Company</strong> (referred to as "We", "Us", or
                    "Our") refers to Bankiti.
                  </li>
                  <li>
                    <strong>Cookies</strong> are small files placed on your
                    device containing details of your browsing history.
                  </li>
                  <li>
                    <strong>Country</strong> refers to Ghana.
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer or smartphone.
                  </li>
                  <li>
                    <strong>Personal Data</strong> refers to any information
                    relating to an identified or identifiable individual.
                  </li>
                </ul>
              </section>

              {/* Types of Data Collected */}
              <section id="data-collected" className="mt-8 prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900">
                  Types of Data Collected
                </h3>
                <p>
                  While using our Service, we may ask you to provide personally
                  identifiable information that can be used to contact or
                  identify you. This may include:
                </p>
                <ul>
                  <li>Email address</li>
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Address (State, Province, ZIP/Postal Code, City)</li>
                  <li>Usage Data</li>
                </ul>

                <h4 className="mt-4 font-medium text-gray-800">Usage Data</h4>
                <p>
                  Usage Data is collected automatically when using the Service.
                  It may include information such as your IP address, browser
                  type, pages visited, and time spent on those pages.
                </p>
              </section>

              {/* Use of Data */}
              <section id="use-of-data" className="mt-8 prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900">
                  Use of Personal Data
                </h3>
                <p>We may use Personal Data for the following purposes:</p>
                <ul>
                  <li>To provide and maintain the Service</li>
                  <li>To manage your account and provide customer support</li>
                  <li>To process transactions securely</li>
                  <li>To comply with legal obligations</li>
                  <li>To improve and enhance our services</li>
                </ul>
              </section>

              {/* Security */}
              <section id="security" className="mt-8 prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900">
                  Security
                </h3>
                <p>
                  We use advanced encryption, access control, and monitoring
                  systems to protect your personal information. However, please
                  note that no online transmission or storage method is 100%
                  secure.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="mt-8 prose max-w-none pb-10">
                <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
                <p>
                  If you have any questions about this Privacy Policy, you can
                  contact us at:
                </p>
                <p className="font-medium text-gray-800">
                  privacy@bankiti.com
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  This Privacy Policy was last updated on October 23, 2025.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Policy;
