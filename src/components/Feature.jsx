function Features() {
  return (
    <section className="container px-4 py-16 mx-auto">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Years of Experience</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">
            Number of Listed Properties
          </h3>
          <p className="text-gray-700">
            Mauris vitae ultricies leo. Nullam sollicitudin mauris ut risus.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Happy Customers</h3>
          <p className="text-gray-700">
            Donec ac odio tempor orci dapibus ultrices.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">More Features</h3>
          <p className="text-gray-700">
            Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
