'use client'
import '@/app/globals.css'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
}

export default function AboutUs() {
  return (
    <div className="relative min-h-[90vh]">
      {/* Background Image */}
      <div className="add-img"></div>
      
      {/* Content Container */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 py-16">
        {/* Header */}
        <div className="shadow-gen max-w-4xl bg-[#30231bab] p-6 md:p-8 border-[#7e714a] border-2 rounded-lg text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">About Our Team</h2>
          <hr className="my-4 border-[#7e714a] border-2 w-full" />
          <p className="text-base md:text-lg text-gray-300">
            Meet the masters of lore who have crafted the Dark Souls API.<br></br> Our dedicated team has spent countless hours researching the deep mysteries of Lordran.
          </p>
        </div>
        
        {/* Team Members Container */}
        <div className="flex flex-wrap justify-center items-center w-full gap-8 md:gap-16">
          {/* Team Member 1 */}
          <TeamMember 
            name="Abhinav Pant" 
            role="Lead Developer"
            image="/artorias.jpeg"
            bio="Keeper of ancient code, wielder of APIs, and scholar of forgotten frameworks."
          />
          
          {/* Team Member 2 */}
          <TeamMember 
            name="CV Sivaram" 
            role="Lore Architect"
            image="/artorias.jpeg"
            bio="Weaver of stories, guardian of forgotten tales, and architect of narrative APIs."
          />
        </div>
      </div>
    </div>
  );
}

function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 group">
      {/* Main Card Container */}
      <div className="w-full h-full overflow-hidden transition-all duration-300 hover:scale-105">
        {/* Profile Content */}
        <div className="w-full h-full rounded-lg border-2 border-[#7e714a] bg-[#30231bab] flex flex-col items-center justify-center p-4 text-wrap transition-opacity duration-300 hover:opacity-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#7e714a] mb-2">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mt-2 text-white">{name}</h3>
          <p className="text-[#f16c05] text-sm md:text-base">{role}</p>
        </div>
        
        {/* Hover Content */}
        <div 
          className="absolute inset-0 w-full h-full rounded-lg border-2 border-[#7e714a] flex flex-col items-center justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, #1e0d02 30%, #3a2108 80%)'
          }}
        >
          <p className="text-sm md:text-base mb-4 text-white">{bio}</p>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-3 mt-2">
            <SocialIcon Icon={FaTwitter} href="#" />
            <SocialIcon Icon={FaGithub} href="#" />
            <SocialIcon Icon={FaLinkedin} href="#" />
            <SocialIcon Icon={FaInstagram} href="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ Icon, href }: SocialIconProps) {
  return (
    <a 
      href={href}
      className="w-8 h-8 rounded-full bg-[#7e714a] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#f16c05]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-white text-lg" />
    </a>
  );
}