"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
// import './service.css'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "This is service Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate laudantium tempore.eligendi tempore nostrum.",
    href: ""
  },
  {
    num: '02',
    title: 'AI Integration',
    description: "This is service Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate laudantium tempore.eligendi tempore nostrum.",
    href: ""
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: "This is service Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate laudantium tempore.eligendi tempore nostrum.",
    href: ""
  },
  {
    num: '04',
    title: 'Logo Design',
    description: "This is service Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate laudantium tempore.eligendi tempore nostrum.",
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