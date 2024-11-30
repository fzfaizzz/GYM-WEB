import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Services() {
  useEffect(() => {
    // Floating animation for cards
    const animateFloating = () => {
      const cards = document.querySelectorAll('.floating-card');
      cards.forEach((card) => {
        gsap.to(card, {
          x: () => Math.random() * 50 - 25, // Random horizontal movement
          y: () => Math.random() * 50 - 25, // Random vertical movement
          duration: () => Math.random() * 4 + 2, // Random duration (2 to 6 seconds)
          ease: 'power1.inOut',
          repeat: -1, // Infinite repeat
          yoyo: true, // Yoyo effect
        });
      });
    };

    // Scroll-triggered animation with stagger
    const animateOnScroll = () => {
      const cards = document.querySelectorAll('.floating-card');

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 }, // Start state: invisible, below position
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2, 
          scrollTrigger: {
            trigger: '.services-section', 
            start: 'top 80%', 
            markers:false,
          },
        }
      );
    };

    animateFloating();
    animateOnScroll();
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#000000] to-[100%] to-[#b7b7b8] text-white py-20">
      {/* Container */}
      <div className="services-section container mx-auto px-6 lg:px-20 text-center">
        {/* Header */}
        <h2 className="font-[anzo5] text-6xl sm:text-7xl md:text-8xl uppercase tracking-wide mb-8 text-gradient bg-clip-text text-white">
          Our Premium Services
        </h2>
        <p className="text-lg -mt-8 font-[anzo4] border-b-2 border-white md:text-xl max-w-3xl mx-auto mb-16">
          Unlock your potential with personalized, world-class services designed
          to elevate your fitness journey.
          
        </p>
      

        {/* Services Grid */}
        <div className="hidden sm:inline-block">
          {/* Service 1 */}
 

         
          <div className="service-card floating-card grid sm:grid-cols-2 md:grid-cols-3 justify-center items-center ">
          <div className="text-5xl service-card floating-card mb-6"><img src="\img\cours3.jpg" alt="" className='rounded-3xl h-96 object-cover' /></div>
          <h3 className="text-2xl font-serif mb-4">STRENGTH TRAINING<p className='font-sans md:hidden text-base ml-10 mt-5 text-gray-400 text-start'>  Build muscle and endurance using top-notch equipment and expert
          techniques.</p> </h3>
            <p className="text-white font-sans hidden md:inline-block xl:hidden ">
              Build muscle and endurance using top-notch equipment and expert
              techniques.
            </p>
            <p className='text-white font-sans hidden -mt-10 xl:inline-block'>
            Build muscle and endurance with expert coaching, cutting-edge equipment, and personalized routines tailored to your fitness goals. Whether you're a beginner or seasoned athlete, our programs ensure proper technique and progressive training for maximum results.
            </p>
          </div>

              {/* Service 2 */}
          <div className="service-card floating-card -mt-28 grid sm:grid-cols-2 md:grid-cols-3  justify-center items-center ">
            <h3 className="text-2xl font-serif  mb-4">PERSONAL TRAINING <p className='font-sans md:hidden text-base ml-10 mt-5 text-gray-400 text-start'>Work one-on-one with expert trainers to achieve your fitness goals
            through customized programs.</p></h3>
            <p className="text-white font-sans hidden md:inline-block xl:hidden">
              Work one-on-one with expert trainers to achieve your fitness goals
              through customized programs.
            </p>
            <p className='text-white font-sans hidden -mt-10 xl:inline-block'>
            Work directly with experienced trainers to reach your fitness goals. Enjoy personalized programs tailored to your needs, helping you maximize results efficiently and safely.            </p>
            <div className="text-5xl service-card floating-card "><img src="\img\cours2.jpg" alt="" className='rounded-3xl h-96 object-cover' /></div>

          </div>

        
           {/* Service 3 */}
          <div className="service-card -mt-28 floating-card  grid sm:grid-cols-2 md:grid-cols-3 justify-center items-center ">
          <div className="text-5xl service-card floating-card "><img src="\img\cours1.jpg" alt="" className='rounded-3xl h-96 object-cover' /></div>
          <h3 className="text-2xl font-serif mb-4">YOGA CLASS <p className='font-sans md:hidden text-base ml-10 mt-5 text-gray-400 text-start'>Find your balance with relaxing and revitalizing yoga sessions for
          all levels.
          </p></h3>
            <p className="text-white font-sans hidden md:inline-block xl:hidden">
              Find your balance with relaxing and revitalizing yoga sessions for
              all levels.
            </p>
            <p className=' font-sans hidden mt-5 text-white xl:inline-block'>
            Find your balance with revitalizing yoga sessions suitable for all levels. Our expert instructors guide you through movements that improve flexibility, strength, and mindfulness, helping you feel refreshed and centered.            </p>

          </div>
        </div>

        {/* mobile  */}


        <div className="grid grid-cols-1 sm:hidden gap-12">

            <div className="service-card floating-card flex flex-col items-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="\img\cours3.jpg"
              alt="Strength Training"
              className="rounded-3xl h-56 w-full object-cover mb-6"
            />
            <h3 className="text-2xl font-serif mb-4">STRENGTH TRAINING</h3>
            <p className="text-white font-sans ">
              Build muscle and endurance using top-notch equipment and expert
              techniques.
            </p>
          </div>
          {/* Service 1 */}
          <div className="service-card floating-card flex flex-col items-center p-6  rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="\img\cours2.jpg"
              alt="Personal Training"
              className="rounded-3xl h-56 w-full object-cover mb-6"
            />
            <h3 className="text-2xl font-serif mb-4">PERSONAL TRAINING </h3>
            <p className="text-white font-sans">
              Work one-on-one with expert trainers to achieve your fitness goals
              through customized programs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card floating-card flex flex-col items-center p-6  rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="\img\cours1.jpg"
              alt="Yoga Classes"
              className="rounded-3xl h-56 w-full object-cover mb-6"
            />
            <h3 className="text-2xl font-serif mb-4">YOGA CLASS</h3>
            <p className="text-white font-sans">
              Find your balance with relaxing and revitalizing yoga sessions for
              all levels.
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Services;
