import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

export default function GymContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Create a reference for the form
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use formRef.current to send the form
    emailjs
      .sendForm('service_oe4sdzm', 'template_emlmiiu', formRef.current, 'XejmapJ86pj9bpUp-')
      .then((result) => {
        console.log(result.text);
        toast.success('Your message has been sent successfully!');
      }, (error) => {
        console.log(error.text);
        toast.error('An error occurred. Please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  useEffect(() => {
    gsap.fromTo(
      '.contact-header',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.contact-form',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.contact-image',
      { rotateY: 30, opacity: 0 },
      {
        rotateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-image',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="contact-section bg-gradient-to-b from-white via-white to-black text-white py-20 px-6 lg:px-20">
      <div className="contact-header text-center mb-16">
        <h1 className="text-8xl font-[anzo5] text-yellow-500 tracking-wider">
          Let’s Build Your Strength
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Ready to transform your fitness journey? Reach out to us and let’s connect!
        </p>
      </div>

      <div className="contact-content flex flex-col lg:flex-row items-center justify-between">
        {/* Contact Form */}
        <div className="contact-form bg-gradient-to-b from-white via-white to-black p-10 rounded-3xl shadow-2xl w-full lg:w-1/2 transform hover:scale-105 transition duration-300">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-400">
                Full Name
              </label>
              <input
              required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="p-4 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black shadow-inner"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-400">
                Email Address
              </label>
              <input
              required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-4 bg-blue-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-inner"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label 
              htmlFor="message" className="text-sm font-semibold text-gray-400">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="How can we help?"
                className="p-4 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black shadow-inner"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-bold text-lg shadow-md hover:from-yellow-600 hover:to-yellow-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Image and Info */}
        <div className="contact-image mt-12 lg:mt-0 lg:ml-16 w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full h-full max-w-md">
            <img
              src="\img\Game.jpg"
              alt="Contact Gym"
              className="rounded-3xl shadow-xl object-cover w-full h-auto transform hover:rotate-3 hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-12 -right-12 bg-yellow-500 text-black rounded-full p-6 shadow-lg">
              <h3 className="text-lg font-bold">Stay Active!</h3>
            </div>
          </div>
          <div className="contact-details mt-8 text-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <FiPhone className="text-yellow-500 text-2xl" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FiMail className="text-yellow-500 text-2xl" />
              <span>contact@gymfit.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FiMapPin className="text-yellow-500 text-2xl" />
              <span>123 Fitness St, Gym City</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toastify Notifications */}
      <ToastContainer />
    </div>
  );
}
