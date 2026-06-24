// import me from '../assets/me.png'
import { BsChat, BsFacebook, BsGithub, BsInbox, BsInstagram, BsLinkedin, BsMailbox, BsMailbox2, BsVoicemail, BsWhatsapp } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si'
import { BiSolidMessage, BiSolidVideoRecording } from 'react-icons/bi'
import { easeInOut, motion } from 'framer-motion'
import  js from '../assets/01.png'
import  wts from '../assets/02.png'
import bs from '../assets/bs.png'
import  trailer from '../assets/trailer.mp4'
import  Ys from '../assets/Ys.jpg'
import shoplite from '../assets/ShopLite.png'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import ContactMe from './ContactMe'
import { FaPlay } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'

const projects = [
  {
    title: "JanSports",
    description:
      "A full-stack sports e-commerce platform featuring authentication, cart management, and responsive UI.",
    thumbnail: js,
    videoFile: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1458162495955733%2F&show_text=false&width=560&t=0",
    url: "https://jansports-front.vercel.app/",
  },

  {
    title: "ShopLite",
    description:
      "Modern MERN e-commerce application with product management and seamless shopping experience.",
    thumbnail: shoplite,
    videoFile: trailer,
    url: "https://shop-lite-ecommerce-website.vercel.app/",
  },

  {
    title: "BlogSpot",
    description:
      "A complete blogging platform allowing users to create, edit, delete, and manage posts.",
    thumbnail: bs,
    videoFile: "/videos/blogspot.mp4",
    url: "https://blogspot-live.vercel.app/",
  },

  {
    title: "WacTech Solutions",
    description:
      "Corporate website for a web development agency showcasing services, projects, and contact channels.",
    thumbnail: wts,
    videoFile: "/videos/wactech.mp4",
    url: "https://waz-tech-solutions.vercel.app/",
  },
];
    const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    {name:"Node.js", icon: <SiNodedotjs/>},
    { name: "Express", icon: <SiExpress /> },
    {name: "MongoDB", icon: <SiMongodb/>},
    {name: "Video Editing", icon: <BiSolidVideoRecording/>}
  ]
  function Home() {
  const myroles = ["Web Developer", "Video Editor", "Graphic Designer"]
  const [selectedVideo, setSelectedVideo] = useState(null);
  const typeREF = useRef(null);
  useEffect(()=>{
    const txt = typeREF.current;
    if(!txt) return;

    let idx = 0
    const rePEAT = ()=>{
      const word = myroles[idx];
      txt.textContent = [word];
      txt.style.width = 'auto';
      txt.style.animation = 'none';
      void txt.offsetWidth;
      
      const mxWdth = txt.scrollWidth;
      txt.style.width = '0px';
      void txt.offsetWidth;

      txt.style.transition = 'none'
      txt.style.animation = `blink-caret 0.75s step-end infinite`;

      const chr = word.length;
      const duration = 2000;
      const blinkTime = duration / chr;
      let chrIDX = 0;

      const textTyping = setInterval (()=>{
        chrIDX ++;
        txt.style.width = `${(mxWdth / chr ) * chrIDX}px`;
        if(chrIDX >= chr) clearInterval(textTyping);
      }, blinkTime);
      idx = (idx + 1) % myroles.length;
    };

    rePEAT();
    const intrvl = setInterval(rePEAT, 3000)
    return ()=> clearInterval(intrvl)

  })

  const fadeUp = {
  initial: { opacity: 0, y: 120 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
  viewport: { once: true },
};

  return (
    // <div className="bg-primary text-white min-h-screen flex justify-center items-center px-2">

      <section >
        {/* HERO SECTION */}
        <main className="flex flex-col md:flex-row items-center gap-6 py-8">

          <motion.div
          initial={{opacity:0, y:150}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, ease:"easeInOut"}}
          className="relative w-75 h-75">

  {/* <!-- 🔥 Glow layer --> */}
  <div className="absolute inset-0 
              rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
              bg-linear-to-tr from-pink-500 via-purple-500 to-yellow-400
              opacity-30 blur-xl">
  </div>

  {/* <!-- 🧠 Image layer --> */}
  <div className="absolute inset-5 
              overflow-hidden
              rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
    <img src={Ys} fetchPriority='high' loading='eager' alt='mehtab wazir developer'
         className="w-full h-full object-cover" />
  </div>

  {/* <!-- 🎯 Striped frame --> */}
  <div className="absolute inset-0 
              rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
              bg-[repeating-linear-gradient(
                to_bottom,
                rgba(255,255,255,0.7)_0px,
                rgba(255,255,255,0.7)_2px,
                transparent_2px,
                transparent_6px
              )]
              [mask:radial-gradient(circle,transparent_58%,black_60%)]">
  </div>

</motion.div>

          {/* INFO */}
          <motion.div 
            initial={{opacity:0, y:150}} 
            animate={{opacity:1, y:0}}
            transition={{
              duration:0.5,
              ease:'easeInOut'
            }} 
            className="w-full text-center md:text-left grid md:place-items-start place-items-center md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Hi, it's <span className="text-highlight tracking-widest">Mehtab Wazir</span>
            </h2>

       
              <h2 ref={typeREF} className='typingText text-xl text-gray-300 mt-1 font-body ' >
                {/* {it} */}
              </h2>

            <p className="text-gray-400 text-lg mt-3 font-body">
              I create modern responsive systems in the form of web applications with clean UI, performance, and strong user experience.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-xl">
               <a aria-label='mehtab wazir github profile' target='_blank' href="https://github.com/MehtabWazir34">
              <BsGithub className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
            <a aria-label='mehtab wazir linkedin' target='_blank' href="https://www.linkedin.com/in/mehtab-wazir-1429bb247/?skipRedirect=true"><BsLinkedin className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
            <a aria-label='mehtab wazir facebook profile' target='_blank' href="https://www.facebook.com/mehtabwazir34">
              <BsFacebook className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
              <a aria-label='mehtab wazir instagram profile' target='_blank' href="https://www.instagram.com/_wazirguy/">
                <BsInstagram className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
                </a>
              <a aria-label='mehtab wazir contact' target='_blank' href="https://wa.me/+923420414189">
              <BsWhatsapp className='hover:scale-105 hover:text-accent cursor-pointer transition duration-200'/>
              </a>
            </div>

            <div className='flex gap-2'>
            <button className="mt-5 p-2 font-body rounded-full border border-accent hover:bg-accent hover:text-black cursor-pointer transition duration-300">
              <a href="#contact px-5 py-2">Hire Me</a>
            </button>
            <Link aria-label='mehtab wazir about' to={'/about-me'} className="mt-5 p-2 font-body rounded-full border border-accent hover:bg-accent hover:text-black cursor-pointer transition duration-300 ">Know me more</Link>
            </div>
          </motion.div>
        </main>

        {/* ABOUT SECTION */}
        <motion.section 
          initial={{opacity:0, y:150}}
          whileInView={{opacity:1, y:0}}
          transition={{
            duration:0.5,
            ease:'easeInOut'
          }}
          
        id='about' className="py-8 border-t border-gray-700">
          <h2 className="text-xl font-semibold font-heading tracking-widest mb-4">About</h2>
          <p className="text-gray-400 text-lg font-body leading-relaxed">
            I'm a professional system developer focused on building responsive and interactive web applications using modern technologies. I'm skilled in web development, video editing, and graphic design.
          </p>
        </motion.section>
              
        {/* SKILLS */}
    <motion.section id='skills'
     initial={{opacity:0, y:120}}
     whileInView={{opacity:1, y:0}}
     transition={{duration:0.5, ease:"easeInOut"}}
     className="py-8 border-t border-gray-700">
    <h2 className="text-xl font-semibold mb-6 font-heading tracking-widest">Skills</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      {skills.map((skill, i) => (
      
          <motion.div
          initial={{opacity:0, y:120}}
     whileInView={{opacity:1, y:0}}
     transition={{duration:0.5, ease:"easeInOut"}}
            key={i}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-primary rounded-xl border border-gray-700 hover:shadow-glow transition"
          >
            <div className="text-3xl text-accent">
              {skill.icon}
            </div>

            <p className="text-sm text-gray-300">
              {skill.name}
            </p>
          </motion.div>

        ))}

      </div>
        <div className='mx-auto w-full flex justify-center'>
            
            <Link to={'/about-me'} className="mt-5 px-5 py-2 font-body rounded-full border border-accent hover:bg-accent hover:text-black cursor-pointer transition duration-300"> See Details </Link>

            </div>
    </motion.section>
    <motion.section {...fadeUp} className="mb-20">
                <h2 className="font-heading  text-xl mb-12 ">
                  Experience
                </h2>
        
                <div className="space-y-12">
                  {/* Web Dev */}
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <h3 className="font-heading text-xl ">
                      Web Development
                    </h3>
                    <p className="md:col-span-2 font-body text-gray-300 leading-relaxed">
                      1+ year of experience as a full-stack developer, focused on
                      building modern, responsive, and scalable web applications. I have
                      worked on ... <br />
                       <Link to={'/about-me'} className='text-sm text-yellow-100 hover:text-yellow-200 transition-colors duration-200 underline'>See details</Link>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <h3 className="font-heading text-xl ">
                      Video Editing
                    </h3>
                    <p className="md:col-span-2 font-body text-gray-300 leading-relaxed">
                      1.5 years of professional experience working with freelance and
                      regular clients. My work includes ... <br />
                       <Link to={'/about-me'} className='text-sm text-yellow-100 hover:text-yellow-200 transition-colors duration-200 underline'>See details</Link>
                    </p>
                  </div>
        
                  {/* Graphic Design */}
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <h3 className="font-heading text-xl ">
                      Graphic Design
                    </h3>
                    <p className="md:col-span-2 font-body text-gray-300 leading-relaxed">
                      1.5 years of experience designing for diverse clients including
                      educators, YouTubers, freelancers, and ... <br />
                       <Link to={'/about-me'} className='text-sm text-yellow-100 hover:text-yellow-200 transition-colors duration-200 underline'>See details</Link>
                    </p>
                  </div>
                </div>
              </motion.section>

        {/* PROJECTS */}
       <section
  id="projects"
  className="py-12 border-t border-b border-gray-700"
>
  <h2 className="text-xl font-semibold mb-10 font-heading tracking-widest">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{ y: -6 }}
        className="
          overflow-hidden
          rounded-2xl
          border border-gray-700
          bg-primary
          hover:border-accent/40
          transition-all duration-300
        "
      >
        {/* Thumbnail */}
        <div className="relative group overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="
              w-full
              aspect-video
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-black/40" />

          <button
            onClick={() => setSelectedVideo(item.videoFile)}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                bg-black/80
                
                border-accent
                text-white
                font-medium cursor-pointer
                hover:bg-accent
                hover:text-black
                transition
              "
            >
              <FaPlay size={12} />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold tracking-wide">
            {item.title}
          </h3>

          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            {item.description}
          </p>

          <div className="mt-2 flex items-center">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                text-gray-300
                hover:text-accent
                transition
              "
            >
              Live Demo
              <BsArrowUpRight />
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{selectedVideo && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/5 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={() => setSelectedVideo(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl"
    >
      <button
        onClick={() => setSelectedVideo(null)}
        title='Close'
        className="absolute -top-8 right-1 text-white text-lg hover:bg-gray-400/40 bg-gray-400/25 cursor-pointer px-1 rounded-full hover:text-accent transition"
      >
        ✕
      </button>

      {/* <iframe width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" 
      src={selectedVideo}
        controls muted
        autoPlay
        className="w-full rounded-2xl border border-gray-700 shadow-2xl"
        ></iframe> */}
        <video src={selectedVideo}
        controls muted
        autoPlay
        className="w-full rounded-2xl border border-gray-700 shadow-2xl"></video>

    </div>
  </motion.div>
)}

        <ContactMe/>

      </section>
    // </div>
  )
}

export default Home