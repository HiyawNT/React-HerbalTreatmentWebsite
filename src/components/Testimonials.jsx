import React from "react";

const Testimonials = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          {/* Testimonial 1 */}
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                alt="Maria Smantha"
              />
            </div>
            <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              Heart Treatments
            </h6>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="inline-block w-6"
              >
                <path
                  fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                />
              </svg>
            </p>
            <ul className="mb-0 flex justify-center">
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial 2 */}
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                alt="Lisa Cudrow"
              />
            </div>
            <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              Controlling BP
            </h6>
            <p className="mb-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="inline-block w-6"
              >
                <path
                  fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                />
              </svg>
            </p>
            <ul className="mb-0 flex justify-center">
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial 3 */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                alt="John Smith"
              />
            </div>
            <h5 className="mb-2 text-lg font-bold">John Smith</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              Diabetics Treatments
            </h6>
            <p className="mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="inline-block w-6"
              >
                <path
                  fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                />
              </svg>
            </p>
            <ul className="mb-0 flex justify-center">
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
