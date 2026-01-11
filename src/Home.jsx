import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { ArrowRight, Mail, MessageCircle, Instagram, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-[#EFA92A] to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl lg:text-8xl mb-8 text-[#790016] font-sanskrit tracking-wider"
            style={{
              textShadow: '0 2px 10px rgba(234, 88, 12, 0.1)'
            }}
          >
            Welcome To VAYU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light mb-4 text-[#C42727] font-['Playfair_Display']"
          >
            Vedic Association for Youth Unity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-[#F09304] flex flex-col md:flex-row gap-4 justify-center items-center"
          >
             <Link
              to={createPageUrl("About")}
              className="px-8 py-4 bg-[#D7572A] text-white rounded-full font-['Playfair_Display'] hover:bg-[#DE6A10] transition-colors flex items-center gap-2"
            >
              Our Story <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdL9wn1ZiR7ZE5ETXreFexknhP5jvwTSeKtLQmpBTPOtmv10Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-100 text-[#D7572A] rounded-full font-['Playfair_Display'] hover:bg-[#FDE2C4] transition-colors flex items-center gap-2"
            >
              Join the Team <UserPlus className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex justify-center gap-6 text-[#C42727]"
          >
            <a
              href="https://www.instagram.com/vayu_international/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-[#790016] cursor-pointer" />
            </a>
            <a href="mailto:vayu4youth@gmail.com">
              <Mail className="w-6 h-6 hover:text-[#790016] cursor-pointer" />
            </a>
            <a 
              href="https://chat.whatsapp.com/Dp4fcjiOtTk9yIaZtWFBtY" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Join our WhatsApp Group" 
            >
              {/* Custom WhatsApp Icon SVG */}
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 hover:text-[#790016] cursor-pointer transition-colors"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}