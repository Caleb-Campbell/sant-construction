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
          <title>Sant Construction & Development LLC</title>
          <meta
            name="description"
            content="Welcome to Sant Construction & Development. We provide top-quality construction services for commercial and residential projects. Contact us for a free consultation!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-gray-800">
          <section className="relative bg-gray-900 py-16">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/boukaih-bGMyTnSlYvE-unsplash.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                style={{ filter: "blur(4px)", opacity: 0.7 }}
              />
            </div>
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
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
                <Button className="hover:sant-yellow-100 rounded-lg px-6 py-3 font-semibold text-gray-200">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </section>
        </header>

        <main className="container mx-auto">
          <section id="services" className="py-16">
            <div className="text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Our Services
              </h2>
              <p className="mb-8 text-lg">
                We offer a wide range of construction services to meet your
                needs.
              </p>
              <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-3">
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_0300.jpeg"
                    alt="Service 2"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 font-serif text-xl font-bold">
                    Commercial Construction
                  </h3>
                  <p className="text-lg">
                    Our team is experienced in constructing commercial buildings
                    and offices.
                  </p>
                </div>
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_3097.jpg"
                    alt="Service 1"
                    width={600}
                    height={400}
                  />

                  <h3 className="mt-4 font-serif text-xl font-bold">
                    Residential Construction
                  </h3>
                  <p className="text-lg">
                    We specialize in building beautiful and functional homes for
                    families.
                  </p>
                </div>
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_1572.jpg"
                    alt="Service 3"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 font-serif text-xl font-bold">
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
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Our Projects
              </h2>
              <p className="mb-8 text-lg">
                Take <a href=""></a> look at some of the projects we have
                completed for our clients.
              </p>
              <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-3">
                <div className="mx-auto px-1">
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
                    src="/images/IMG_3961.jpg"
                    alt="Project 1"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 font-serif text-xl font-bold">
                    Residential Home
                  </h3>
                  <p className="text-lg">
                    A beautiful and modern residential home built to perfection.
                  </p>
                </div>
                <div className="mx-auto px-1">
                  <Image
                    src="/images/IMG_3485.jpg"
                    alt="Project 3"
                    width={600}
                    height={400}
                  />
                  <h3 className="mt-4 font-serif text-xl font-bold">
                    Home Renovation
                  </h3>
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
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Testimonials
              </h2>
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
                  <h4 className="font-serif text-xl font-bold my-1">John Doe</h4>
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
                  <h4 className="font-serif text-xl font-bold my-1">Jane Smith</h4>
                  <p className="text-lg">Business Owner</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-6 mb-20">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold font-serif">Contact Us</h2>
              <Button className="hover:sant-yellow-100 rounded-lg px-6 py-3 font-semibold text-gray-200">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default HomePage;
