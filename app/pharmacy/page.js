"use client";
import AboutBanner from "@/components/Banner";

import Image from "next/image";
import "./remediusrx.css";

export default function RemediusRxPage() {
  return (
    <main className="bg-white">
      {/* Save Money Section */}
      <AboutBanner title={"Pharmacy"} description={"RemediusRx E-Pharmacy"} />
      <section className="bg-gray-100 py-12 pt-30">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-center">
            <Image
              src="/img/atenolol-tablets.png"
              alt="Save Time Illustration"
              width={400}
              height={400}
              className="mx-auto animate-bounce"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-[#155c79] mb-4">
              Fast, Affordable Wellness Delivered.
            </h2>
            <p className="text-gray-700 mb-6">
              With RemediusRx, managing chronic care is simple. Get your
              prescriptions and timely drug refills delivered to your doorstep,
              ensuring you never miss a dose. Enjoy affordable prices on
              essential medications—all from the comfort of your home.
            </p>
            <a
              href="https://shop.remediushealth.africa"
              className="inline-block bg-[#155c79] text-white py-2 px-5 rounded hover:bg-[#f9a01f] transition"
            >
              Create an account
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-950">
            Benefits of Choosing RemediusRx
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Multiple pharmacies under one roof",
              "Timely delivery of medications",
              "Convenience of shopping from home",
            ].map((text, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Image
                  src="/img/checkmark.svg"
                  alt="Checkmark"
                  width={30}
                  height={30}
                />
                <p className="mt-3 text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goodbye Pharmacy Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <Image
              src="/img/remedius-box.png"
              alt="Pharmacy Delivery"
              width={500}
              height={500}
              className="mx-auto animate-bounce"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#155c79] mb-4">
              Hello, Doorstep Delivery.
            </h2>
            <p className="text-gray-700 mb-6">
              Say goodbye to waiting in line. Order your medications online and
              get them delivered right to your door—quickly and securely.
            </p>
            <a
              href="https://shop.remediushealth.africa"
              className="inline-block bg-[#155c79] text-white py-2 px-6 rounded hover:bg-[#f9a01f] transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-50 py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-950">
          Your Drugs Delivered
        </h2>
        <p className="text-gray-700 mb-6">
          Fast, safe, and reliable. Get your medication delivered to your
          doorstep with just a few clicks.
        </p>
        <a
          href="https://shop.remediushealth.africa"
          className="inline-block bg-[#155c79] text-white py-2 px-6 rounded hover:bg-[#f9a01f] transition"
        >
          Sign up today
        </a>
      </section>

      {/* How It Works Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 text-gray-950">
            How RemediusRx Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1: Create a RemediusRx Account",
                text: "Create your account on RemediusRx to access all pharmacies easily.",
                img: "/img/create-account.svg",
              },
              {
                title: "2: Choose a Pharmacy and Place Order",
                text: "Choose a pharmacy closest to your location and place an order.",
                img: "/img/place-order.svg",
              },
              {
                title: "3: Get your orders delivered",
                text: "Get your order(s) delivered to your doorstep within minutes.",
                img: "/img/delivery.svg",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg overflow-hidden text-center"
              >
                <div className="flex items-center justify-center h-[300px] bg-white">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={220}
                    height={220}
                    className="object-contain h-full w-auto"
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-light mb-2 text-gray-950">
                    {step.title}
                  </h5>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://shop.remediushealth.africa"
              className="inline-block bg-[#155c79] text-white py-2 px-6 rounded hover:bg-[#f9a01f] transition"
            >
              Place Your Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center animate-bounce">
            <Image
              src="/img/payment.svg"
              alt="Payment Illustration Left"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#155c79] mb-4">
              Secure Payment Options
            </h2>
            <p className="text-gray-700 mb-6">
              Choose from a variety of secure payment methods, making your
              experience seamless and hassle-free.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
              {[
                { src: "/img/mtn.svg", alt: "MTN Momo" },
                { src: "/img/airtel-seeklogo.svg", alt: "Airtel Money" },
                { src: "/img/visa.svg", alt: "Visa" },
                { src: "/img/mastercard.svg", alt: "Mastercard" },
              ].map((pay, i) => (
                <Image
                  key={i}
                  src={pay.src}
                  alt={pay.alt}
                  width={80}
                  height={40}
                  className="mx-auto"
                />
              ))}
            </div>
          </div>
          <div className="text-center animate-bounce">
            <Image
              src="/img/payment-2.svg"
              alt="Payment Illustration Right"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#155c79] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-4">About Us</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="https://remediushealth.africa/">About Us</a>
              </li>
              <li>
                <a href="https://remediushealth.africa/">
                  Remedius Mobile Health
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Partner with Us</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Register your pharmacy</a>
              </li>
              <li>
                <a href="#">Chronic care package</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">More Services</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="https://remedius.co/">Consult a doctor</a>
              </li>
              <li>
                <a href="#">Laboratory test</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Get Help</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">File a complaint</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-500" />
        <div className="text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} RemediusRx E-Pharmacy. All rights
          reserved. A product of Remedius Mobile Health
        </div>
      </footer> */}
    </main>
  );
}
