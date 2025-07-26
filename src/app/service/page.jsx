"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
// import './service.css'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "I build high-performance, responsive, and SEO-friendly websites using modern technologies like HTML, CSS, JavaScript, and popular frameworks. From portfolio sites to full-stack applications, I ensure clean code and a seamless user experience.",
    href: ""
  },
  {
    num: '02',
    title: 'AI Integration',
    description: "I integrate intelligent AI solutions into websites and applications to automate tasks, personalize experiences, and improve decision-making using tools like ChatGPT, Python ML models, and third-party APIs.",
    href: ""
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: "I design intuitive, user-friendly interfaces that enhance user engagement. My designs are based on user research, accessibility standards, and modern aesthetics—ensuring a smooth and impactful digital experience.",
    href: ""
  },
  {
    num: '04',
    title: 'Logo Design',
    description: "I craft unique, memorable logos that reflect your brand identity. My design process involves deep understanding of your vision and audience to deliver logos that are simple, scalable, and meaningful.",
    href: ""
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container px-10 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition:{delay: 2.4, deration:0.4,ease:"easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (<div key={index}
            className="flex flex-col justify-center gap-6   transition-all group duration-500"
            >
                {/* top */}
                <div className="w-full flex justify-between items-center  ">
                <div className="text-5xl font-extrabold text-transparent text-outline group-hover:[-webkit-text-stroke-color:#00ff99] transition-all duration-500">
                  {service.num}
                  </div>
                <Link
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  href={service.href}>
                  <BsArrowDownRight className="text-primary text-3xl  "/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">{service.title}</h2>
                
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>

             </div>)
           
         })} 
      </motion.div>
      </div>
      
    </section>
  );
};

export default Service;