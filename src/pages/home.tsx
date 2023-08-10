/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Layout } from "~/layouts";

const Home: React.FC = () => {
  return (
    <Layout>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Welcome to our Construction Company</h1>
              <p className="text-lg mb-6">
                We provide top-quality construction services, specializing in residential and commercial projects.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000}>
                <div>
                  <img src="https://via.placeholder.com/800x400" alt="Construction 1" />
                </div>
                <div>
                  <img src="https://via.placeholder.com/800x400" alt="Construction 2" />
                </div>
                <div>
                  <img src="https://via.placeholder.com/800x400" alt="Construction 3" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Residential Construction</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus
                commodo, ligula erat venenatis elit, in consequat risus nisl non lacus.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Commercial Construction</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus
                commodo, ligula erat venenatis elit, in consequat risus nisl non lacus.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Remodeling Services</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus
                commodo, ligula erat venenatis elit, in consequat risus nisl non lacus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img src="https://via.placeholder.com/800x600" alt="Project 1" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-400">Residential</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x600" alt="Project 2" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-400">Commercial</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x600" alt="Project 3" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-400">Residential</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus
                commodo, ligula erat venenatis elit, in consequat risus nisl non lacus."
              </p>
              <p className="text-gray-600 mt-4">- John Doe</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus
                commodo, ligula erat venenatis elit, in consequat risus nisl non lacus."
              </p>
              <p className="text-gray-600 mt-4">- Jane Smith</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, erat ut dapibus
                commodo, ligula erat venenatis elit, in consequat risus nisl non lacus."
              </p>
              <p className="text-gray-600 mt-4">- Mike Johnson</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
