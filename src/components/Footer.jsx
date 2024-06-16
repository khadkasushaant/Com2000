import { styles } from "../styles";

const Footer = () => {
  return (
    <>
      <div>
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center md:pr-32">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
                SOLUTION
              </h2>
              <nav className="list-none text-[14px] flex flex-col gap-y-2">
                <li>
                  <a href="" className="text-white">
                    Crypto
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Event Marketing
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Incubation
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
                SUPPORT
              </h2>
              <nav className="list-none text-[14px] flex flex-col gap-y-2">
                <li>
                  <a href="" className="text-white">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    API Status
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none text-[14px] flex flex-col gap-y-2">
                <li>
                  <a href="" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Partners
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
                LEGAL
              </h2>
              <nav className="list-none text-[14px] flex flex-col gap-y-2">
                <li>
                  <a href="" className="text-white">
                    Claim
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Terms
                  </a>
                </li>
              </nav>
            </div>
          </div>

          <div className="hidden lg:block pr-12 w-[450px]">
            <h2
              className={`uppercase text-[#B4B4B4] font-semibold title-font  tracking-widest text-[14px] mb-3`}
            >
              Subscribe to our newsletter
            </h2>
            <p className="font-franklin flex flex-wrap">
              The latest news, articles, and resources, sent to your inbox
              weekly
            </p>

            <div className="flex justify-between gap-x-2 pr-10 mt-2">
              <input
                placeholder="Enter your email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button class="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-20" style={{ opacity: 0.2 }} />
      <div className="text-center my-8">
        <p className="text-sm text-white/70">
          &#169; 2024 Com2000. All rights reserved | Made with ❤️ by Nemo
          Innovative
        </p>
      </div>
    </>
  );
};

export default Footer;
