import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Layout } from "~/layouts";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-4xl font-bold">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8">
              <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                className="mb-4 rounded-lg"
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
              <p className="leading-loose text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum condimentum, erat ut dapibus commodo, ligula erat
                venenatis elit, in consequat risus nisl non lacus. Fusce ut
                ullamcorper nisi, a feugiat leo. Phasellus ut tristique metus.
                Proin non sagittis justo, vitae aliquet enim. Nunc ultricies
                arcu eget fringilla cursus.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="leading-loose text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum condimentum, erat ut dapibus commodo, ligula erat
                venenatis elit, in consequat risus nisl non lacus. Fusce ut
                ullamcorper nisi, a feugiat leo. Phasellus ut tristique metus.
                Proin non sagittis justo, vitae aliquet enim. Nunc ultricies
                arcu eget fringilla cursus.
              </p>
              <h2 className="mb-4 text-2xl font-bold">Our Values</h2>
              <ul className="list-inside list-disc leading-loose text-gray-800">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Vestibulum condimentum</li>
                <li>Fusce ut ullamcorper nisi</li>
                <li>Phasellus ut tristique metus</li>
              </ul>
              <h2 className="mb-4 mt-8 text-2xl font-bold">Our Team</h2>
              <div className="flex flex-wrap">
                <div className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <img
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Team Member 1"
                    className="mb-2 rounded-lg"
                  />
                  <p className="font-medium text-gray-800">John Doe</p>
                  <p className="text-gray-600">Project Manager</p>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <img
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Team Member 2"
                    className="mb-2 rounded-lg"
                  />
                  <p className="font-medium text-gray-800">Jane Smith</p>
                  <p className="text-gray-600">Architect</p>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <img
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Team Member 3"
                    className="mb-2 rounded-lg"
                  />
                  <p className="font-medium text-gray-800">Mike Johnson</p>
                  <p className="text-gray-600">Construction Worker</p>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <img
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Team Member 4"
                    className="mb-2 rounded-lg"
                  />
                  <p className="font-medium text-gray-800">Emily Davis</p>
                  <p className="text-gray-600">Civil Engineer</p>
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
