import React from "react";
import Button from "~/components/buttons";
import Footer from "~/components/footer";
import Navbar from "~/components/navbars";
import { Layout } from "~/layouts";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10 h-screen">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-4xl font-bold">Contact Us</h1>
          <div className="mx-auto max-w-2xl">
            <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="focus:shadow-outline h-32 w-full resize-none appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <Button
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
