import AgentsImg from "../assets/ginko.webp";
import Header from "./Header";
import Footer from "./Footer";

const ProdDetail = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-200 py-32">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2 mb-6 lg:mb-0 lg:mr-9">
            {" "}
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl mt-2"
              src={AgentsImg}
              alt="glasses photo"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1
                className="text-3xl tracking-wide dark:text-white lg:text-4xl font-medium"
                style={{ color: "#007a37" }}
              >
                Ginko
              </h1>

              <div className="mt-5 space-y-5">
                <p
                  className="flex items-center -mx-2"
                  style={{ color: "#43A6C6" }}
                >
                  <span
                    className="mx-2 text-lg tracking-wide font-light  text-gray-500 "
                    style={{ maxWidth: "70%" }}
                  >
                    Ginkgo is a deciduous tree that can reach impressive heights
                    of up to 30 meters (100 feet). The tree has distinctive
                    fan-shaped leaves with deep, parallel veins that resemble
                    the shape of a maidenhair fern leaf, hence the name
                    "maidenhair tree." The leaves turn a bright golden-yellow
                    color in the fall, creating a stunning display.
                  </span>
                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Button
                </button> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProdDetail;
