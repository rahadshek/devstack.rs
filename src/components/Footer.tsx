import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-300 pt-12 sm:mt-20 sm:pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Logo + Description */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-5">
            <img src={logo} alt="Dev Stack logo" className="w-36 sm:w-40" />

            <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <ul className="flex gap-4 pt-3">
              <li className="cursor-pointer text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base">
                GitHub
              </li>

              <li className="cursor-pointer text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base">
                Twitter
              </li>

              <li className="cursor-pointer text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base">
                LinkedIn
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div className="sm:col-span-2 lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              {/* Product */}
              <div>
                <h2 className="mb-3 text-sm font-bold text-gray-900">
                  PRODUCT
                </h2>

                <ul className="space-y-2">
                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    Home
                  </li>

                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    Technologies
                  </li>

                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    Projects
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h2 className="mb-3 text-sm font-bold text-gray-900">
                  COMPANY
                </h2>

                <ul className="space-y-2">
                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    About
                  </li>

                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    Contact
                  </li>

                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    Careers
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h2 className="mb-3 text-sm font-bold text-gray-900">LEGAL</h2>

                <ul className="space-y-2">
                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    Privacy Policy
                  </li>

                  <li className="cursor-pointer text-sm text-gray-500 transition hover:text-gray-900">
                    Terms of Service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-6 sm:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <p className="text-xs text-gray-400 sm:text-sm">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="cursor-pointer text-xs text-gray-400 transition hover:text-gray-700 sm:text-sm">
              Privacy
            </span>

            <span className="cursor-pointer text-xs text-gray-400 transition hover:text-gray-700 sm:text-sm">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
