import Image from "next/image";
import Link from "next/link";
import useServicesData from "@/data/useServiceData";

const Footer = () => {
  const servicesData = useServicesData();

  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
        
          {/* Logo and Address Section */}
          <div className="mb-10 w-full px-4 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 max-w-[360px]">
              <Link href="/" className="mb-6 inline-block">
                <Image src="/logo.svg" alt="logo" width={200} height={100} />
              </Link>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Sudetenstraße 105 <br /> 64385 Reichelsheim
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="w-full px-4 lg:w-5/12 xl:w-6/12">
            <div className="mb-10 lg:mb-0">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Services
              </h2>
              <div className="-mx-2 flex flex-wrap">
                {servicesData?.map((service) => (
                  <div
                    key={service.title}
                    className="mb-4 w-full px-2 sm:w-1/2"
                  >
                    <h4 className="mb-2 text-base font-semibold text-body-color dark:text-body-color-dark">
                      {service.title}
                    </h4>
                    <ul className="space-y-2">
                      {service.subServices.map((subService) => (
                        <li key={subService.title}>
                          <Link
                            href={`/services${subService.path}`}
                            className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                          >
                            {subService.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Support & Help Section */}
          <div className="w-full px-4 lg:w-3/12 xl:w-3/12">
            <div className="mb-10 lg:mb-0">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Support & Help
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/contact"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-14 z-[-1]">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 z-[-1]">
        <svg
          width="79"
          height="94"
          viewBox="0 0 79 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_94:889)"
          />
          <rect
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            stroke="url(#paint1_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
            fill="url(#paint2_linear_94:889)"
          />
          <path
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
            stroke="url(#paint3_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
            fill="url(#paint4_linear_94:889)"
          />
          <path
            d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
            stroke="url(#paint5_linear_94:889)"
            strokeWidth="0.7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94:889"
              x1="-41"
              y1="21.8445"
              x2="36.9671"
              y2="59.8878"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_94:889"
              x1="25.6675"
              y1="95.9631"
              x2="-42.9608"
              y2="20.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_94:889"
              x1="20.325"
              y1="-3.98039"
              x2="90.6248"
              y2="25.1062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_94:889"
              x1="18.3642"
              y1="-1.59742"
              x2="113.9"
              y2="80.6826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_94:889"
              x1="61.1098"
              y1="62.3249"
              x2="-8.82468"
              y2="58.2156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_94:889"
              x1="65.4236"
              y1="65.0701"
              x2="24.0178"
              y2="41.6598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
