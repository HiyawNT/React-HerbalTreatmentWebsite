const About = () => {
  return (
    <section className="bg-gray-200">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <p className="flex items-center -mx-2" style={{ color: "#43A6C6" }}>
            <span className="mx-2">What makes us different?</span>
          </p>

          <div className="lg:max-w-lg">
            <h1
              className="text-3xl font-bold tracking-wide dark:text-white lg:text-5xl"
              style={{ color: "#43A6C6" }}
            >
              <span style={{ color: "#000" }}>
                We assist buyers in buying their{" "}
              </span>{" "}
              dream homes.
            </h1>

            <div className="mt-8 space-y-5">
              <p
                className="flex items-center -mx-2"
                style={{ color: "#43A6C6" }}
              >
                <span className="mx-2">
                  Our agents will guide you throught the entire buying process,
                  from property.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="glasses photo"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
