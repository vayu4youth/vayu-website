import React from "react";
import { motion } from "framer-motion";
import { User, Linkedin, Mail } from "lucide-react";

const teamSections = [
  {
    label: "Main Leadership & Operations",
    subtitle: "Core execution and leadership",
    members: [
      {
        name: "Karanveer Arora",
        role: "Operations Coordinator",
        bio: "Karanveer is a dedicated student of philosophy, history, and science, with a deep-rooted passion for Vedic culture and history. As a 4th generation Arya Samaji, he is focused on community growth and driving meaningful social impact through his leadership and organizational efforts.",
        image: "/team/Karanveer.png",
        email: "karora0312@gmail.com",
      },
      {
        name: "Niraj Ramsamooj",
        role: "Compliance Coordinator",
        bio: "Born in Queens, NY, Niraj began his Dharmic education at age 4, studying Hindi, moral education, and music, and attending Arya Veer Dal Shikshan Shivir camps. After earning a Biochemistry degree, he worked in ALS research at Columbia University and now in Clinical Laboratory Science. He is passionate about Vedic governance, ethics, and history through texts like the Ramayana and Mahabharata.",
        image: "/team/Niraj.jpeg",
        email: "ramsamoojnk@gmail.com",
        linkedin: "https://www.linkedin.com/in/niraj-ramsamooj-766b7a188/",
      },
      {
        name: "Havishkrit Arya",
        role: "Compliance Team",
        bio: "Havishkrit, a lifelong Arya Samaji and youth volunteer at the Greater Atlanta Vedic Temple, is passionate about sharing Vedic knowledge with younger generations in modern yet authentic ways. He holds a bachelor's in philosophy and is currently in law school at the University of Georgia.",
        image: "/team/Havishkrit.jpeg",
        email: "havishkrit@gmail.com",
        linkedin: "https://www.linkedin.com/in/havishkrit-arya/",
      },
      {
        name: "Sudeep Giri",
        role: "Youth Representative",
        bio: "Sudeep, a graduate in Aviation Science and Management pursuing a Master's in Aerospace Science, volunteers with the Greater Atlanta Vedic Temple supporting youth activities and events. He is committed to community service and staying connected to Vedic cultural roots while contributing to spiritual and educational spaces.",
        image: "/team/Sudeep.jpeg",
        email: "sudeepgiri369@gmail.com",
        linkedin: "https://www.linkedin.com/in/sg2927/",
      },
    ],
  },
  {
    label: "Tech, Media, & Outreach",
    subtitle: "Digital presence and community engagement",
    members: [
      {
        name: "Arush Kotta",
        role: "Technology Coordinator",
        bio: "Arush, a 3rd generation Arya Samaji, is a computer science student specializing in the intersection of modern technology and traditional principles. He actively shares insights on Vaidik Dharma across digital platforms like YouTube and Quora, dedicating his technical expertise to seva and bridging connections within the community.",
        image: "/team/Arush.jpg",
        email: "arusharya1875@gmail.com",
        linkedin: "https://www.linkedin.com/in/arushkotta/",
      },
      {
        name: "Asmie Mann",
        role: "Social Media Coordinator",
        bio: "Guided by the Vedic principles of truth, knowledge, and service, Asmie focuses on community empowerment and digital engagement. Alongside her academic pursuits, she is dedicated to giving back through youth mentorship and localized community outreach.",
        image: "/team/Asmie.jpeg",
        email: "mann.asmie@gmail.com",
        linkedin: "https://www.linkedin.com/in/asmiemann/",
      },
      {
        name: "Krish Senthilkumar",
        role: "Outreach Coordinator",
        bio: "Khrish is a dedicated student volunteer driven by a strong commitment to seva and community engagement. He focuses his efforts on organizational outreach, sharing educational resources, and raising awareness about Vedic knowledge.",
        image: "/team/Krish.jpeg",
        email: "calmekhrish@gmail.com",
      },
      {
        name: "Antara Malge",
        role: "Events Coordinator",
        bio: "Antara combines an academic focus with a strong background in recreational coaching, mentorship, and creative arts. She utilizes her organizational skills and passion for community involvement to coordinate engaging and impactful events.",
        image: "/team/Antara.jpeg",
        email: "malgeantara@gmail.com",
      },
    ],
  },
  {
    label: "Research",
    subtitle: "Knowledge and scholarship",
    centered: true,
    members: [
      {
        name: "Arushi Garg",
        role: "Research Coordinator",
        bio: "Arushi, a computer science and finance graduate working in technology, is passionate about Ayurveda, Yoga, and Vedic history. A 6th-generation Arya Samaji, she teaches Yoga, meditation, and pranayama, sharing Vedic philosophy with others.",
        image: "/team/Arushi.jpeg",
        email: "garg.arushi0@gmail.com",
        linkedin: "https://www.linkedin.com/in/gargarushi",
      },
    ],
  },
];

export default function Team() {

  function MemberCard({ member, index }) {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-full bg-gradient-to-br from-[#EFA92A] to-orange-50 rounded-2xl p-6 border border-orange-100 hover:border-[#D7572A] hover:shadow-xl transition-shadow transition-colors duration-300 text-center flex flex-col items-center"
        >
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-orange-100 border-2 border-orange-200 shrink-0">
            {member.image ? (
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      transform: "scale(1.2)",
                      objectPosition: member.focus || "50% 25%",
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
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                  <Linkedin className="w-5 h-5 text-[#D7572A] hover:text-[#790016] cursor-pointer transition-colors" />
                </a>
            )}
            {member.email && (
                <a href={`mailto:${member.email}`} title="Send Email">
                  <Mail className="w-5 h-5 text-[#D7572A] hover:text-[#790016] cursor-pointer transition-colors" />
                </a>
            )}
          </div>
        </motion.div>
    );
  }

  return (
      <div className="min-h-screen px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#790016] font-['Playfair_Display']">
              Meet Our Team
            </h1>
            <p className="text-xl text-[#C42727] max-w-2xl mx-auto font-['Source_Sans_3']">
              The dedicated individuals working behind the scenes to make VAYU possible.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {teamSections.map((section, sectionIndex) => (
                <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.15, duration: 0.6 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#790016] font-['Playfair_Display'] mb-1">
                      {section.label}
                    </h2>
                    <p className="text-sm text-[#D7572A] font-['Source_Sans_3'] uppercase tracking-widest">
                      {section.subtitle}
                    </p>
                    <div className="mt-3 mx-auto w-16 h-0.5 bg-[#EFA92A] rounded-full" />
                  </div>

                  {section.centered ? (
                      <div className="flex justify-center">
                        <div className="w-full md:w-[45%] lg:w-[22%]">
                          <MemberCard member={section.members[0]} index={0} />
                        </div>
                      </div>
                  ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {section.members.map((member, index) => (
                            <MemberCard key={index} member={member} index={index} />
                        ))}
                      </div>
                  )}
                </motion.div>
            ))}
          </div>

        </div>
      </div>
  );
}