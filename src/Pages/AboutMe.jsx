import { motion } from "framer-motion";
import { BsChat, BsFacebook, BsGithub, BsInbox, BsInstagram, BsLinkedin, BsMailbox, BsMailbox2, BsVoicemail, BsWhatsapp } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si'
import { BiSolidMessage, BiSolidVideoRecording } from 'react-icons/bi'

const fadeUp = {
  initial: { opacity: 0, y: 120 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
  viewport: { once: true },
};

const About = () => {
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
  return (
        <motion.div  >

      <motion.div className="w-full max-w-6xl rounded-2xl  p-4 my-6 bg-secondary overflow-hidden"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} >
      {/* 🔷 Hero Section */}
      <motion.section {...fadeUp} className="mb-20 text-center">
        <h1 className="font-heading text-highlight text-4xl md:text-5xl mb-6 tracking-wide">
          About Me
        </h1>
        <p className="font-body text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I’m a professional system-focused developer specializing in building
          responsive, scalable, and interactive web applications using modern
          technologies.
          <br />
          <br />
          Beyond development, I bring a multidisciplinary edge with hands-on
          experience in video editing and graphic design—allowing me to create
          complete digital experiences, not just code.
        </p>
      </motion.section>

      {/* 🔷 Skills Section */}
     <motion.section id='skills'
          initial={{opacity:0, y:120}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, ease:"easeInOut"}}
          className="py-8 border-t border-gray-700">
         <h2 className="text-3xl text-center text-highlight font-semibold mb-6 font-heading tracking-widest">Skills</h2>
     
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
         </motion.section>

      {/* 🔷 Experience Section */}
      <motion.section {...fadeUp} className="mb-20">
        <h2 className="font-heading text-highlight text-3xl mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {/* Web Dev */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <h3 className="font-heading text-xl text-highlight">
              Web Development
            </h3>
            <p className="md:col-span-2 font-body text-gray-300 leading-relaxed">
              1+ year of experience as a full-stack developer, focused on
              building modern, responsive, and scalable web applications. I have
              worked on complete end-to-end solutions, from frontend UI
              development to backend integration, ensuring performance,
              usability, and clean architecture.
            </p>
          </div>

          {/* Video Editing */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <h3 className="font-heading text-xl text-highlight">
              Video Editing
            </h3>
            <p className="md:col-span-2 font-body text-gray-300 leading-relaxed">
              1.5 years of professional experience working with freelance and
              regular clients. My work includes both long-form and short-form
              content, often combined with on-site videography. I focus on
              storytelling, pacing, and audience engagement to deliver impactful
              visuals.
            </p>
          </div>

          {/* Graphic Design */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <h3 className="font-heading text-xl text-highlight">
              Graphic Design
            </h3>
            <p className="md:col-span-2 font-body text-gray-300 leading-relaxed">
              1.5 years of experience designing for diverse clients including
              educators, YouTubers, freelancers, and content creators. My work
              includes social media posts, banners, posters, and thumbnails—
              crafted to be visually compelling and platform-optimized.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 🔷 Closing Section */}
      <motion.section {...fadeUp} className="text-center">
        <h2 className="font-heading text-highlight text-3xl mb-6">
          What Sets Me Apart?
        </h2>
        <p className="font-body text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I combine technical development with creative design skills, allowing
          me to build complete digital products—not just interfaces. My focus is
          always on performance, user experience, and delivering solutions that
          are both functional and visually engaging.
        </p>
      </motion.section>
    </motion.div>
      </motion.div>
  );
};

export default About;