import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Layout } from "~/layouts";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-4xl font-bold font-serif">
            About Us
          </h1>
          <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10">
            <div className="md:w-1/2">
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={5000}
                className="shadow-xl rounded-lg"
              >
                <div>
                  <img
                    src="/images/IMG_4430.jpg"
                    alt="Construction 1"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/images/IMG_2123.jpg"
                    alt="Construction 2"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/images/IMG_5348.jpg"
                    alt="Construction 3"
                    className="rounded-lg"
                  />
                </div>
              </Carousel>
              <p className="mt-4 text-gray-700 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus commodo, ligula erat venenatis elit, in consequat risus nisl non lacus. Fusce ut ullamcorper nisi, a feugiat leo. Phasellus ut tristique metus. Proin non sagittis justo, vitae aliquet enim. Nunc ultricies arcu eget fringilla cursus.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-gray-800 font-serif">
                Our Mission
              </h2>
              <p className="mb-6 text-gray-700 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus commodo, ligula erat venenatis elit, in consequat risus nisl non lacus. Fusce ut ullamcorper nisi, a feugiat leo. Phasellus ut tristique metus. Proin non sagittis justo, vitae aliquet enim. Nunc ultricies arcu eget fringilla cursus.
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 font-serif">
                Our Values
              </h2>
              <ul className="mb-6 list-disc pl-5 text-gray-700 text-lg">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Vestibulum condimentum</li>
                <li>Fusce ut ullamcorper nisi</li>
                <li>Phasellus ut tristique metus</li>
              </ul>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 font-serif">
                Our Team
              </h2>
              <div className="flex flex-wrap">
                {/* Ensure your team images and descriptions are correct */}
                <div className="w-1/2 p-2 md:w-1/4">
                  <img
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Team Member 1"
                    className="mb-2 rounded-lg shadow"
                  />
                  <p className="text-lg font-medium text-gray-800">Mikael Sant</p>
                  <p className="text-gray-600">Owner</p>
                </div>
                <div className="w-1/2 p-2 md:w-1/4">
                  <img
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Team Member 2"
                    className="mb-2 rounded-lg shadow"
                  />
                  <p className="text-lg font-medium text-gray-800">Jered Lane</p>
                  <p className="text-gray-600">Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
