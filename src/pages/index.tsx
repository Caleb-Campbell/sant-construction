/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import "typeface-lora";
import React from "react";
import Button from "~/components/buttons";
import { Layout } from "~/layouts";
import Head from "next/head";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="w-full">
        <Head>
          <title>Construction Company | Home</title>
          <meta
            name="description"
            content="Welcome to our construction company website. We provide top-quality construction services for residential and commercial projects. Contact us for p free consultation!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-gray-800">
          <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-7xl font-bold italic text-white">
                  <span className="text-sant-yellow-100">S</span>ANT
                </h1>
                <img
                  className="mx-auto h-40 w-40"
                  src="/images/logo.svg"
                  alt="Workflow logo"
                />
                <h2 className="mb-10 font-serif text-4xl text-white">
                  <span className="text-gray-400">CONSTRUCTION</span> <br />{" "}
                  <span className="-mt-2 text-2xl">& DEVELOPMENT</span>
                </h2>
                {/* <p className="mb-8 text-lg text-white">
                  We provide top-quality construction services for residential
                  and commercial projects. Contact us for a free consultation!
                </p> */}
                <Button className="hover:sant-yellow-100 rounded-lg px-6 py-3 text-white">
                  <Link href="/contact">
                  Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </header>

        <main className="container mx-auto">
          <section id="services" className="py-16">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-serif font-bold">Our Services</h2>
              <p className="mb-8 text-lg">
                We offer a wide range of construction services to meet your
                needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_3097.jpg"
                    alt="Service 1"
                    width={600}
                    height={400}
                  />

                  <h3 className="mt-4 text-xl font-serif font-bold">
                    Residential Construction
                  </h3>
                  <p className="text-lg">
                    We specialize in building beautiful and functional homes for
                    families.
                  </p>
                </div>
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_0300.jpeg"
                    alt="Service 2"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 text-xl font-serif font-bold">
                    Commercial Construction
                  </h3>
                  <p className="text-lg">
                    Our team is experienced in constructing commercial buildings
                    and offices.
                  </p>
                </div>
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_1572.jpg"
                    alt="Service 3"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 text-xl font-serif font-bold">
                    Renovation & Remodeling
                  </h3>
                  <p className="text-lg">
                    We can transform your existing space into something new and
                    exciting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="py-16">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-serif font-bold">Our Projects</h2>
              <p className="mb-8 text-lg">
                Take <a href=""></a> look at some of the projects we have completed for our
                clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_3961.jpg"
                    alt="Project 1"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 text-xl font-serif font-bold">Residential Home</h3>
                  <p className="text-lg">
                    A beautiful and modern residential home built to perfection.
                  </p>
                </div>
                <div className="mx-auto px-1" >
                  <Image
                    src="/images/IMG_0405.jpg"
                    alt="Project 2"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 font-serif text-xl font-bold">
                    Commercial Building
                  </h3>
                  <p className="text-lg">
                    A state-of-the-art commercial building designed for
                    businesses.
                  </p>
                </div>
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_3485.jpg"
                    alt="Project 3"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 text-xl font-serif font-bold">Home Renovation</h3>
                  <p className="text-lg">
                    A complete home renovation that transformed the living
                    space.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-16">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-serif font-bold">Testimonials</h2>
              <p className="mb-8 text-lg">
                See what our clients have to say about our construction
                services.
              </p>
              <div className="flex justify-center space-x-12">
                <div>
                  <Image
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Client 1"
                    width={80}
                    height={80}
                    className="mb-2 rounded-full"
                  />
                  <p className="text-lg">
                    "The team at Construction Company did an excellent job on
                    our home construction. The attention to detail and quality
                    of work exceeded our expectations."
                  </p>
                  <h4 className="text-xl font-serif font-bold">John Doe</h4>
                  <p className="text-lg">Homeowner</p>
                </div>
                <div>
                  <Image
                    src="/images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    alt="Client 2"
                    width={80}
                    height={80}
                    className="mb-2 rounded-full"
                  />
                  <p className="text-lg">
                    "We hired Construction Company for our office construction,
                    and they delivered outstanding results within the given
                    timeframe. Highly recommended!"
                  </p>
                  <h4 className="text-xl font-serif font-bold">Jane Smith</h4>
                  <p className="text-lg">Business Owner</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
              <p className="mb-8 text-lg">
                Get in touch with our team to discuss your construction project.
              </p>
              <form className="mx-auto max-w-md">
                <div className="mb-6">
                  <label htmlFor="name" className="mb-2 block font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="mb-2 block font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default HomePage;
