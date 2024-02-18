import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="hover:bg-gray-300 cursor-pointer"
        >
          <h1
            className="text-3xl tracking-wide dark:text-white lg:text-3xl font-medium"
            style={{ color: "#007a37" }}
          >
            Benefits
          </h1>{" "}
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-6">
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Cognitive Function:{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Ginkgo biloba is often associated with potential cognitive
              benefits, including improved memory and mental clarity. Some
              studies suggest that Ginkgo biloba may help improve cognitive
              function, especially in conditions like age-related cognitive
              decline.{" "}
            </span>
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Antioxidant Properties:{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Ginkgo biloba contains antioxidant compounds that may help
              neutralize free radicals in the body, reducing oxidative stress.{" "}
            </span>
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Peripheral Blood Flow:{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              It is believed that Ginkgo biloba may improve blood circulation,
              particularly in the extremities, which could be beneficial for
              conditions like intermittent claudication.{" "}
            </span>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="hover:bg-gray-300 cursor-pointer"
        >
          <h1
            className="text-3xl tracking-wide dark:text-white lg:text-3xl font-medium"
            style={{ color: "#007a37" }}
          >
            Uses
          </h1>{" "}
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-6">
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Anti-Inflammatory Effects:{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Ginkgo biloba may have anti-inflammatory properties, which could
              be beneficial in various inflammatory conditions.{" "}
            </span>
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Memory Enhancement:{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Ginkgo biloba is often used to support memory and cognitive
              function, especially in the elderly.{" "}
            </span>
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Peripheral Artery Disease (PAD):{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              It is sometimes used to alleviate symptoms of peripheral artery
              disease, a condition where narrowed arteries reduce blood flow to
              the limbs.{" "}
            </span>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="hover:bg-gray-300 cursor-pointer"
        >
          <h1
            className="text-3xl tracking-wide dark:text-white lg:text-3xl font-medium"
            style={{ color: "#007a37" }}
          >
            FAQs
          </h1>{" "}
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-6">
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Is Ginkgo biloba safe?{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Ginkgo biloba is generally considered safe for most people when
              used appropriately. However, it may interact with certain
              medications, so it's essential to consult with a healthcare
              professional before using it.{" "}
            </span>
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              How should Ginkgo biloba be taken?{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              The recommended dosage can vary, and it's crucial to follow the
              instructions on the product label or as advised by a healthcare
              provider.{" "}
            </span>
            <li
              className="mx-2 text-lg tracking-wide font-medium  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              How long does it take to see results?{" "}
            </li>
            <span
              className="mx-2 text-lg tracking-wide font-light  text-gray-600 "
              style={{ maxWidth: "70%" }}
            >
              Effects may vary among individuals, and it may take several weeks
              to months before any noticeable improvements in cognitive function
              or other health aspects are observed.{" "}
            </span>
          </ul>
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionCustomStyles;
