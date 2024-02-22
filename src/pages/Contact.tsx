import React, { useRef } from "react";
import Button from "~/components/buttons";
import Footer from "~/components/footer";
import { Layout } from "~/layouts";

const ContactPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleResumeUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Layout>
      <div className="bg-blue-50 py-12 min-h-screen">
        <section className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-5xl font-bold font-serif">Contact Us</h1>
          <h2 className="mb-10 text-center text-2xl font-bold font-serif">General Information</h2>
          <div className="mx-auto max-w-4xl">
            <form className="mb-8 rounded-lg bg-white px-10 py-8 shadow-lg">
              <div className="mb-6">
                <label className="mb-2 block text-lg font-bold text-gray-700 font-serif" htmlFor="name">Name</label>
                <input className="w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-2" id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-lg font-bold text-gray-700 font-serif" htmlFor="email">Email</label>
                <input className="w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-2" id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="mb-8">
                <label className="mb-2 block text-lg font-bold text-gray-700 font-serif" htmlFor="message">Message</label>
                <textarea className="h-48 w-full resize-none appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-2" id="message" placeholder="Enter your message"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <Button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</Button>
              </div>
            </form>
          </div>
        </section>

        {/* Quotes/Bids Section */}
        <section className="container mx-auto px-4 my-10">
          <h2 className="mb-8 text-center text-4xl font-bold font-serif">Request a Quote</h2>
          <div className="mx-auto max-w-4xl">
            <form className="rounded-lg bg-white px-10 py-8 shadow-lg">
              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-700 font-serif" htmlFor="company">Company</label>
                <input className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:ring-2" id="company" type="text" placeholder="Company Name"/>
              </div>
              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-700 font-serif" htmlFor="services">Services Required</label>
                <textarea className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500" id="services" placeholder="Describe the services you are interested in"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <Button className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Request</Button>
              </div>
            </form>
          </div>
        </section>

        {/* Employment Section */}
        <section className="container mx-auto px-4 my-10">
          <h2 className="mb-8 text-center text-4xl font-bold font-serif">Employment Opportunities</h2>
          <p className="text-center mb-8 text-xl">We are always looking for talented individuals to join our team. Fill out the form below to apply.</p>
          <div className="mx-auto max-w-4xl">
            <form className="rounded-lg bg-white px-10 py-8 shadow-lg">
              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-700 font-serif" htmlFor="fullName">Full Name</label>
                <input className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:ring-2" id="fullName" type="text" placeholder="Your Full Name"/>
              </div>
              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-700 font-serif" htmlFor="position">Position Applied For</label>
                <input className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:ring-2" id="position" type="text" placeholder="Position"/>
              </div>
              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-700 font-serif" htmlFor="resume">Resume</label>
                <input ref={fileInputRef} type="file" className="hidden" />
                <Button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleResumeUploadClick}>Upload Resume</Button>
              </div>
              <div className="flex items-center justify-center">
                <Button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Apply Now</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
