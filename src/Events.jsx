import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#EFA92A] to-orange-50 rounded-3xl p-12 md:p-16 border border-orange-200 shadow-lg"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F09304] to-orange-600 flex items-center justify-center mb-8 mx-auto shadow-lg">
            <Calendar className="w-12 h-12 text-white" />
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-[#790016] font-['Playfair_Display']"
          >
            Coming Soon!
          </h1>
          <p
            className="mt-8 text-1xl md:text-3xl mb-8 leading-relaxed text-[#C42727] font-['Source_Sans_3']"
          >
            Our events calendar is being prepared
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed text-[#D7572A] font-nunito"
          >
            We're working hard to bring you exciting gatherings, workshops, and celebrations. Meanwhile, stay connected 
            with us on Instagram and WhatsApp for updates!
          </p>
        </motion.div>
      </div>
    </div>
  );
}