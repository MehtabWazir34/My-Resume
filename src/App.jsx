import me from './assets/me.png'
import { BsChat, BsFacebook, BsGithub, BsInbox, BsInstagram, BsLinkedin, BsMailbox, BsMailbox2, BsVoicemail, BsWhatsapp } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si'
import { BiSolidMessage, BiSolidVideoRecording } from 'react-icons/bi'
import  js from './assets/01.png'
import  wts from './assets/02.png'
import  bs from './assets/bs.png'
import  Ys from './assets/Ys.jpg'
import shoplite from './assets/ShopLite.png'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { init, sendForm } from '@emailjs/browser'
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
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    {name:"Node.js", icon: <SiNodedotjs/>},
    { name: "Express", icon: <SiExpress /> },
    {name: "MongoDB", icon: <SiMongodb/>},
    {name: "Video Editing", icon: <BiSolidVideoRecording/>}
  ]
  init(`${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`);
function App() {

  
  const formRef = useRef();
  let [statusMsg, setMsg] = useState('')
 const sendMessage =(a)=>{
    a.preventDefault();
    setMsg("Sending...");

    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      // import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      formRef.current
    ).then(() => {
      setMsg("Message sent!");
      alert(statusMsg);
      formRef.current.reset();

    }).catch((err) => {
      setMsg("Failed to send message! ")
      console.log("Err: ", err);
      
    });
  }
  return (
    <div className="bg-primary text-white min-h-screen flex justify-center items-center px-2">

      <section className="w-[95%] md:w-[80%] max-w-6xl rounded-2xl shadow-2xl shadow-blue-900 p-4 my-6 bg-secondary overflow-hidden">
      
        {/* HEADER */}
        <header className="flex justify-between items-center p-2 md:px-4 md:py-3 border-b border-gray-700">
          <div className='grid'>
          <div className='gap-1 justify-center -mt-4 flex'>
          <div className='rounded-full w-3 h-3 bg-yellow-500 animate-pulse duration-150'>
          </div>
          <div className='rounded-full w-3 h-3 bg-red-500 animate-pulse duration-250'>
          </div>
          <div className='rounded-full w-3 h-3 bg-blue-500 animate-pulse duration-200'>
          </div>
          </div>
         
          <h2 className="md:text-xl font-semibold tracking-wide font-heading animate-pulse text-accent">WAZIR</h2>
          </div>

          <nav>
            <ul className="flex gap-3 md:gap-6 text-sm md:text-base font-body">
              
              <a href="#about" className='hover:scale-105 hover:text-accent cursor-pointer transition duration-200'>About</a>
              <a href='#projects' className= "duration-200 transition hover:scale-105 hover:text-accent cursor-pointer">Projects</a>
              <a href='#contact' className="hover:scale-105 hover:text-accent cursor-pointer transition duration-200">Contact</a>
            </ul>
          </nav>
        </header>

        {/* HERO SECTION */}
        <main className="flex flex-col md:flex-row items-center gap-6 py-8">

          {/* IMAGE */}
          {/* <motion.div 
            initial={{opacity:0, x:-50}} 
            animate={{opacity:1, x:0}} 
            className="w-84 h-84 flex justify-center overflow-hidden 
            rounded-[60%_40%_30%_30%/60%_30%_70%_60%] shadow-[0_0_40px_rgba(0,0,0,0.15)]"
          >
            <img 
              src={Ys} 
              alt="Mehtab"
              className="w-48 md:w-full h-full object-cover"
            />
          </motion.div> */}
          <div className="relative w-[300px] h-[300px]">

  {/* <!-- 🔥 Glow layer --> */}
  <div className="absolute inset-0 
              rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
              bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400
              opacity-30 blur-xl">
  </div>

  {/* <!-- 🧠 Image layer --> */}
  <div className="absolute inset-[20px] 
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
              [mask-image:radial-gradient(circle,transparent_58%,black_60%)]">
  </div>

</div>

          {/* TEXT */}
          <motion.div 
            initial={{opacity:0, x:50}} 
            animate={{opacity:1, x:0}} 
            className="w-full md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Hi, it's <span className="text-highlight tracking-widest">Mehtab Wazir</span>
            </h2>

            <h3 className="text-xl text-gray-300 mt-1 font-body">Web Developer</h3>

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

            <button className="mt-5 px-5 py-2 font-body rounded-full border border-accent hover:bg-accent hover:text-black cursor-pointer transition duration-300">
              <a href="#contact">Hire Me</a>
            </button>
          </motion.div>
        </main>

        {/* ABOUT SECTION */}
        <section id='about' className="py-8 border-t border-gray-700">
          <h2 className="text-xl font-semibold font-heading tracking-widest mb-4">About</h2>
          <p className="text-gray-400 text-lg font-body leading-relaxed">
            I'm a professional system developer focused on building responsive and interactive web applications using modern technologies. I'm skilled in web development, video editing, and graphic design.
          </p>
        </section>
        {/* SKILLS */}
    <section id='skills' className="py-8 border-t border-gray-700">
    <h2 className="text-xl font-semibold mb-6 font-heading tracking-widest">Skills</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      {skills.map((skill, i) => (
      
          <motion.div
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
    </section>

        {/* PROJECTS */}
        <section id='projects' className="py-8 border-t border-gray-700">
          <h2 className="text-xl font-semibold mb-6 font-heading tracking-widest">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">

            {
            projects.map((item, idx)=>(
              <motion.div 
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
        <section id='contact' className="py-8 border-t border-gray-700">
          <h2 className="text-xl font-semibold mb-4 font-heading tracking-widest">Contact</h2>
        <div className='max-w-full grid place-items-center gap-y-4 md:flex md:justify-between mx-auto'>
          <div className='md:w-1/2 w-full'>
            <p className="text-gray-400 text-lg font-body leading-relaxed">
            Got a question or want to work together? <br />
            Let’s connect and build something great.
          </p>
          <div className="flex gap-4 mt-4 text-xl justify-center">
            <a target='_blank' href="https://github.com/MehtabWazir34">
              <BsGithub className=" hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/mehtab-wazir-1429bb247/?skipRedirect=true"><BsLinkedin className="hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
            <a target='_blank' href="https://www.facebook.com/mehtabwazir34">
              <BsFacebook className="hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
            </a>
              <a target='_blank' href="https://www.instagram.com/_wazirguy/">
                <BsInstagram className="hover:scale-105 hover:text-accent cursor-pointer transition duration-200"/>
                </a>
              <a target='_blank' href="https://wa.me/+923420414189">
              <BsWhatsapp className='hover:scale-105 hover:text-accent cursor-pointer transition duration-200'/>
              </a>
            </div>

          </div>
          <form ref={formRef} onSubmit={sendMessage} className="flex flex-col  gap-4 mx-2 md:w-1/2 font-body">

            <input 
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-primary border border-gray-600 focus:border-accent outline-none"
            />

            <input 
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-primary border border-gray-600 focus:border-accent outline-none"
            />

            <textarea 
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded bg-primary border border-gray-600 focus:border-accent outline-none"
              />

            <button type='submit' className="bg-accent text-black py-2 rounded hover:bg-highlight transition cursor-pointer">
              Send Message
            </button>

          </form>
              </div>
        </section>

      </section>
    </div>
  )
}

export default App