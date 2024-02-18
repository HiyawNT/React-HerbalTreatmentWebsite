const Footer = () => {
  //  Company and Legal sec's
  const companyLinks = [
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Properties", href: "#" },
    { text: "Contact Us", href: "#" },
  ];

  const legalLinks = [
    { text: "Terms of services", href: "#" },
    { text: "Privacy policy", href: "#" },
  ];

  // render Func
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <a
          className="text-gray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
          href={link.href}
        >
          {link.text}
        </a>
      </li>
    ));
  };

  return (
    <footer
      className="relative pt-8 pb-6"
      style={{ backgroundColor: "#007a37" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-gray-200">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-200">
              Discover the power of nature with our curated selection of premium
              herbal products. At Herbal Factory, we bring you a diverse range
              of herbs, including the ancient Ginkgo biloba, celebrated for its
              cognitive benefits. Explore the wonders of herbal remedies and
              supplements crafted to support your well-being.
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-200 text-md font-semibold mb-2">
                  Company
                </span>
                <ul className="list-unstyled lg:text-left text-center">
                  {renderLinks(companyLinks)}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-200 text-md font-semibold mb-2">
                  Legal
                </span>
                <ul className="list-unstyled lg:text-left text-center">
                  {renderLinks(legalLinks)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-200 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-gray-200 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Herbal Factory
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
