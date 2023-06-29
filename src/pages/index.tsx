import Link from 'next/link';
import React from 'react';
import Button from '~/components/buttons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          EliteCND
        </Link>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
        <div>
        <div>
          <Button variant="primary">Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="warning">Warning Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold">EliteCND</h1>
        </div>
        <p className="mt-4 text-xl">
          Providing elite cybersecurity solutions for businesses.
        </p>
      </div>
    </section>
  );
};

// Add more components for the rest of the website sections (e.g., Services, Testimonials, Contact, etc.)

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* Render other sections/components here */}
    </div>
  );
};

export default HomePage;
