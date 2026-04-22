import me from './assets/me.png'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si'
import { BiSolidVideoRecording } from 'react-icons/bi'
import  js from './assets/01.png'
import  wts from './assets/02.png'
import  bs from './assets/bs.png'
import shoplite from './assets/ShopLite.png'
import { Link } from 'react-router-dom'
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
function App() {
  return (
    <div className="bg-primary text-white min-h-screen flex justify-center items-center px-2">

      <section className="w-[95%] md:w-[80%] max-w-6xl rounded-2xl shadow-2xl shadow-blue-900 p-4 my-6 bg-secondary overflow-hidden">
      
        {/* HEADER */}
        <header className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <div className='grid'>
          <div className='flex gap-1 justify-center -mt-4'>
          <div className='rounded-full w-3 h-3 bg-yellow-500'>
          </div>
          <div className='rounded-full w-3 h-3 bg-red-500'>
          </div>
          <div className='rounded-full w-3 h-3 bg-blue-500'>
          </div>
          </div>
          <h2 className="text-xl font-semibold tracking-wide">WAZIR</h2>
          </div>

          <nav>
            <ul className="flex gap-6 text-sm md:text-base">
              <li className="hover:text-accent cursor-pointer">About</li>
              <li id='projects' className="hover:text-accent cursor-pointer">Projects</li>
              <li id='contact' className="hover:text-accent cursor-pointer">Contact</li>
            </ul>
          </nav>
        </header>

        {/* HERO SECTION */}
        <main className="flex flex-col md:flex-row items-center gap-6 py-8">

          {/* IMAGE */}
          <motion.div 
            initial={{opacity:0, x:-50}} 
            animate={{opacity:1, x:0}} 
            className="w-full md:w-1/2 flex justify-center"
          >
            <img 
              src={me} 
              alt="Mehtab"
              className="w-48 md:w-64 rounded-full border-4 border-accent shadow-glow hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div 
            initial={{opacity:0, x:50}} 
            animate={{opacity:1, x:0}} 
            className="w-full md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Hi, it's <span className="text-highlight">Mehtab Wazir</span>
            </h2>

            <h3 className="text-lg text-gray-300 mt-1">Web Developer</h3>

            <p className="text-gray-400 mt-3">
              I build modern responsive systems in the form of web applications with clean UI, performance, and strong user experience.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-xl">
              <BsGithub className="hover:text-accent cursor-pointer transition"/>
              <BsLinkedin className="hover:text-accent cursor-pointer transition"/>
              <BsFacebook className="hover:text-accent cursor-pointer transition"/>
              <BsInstagram className="hover:text-accent cursor-pointer transition"/>
            </div>

            <button id='contact' className="mt-5 px-5 py-2 rounded-full border border-accent hover:bg-accent hover:text-black cursor-pointer transition duration-300">
              Hire Me
            </button>
          </motion.div>
        </main>

        {/* ABOUT SECTION */}
        <section id='about' className="py-8 border-t border-gray-700">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a professional system developer focused on building responsive and interactive web applications using modern technologies. I'm skilled in web development, video editing, and graphic design.
          </p>
        </section>
        {/* SKILLS */}
    <section id='skills' className="py-8 border-t border-gray-700">
    <h2 className="text-xl font-semibold mb-6">Skills</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      {skills.map((skill, i) => (
      
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-primary rounded-xl border border-gray-700 hover:shadow-glow transition cursor-pointer"
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
          <h2 className="text-xl font-semibold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">

            {
            projects.map((item, idx)=>(
              <motion.div 
                key={idx}
                whileHover={{scale:1.03}}
                className="bg-primary p-4 rounded-2xl border border-gray-700 hover:shadow-glow transition"
              >
                
                <div className='relative group flex-col gap-y-2'>
                <img src={item.img} alt={item.title} className='w-full rounded-t-2xl' />
                <div className='absolute inset-0 opacity-0 transition-all duration-200 justify-center bg-black/60 group-hover:opacity-100 flex items-center'>
                  <span className='text-2xl font-semibold text-highlight bg-black/90 py-2 px-4 rounded-2xl'><a href={item.url} target='_blank'>Visit Now</a></span>
                </div>
                <h3 className="text-lg font-medium"> {item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {item.description}
                </p>
               

                </div>

              </motion.div>
            ))}
          
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-8 border-t border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>

          <form className="flex flex-col gap-4 max-w-lg">

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

            <button className="bg-accent text-black py-2 rounded hover:bg-highlight transition cursor-pointer">
              Send Message
            </button>

          </form>
        </section>

      </section>
    </div>
  )
}

export default App