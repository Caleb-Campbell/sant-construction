import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-bold mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              className="rounded-lg mb-4"
            >
              <div>
                <img src="https://via.placeholder.com/800x400" alt="Construction 1" className="rounded-lg" />
              </div>
              <div>
                <img src="https://via.placeholder.com/800x400" alt="Construction 2" className="rounded-lg" />
              </div>
              <div>
                <img src="https://via.placeholder.com/800x400" alt="Construction 3" className="rounded-lg" />
              </div>
            </Carousel>
            <p className="text-gray-800 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus commodo,
              ligula erat venenatis elit, in consequat risus nisl non lacus. Fusce ut ullamcorper nisi, a feugiat leo.
              Phasellus ut tristique metus. Proin non sagittis justo, vitae aliquet enim. Nunc ultricies arcu eget
              fringilla cursus.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-800 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus commodo,
              ligula erat venenatis elit, in consequat risus nisl non lacus. Fusce ut ullamcorper nisi, a feugiat leo.
              Phasellus ut tristique metus. Proin non sagittis justo, vitae aliquet enim. Nunc ultricies arcu eget
              fringilla cursus.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-800 leading-loose">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Vestibulum condimentum</li>
              <li>Fusce ut ullamcorper nisi</li>
              <li>Phasellus ut tristique metus</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                <img src="https://via.placeholder.com/400x400" alt="Team Member 1" className="rounded-lg mb-2" />
                <p className="text-gray-800 font-medium">John Doe</p>
                <p className="text-gray-600">Project Manager</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                <img src="https://via.placeholder.com/400x400" alt="Team Member 2" className="rounded-lg mb-2" />
                <p className="text-gray-800 font-medium">Jane Smith</p>
                <p className="text-gray-600">Architect</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                <img src="https://via.placeholder.com/400x400" alt="Team Member 3" className="rounded-lg mb-2" />
                <p className="text-gray-800 font-medium">Mike Johnson</p>
                <p className="text-gray-600">Construction Worker</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                <img src="https://via.placeholder.com/400x400" alt="Team Member 4" className="rounded-lg mb-2" />
                <p className="text-gray-800 font-medium">Emily Davis</p>
                <p className="text-gray-600">Civil Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
