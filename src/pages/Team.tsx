import React, { useState } from 'react';
import { X, Linkedin, Github, Mail, Phone, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileImg from '../assets/team/profile.jpg';
import takshedaImg from '../assets/team/thaksheda.png';
import { image } from 'framer-motion/client';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Thaksheda Haththun K M',
      role: 'President',
      year: 'Final Year AI&DS',
      bio: 'Passionate about full-stack development and AI/ML.',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript',],
      social: { linkedin: '', github: '', email: 'thakse9124@gmail.com', Phone:'8056955199' },
      image: takshedaImg
    },
    {
      id: 2,
      name: 'Sudharsan P K',
      role: 'Vice President',
      year: 'Final Year AI&DS',
      bio: 'Expert in embedded systems and IoT development. Has published research papers on smart city solutions and won several national-level project competitions. Leads the hardware projects division of HackForge.',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
      social: { linkedin: 'https://www.linkedin.com/in/sudharsan-dharsan02', github: '', email: 'sudhar2902@gmail.com', Phone:'8248904820' },
      image: ProfileImg
    },
    {
      id: 3,
      name: 'Mohammed Aadam H F',
      role: 'Secretary',
      year: '3rd Year AI&DS',
      bio: 'Cloud computing enthusiast with expertise in DevOps and scalable system design. Interned at major tech companies and has contributed to several open-source projects. Mentors junior students in competitive programming.',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'Islamic Scholar'],
      social: { linkedin: '', github: '', email: 'mohammedaadam637@gmail.com', Phone:'6374907441' },
      image: ProfileImg
    },
    {
      id: 4,
      name: 'Harivarman M',
      role: 'Treasurer',
      year: '3rd Year AI&DS',
      bio: 'Mobile app developer specializing in cross-platform solutions. Has developed and published 5+ apps on app stores with over 10k downloads. Also handles event management and community outreach for the club.',
      skills: ['Python', 'React', 'Firebase', 'UI/UX Design'],
      social: { linkedin: 'https://www.linkedin.com/in/harivarman-m-85754237a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/Harivarman2006', email: 'harivarman200@gmail.com', Phone:'6383651224', Instagram:'https://www.instagram.com/harivarman.2006/' },
      image: ProfileImg
    },
    {
      id: 5,
      name: 'Roshan Pranav R S',
      role: 'Co-Ordinator',
      year: '2nd Year AI&DS',
      bio: 'Blockchain and cryptocurrency enthusiast with strong analytical skills. Has developed smart contracts and DApps. Also manages the club\'s finances and sponsors relationships with excellent attention to detail.',
      skills: ['Python', 'C', 'HTML', 'CSS'],
      social: { linkedin: 'https://www.linkedin.com/in/roshan-pranav-r-s-b52967321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: '', email: 'roshanpranavofficial@gmail.com', Phone:'7806923106' },
      image: ProfileImg
    },
    {
      id: 7,
      name: 'Shalini M',
      role: 'Co-Ordinator',
      year: '2nd Year AI&DS',
      bio: 'Blockchain and cryptocurrency enthusiast with strong analytical skills. Has developed smart contracts and DApps. Also manages the club\'s finances and sponsors relationships with excellent attention to detail.',
      skills: ['Python', 'C', 'HTML', 'CSS'],
      social: { linkedin: 'https://www.linkedin.com/in/shalini-m-26104834a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: '', email: '', Phone:'' },
      image: takshedaImg
    },
  ];

  const openMemberModal = (member: any) => setSelectedMember(member);
  const closeMemberModal = () => setSelectedMember(null);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the passionate individuals who drive HackForge forward with their dedication, expertise, and commitment to fostering innovation.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              onClick={() => openMemberModal(member)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-25 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.year}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 2 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                      +{member.skills.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students who want to make a difference. 
            Join us and be part of something amazing!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <span>Apply Now</span>
          </a>
        </motion.div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-85 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      className="w-full h-30 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{selectedMember.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-1">{selectedMember.role}</p>
                    <p className="text-gray-600 dark:text-gray-400">{selectedMember.year}</p>
                  </div>
                </div>
                <button onClick={closeMemberModal} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* About */}
              <div className="mb-2">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedMember.bio}</p>
              </div>

              {/* Skills */}
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            {/* Connect */}
          <div>
           <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
          <div className="flex flex-wrap gap-3">
           <a
            href={selectedMember.social.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
          <Linkedin className="h-5 w-5" />
           </a>
          <a
  href={selectedMember.social.github || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-gray-800 hover:bg-gray-900 rounded-full border border-white transition-colors duration-300 flex items-center justify-center"
>
  <Github className="h-5 w-5 text-white" fill="currentColor" />
</a>


    <a
      href={selectedMember.social.email ? `mailto:${selectedMember.social.email}` : "#"}
      className="p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
           <Mail className="h-5 w-5" />
            </a>
            <a
            href={selectedMember.social.Phone ? `tel:${selectedMember.social.Phone}` : "#"}
            className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors">
            <Phone className="h-5 w-5" />
            </a>
             <a
            href={selectedMember.social.Instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full transition-all">
            <Instagram className="h-5 w-5" />
           </a>
           </div>
          </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
