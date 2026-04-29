// import me from '../assets/me.png'
import { BsChat, BsFacebook, BsGithub, BsInbox, BsInstagram, BsLinkedin, BsMailbox, BsMailbox2, BsVoicemail, BsWhatsapp } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si'
import { BiSolidMessage, BiSolidVideoRecording } from 'react-icons/bi'
import { easeInOut, motion } from 'framer-motion'
import  js from '../assets/01.png'
import  wts from '../assets/02.png'
import  bs from '../assets/bs.png'
import  Ys from '../assets/Ys.jpg'
import shoplite from '../assets/ShopLite.png'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import ContactMe from './ContactMe'

const projects = [
            {title:"JanSports", 
              description:"A fullstack e-commerece based online sport shop build for JanSports.", 
              img:js,
            url:`https://jansports-front.vercel.app/`},
            {title:"ShopLite", 
              description:"Full-Stack online shop", 
              img: shoplite,
              url:'https://shop-lite-ecommerce-website.vercel.app/'},
            {title:"BlogSpot", 
              description:"A blogging site where user can read, write, edit, and delete posts.", 
              img: bs,
              url:'https://blogspot-live.vercel.app/'},
            {title:"WacTech Solutions", 
              description:"A web development company based site where user can see the services, projects, and contact the company.", 
              img: wts,
              url:'https://waz-tech-solutions.vercel.app/'}
          ]
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
    <img src={Ys} 
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
              I build modern responsive systems in the form of web applications with clean UI, performance, and strong user experience.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-xl">
               <a target='_blank' href="https://github.com/MehtabWazir34">
              <BsGithub className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/mehtab-wazir-1429bb247/?skipRedirect=true"><BsLinkedin className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
            <a target='_blank' href="https://www.facebook.com/mehtabwazir34">
              <BsFacebook className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
              <a target='_blank' href="https://www.instagram.com/_wazirguy/">
                <BsInstagram className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
                </a>
              <a target='_blank' href="https://wa.me/+923420414189">
              <BsWhatsapp className='hover:scale-105 hover:text-accent cursor-pointer transition duration-200'/>
              </a>
            </div>

            <div className='flex gap-2'>
            <button className="mt-5 px-5 py-2 font-body rounded-full border border-accent hover:bg-accent hover:text-black cursor-pointer transition duration-300">
              <a href="#contact">Hire Me</a>
            </button>
            <Link to={'/about-me'} className="mt-5 px-5 py-2 font-body rounded-full border border-accent hover:bg-accent hover:text-black cursor-pointer transition duration-300">Know me more</Link>
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
                       <Link to={'/about-me'} className='text-sm text-yellow-100 hover:text-yellow-200 transition-colors duration-200 underline'>Read more</Link>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <h3 className="font-heading text-xl ">
                      Video Editing
                    </h3>
                    <p className="md:col-span-2 font-body text-gray-300 leading-relaxed">
                      1.5 years of professional experience working with freelance and
                      regular clients. My work includes ... <br />
                       <Link to={'/about-me'} className='text-sm text-yellow-100 hover:text-yellow-200 transition-colors duration-200 underline'>Read more</Link>
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
                       <Link to={'/about-me'} className='text-sm text-yellow-100 hover:text-yellow-200 transition-colors duration-200 underline'>Read more</Link>
                    </p>
                  </div>
                </div>
              </motion.section>

        {/* PROJECTS */}
        <section id='projects' className="py-8 border-t border-b border-gray-700">
          <h2 className="text-xl font-semibold mb-6 font-heading tracking-widest">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">

            {
            projects.map((item, idx)=>(
              <motion.div
                initial={{opacity:0, y:120}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, ease:"easeInOut"}} 
                key={idx}
                whileHover={{scale:1.03}}
                className="bg-primary p-4 rounded-2xl border border-gray-700 hover:shadow-glow transition"
              >
                
                <div className='relative group flex-col gap-y-2'>
                <img src={item.img} alt={item.title} className='w-full rounded-t-2xl mb-2' />
                <div className='absolute inset-0 opacity-0 transition-all duration-200 justify-center bg-black/60 group-hover:opacity-100 flex items-center'>
                  <span className='text-2xl font-semibold text-highlight bg-black/90 py-2 px-4 rounded-2xl font-body'><a href={item.url} target='_blank'>Visit Now</a></span>
                </div>
                <h3 className="text-lg font-medium font-body tracking-widest"> {item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 font-body">
                  {item.description}
                </p>
               

                </div>

              </motion.div>
            ))}
          
          </div>
        </section>

        {/* CONTACT */}
        <ContactMe/>

      </section>
    // </div>
  )
}

export default Home