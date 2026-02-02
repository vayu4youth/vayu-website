import React from "react";
import { motion } from "framer-motion";
import { User, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Karanveer Arora",
    role: "Operations Coordinator",
    bio: "Karanveer Arora, a young junior in high school and a 4th generation Arya samaj who is very much interested in field of philosophy, history, and science. He is also very much into wrestling. He wants to bring major social reforms in his lifetime, and is also very eager to spread the word of Indian history and Vedic culture.",
    image: "/team/Karanveer.png",
    email: "karora0312@gmail.com",
  },
  {
    name: "Asmie Mann",
    role: "Social Media Coordinatior",
    bio: "Asmie, a 3rd-year college student from Washington, is a devoted Arya Samaji guided by the Vedic principles of truth, knowledge, and service. She stays connected to her roots while finding ways to give back to her community. Outside school, she enjoys helping others and working with children.",
    image: "/team/Asmie.jpeg",
    email: "mann.asmie@gmail.com",
    linkedin: "https://www.linkedin.com/in/asmiemann/",
  },
  {
    name: "Arush Kotta",
    role: "Technology Coordinator",
    bio: "Arush, a 20-year-old Computer Science student from Michigan, is a third-generation Arya Samaji inspired by Vaidik Dharma. He shares his understanding of its principles through online platforms like YouTube and Quora, blending traditional knowledge with modern technology. Committed to seva, he aims to strengthen and connect the Arya Samaj community.",
    image: "/team/Arush.jpg",
    email: "arusharya1875@gmail.com",
    linkedin: "https://www.linkedin.com/in/arushkotta/",
  },
  {
    name: "Sudeep Giri",
    role: "Youth Representative",
    bio: "Sudeep, a graduate in Aviation Science and Management pursuing a Master’s in Aerospace Science, volunteers with the Greater Atlanta Vedic Temple supporting youth activities and events. He is committed to community service and staying connected to Vedic cultural roots while contributing to spiritual and educational spaces.",
    image: "/team/Sudeep.jpeg",
    email: "sudeepgiri369@gmail.com",
    linkedin: "https://www.linkedin.com/in/sg2927/",
  },
  {
    name: "Havishkrit Arya",
    role: "Compliance Team",
    bio: "Havishkrit, a lifelong Arya Samaji and youth volunteer at the Greater Atlanta Vedic Temple, is passionate about sharing Vedic knowledge with younger generations in modern yet authentic ways. He holds a bachelor’s in philosophy and is currently in law school at the University of Georgia.",
    image: "/team/Havishkrit.jpeg",
    email: "havishkrit@gmail.com",
    linkedin: "https://www.linkedin.com/in/havishkrit-arya/",
  },
  {
    name: "Niraj Ramsamooj",
    role: "Compliance Coordinator",
    bio: "Born in Queens, NY, Niraj began his Dharmic education at age 4, studying Hindi, moral education, and music, and attending Arya Vir Dal Shikshan Shivir camps. After earning a Biochemistry degree, he worked in ALS research at Columbia University and now in Clinical Laboratory Science. He is passionate about Vedic governance, ethics, and history through texts like the Ramayan and Mahabharata.",
    image: "/team/Niraj.jpeg",
    email: "ramsamoojnk@gmail.com",
    linkedin: "https://www.linkedin.com/in/niraj-ramsamooj-766b7a188/",

  },
  {
    name: "Arushi Garg",
    role: "Research Team",
    bio: "Arushi, a computer science and finance graduate working in technology, is passionate about Ayurveda, Yoga, and Vedic history. A 6th-generation Arya Samaji, she teaches Yoga, meditation, and pranayama, sharing Vedic philosophy with others.",
    image: "/team/Arushi.jpeg",
    email: "garg.arushi0@gmail.com",
    linkedin: "https://www.linkedin.com/in/gargarushi",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#790016] font-['Playfair_Display']">
            Meet Our Team
          </h1>
          <p className="text-xl text-[#C42727] max-w-2xl mx-auto font-['Source_Sans_3']">
            The dedicated individuals working behind the scenes to make VAYU possible.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              // 1. "initial" sets the starting state (invisible + moved down)
              initial={{ opacity: 0, y: 20 }}
              
              // 2. "animate" runs IMMEDIATELY on page load. No waiting for scroll.
              animate={{ opacity: 1, y: 0 }}
              
              // 3. Keep the delay so they cascade in nicely
              transition={{ delay: index * 0.1, duration: 0.5 }}
              
              // 4. Clean transitions to avoid glitches
              className="w-full md:w-[45%] lg:w-[22%] bg-gradient-to-br from-[#EFA92A] to-orange-50 rounded-2xl p-6 border border-orange-100 hover:border-[#D7572A] hover:shadow-xl transition-shadow transition-colors duration-300 text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-orange-100 border-2 border-orange-200 shrink-0">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    style={{ 
                      transform: "scale(1.2)",
                      objectPosition: member.focus || "50% 25%" 
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-10 h-10 text-orange-400" />
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-[#790016] mb-1 font-['Playfair_Display']">
                {member.name}
              </h3>
              <p className="text-[#D7572A] font-medium mb-3 font-['Source_Sans_3']">
                {member.role}
              </p>
              
              <p className="text-sm text-[#790016] mb-6 font-nunito flex-grow">
                {member.bio}
              </p>
              
              <div className="flex justify-center gap-4 mt-auto">
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 text-[#D7572A] hover:text-[#790016] cursor-pointer transition-colors" />
                  </a>
                )}
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    title="Send Email"
                  >
                    <Mail className="w-5 h-5 text-[#D7572A] hover:text-[#790016] cursor-pointer transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}