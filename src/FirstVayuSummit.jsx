import React from "react";
import { Calendar, MapPin, Clock, Ticket, ArrowRight, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function EventPage() {
  // Date logic
  const eventDate = new Date("2026-04-18T17:00:00-05:00");
  const today = new Date();
  const isPast = today > eventDate;

  const eventDetails = {
    title: "THE FIRST VAYU SUMMIT!",
    description:
      "JOIN US for a transformative full-day conference inspired by the teachings of Swami Dayananda Saraswati and the timeless principles of Arya Samaj. Experience uplifting Havan and engaging, interactive sessions that explore Vedic wisdom in a impactful way for today’s world.",
    date: "Saturday, April 18th, 2026",
    time: "10:00 AM - 5:00 PM EST",
    location:
      "Arya Samaj of New Jersey,\n 32 Park Ave, Park Ridge, NJ 07656",
    mapLink:
      "https://www.google.com/maps/place/Arya+Samaj+of+New+Jersey+-+Vedic+Temple/@41.033893,-74.0401546,19.06z/data=!4m15!1m8!3m7!1s0x89c2e5e39dc9ca65:0x2c503e340fbffc3c!2s32+W+Park+Ave,+Park+Ridge,+NJ+07656!3b1!8m2!3d41.0357788!4d-74.0448921!16s%2Fg%2F11c15zgftp!3m5!1s0x89c2e507e2a550e5:0x34746e3831af0518!8m2!3d41.0336951!4d-74.0399421!16s%2Fg%2F11t7dyd18r?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSew802nwW8RpgxFIkzohEYCACrc37T3QmJaiSqy-74zi2W8CQ/viewform?usp=dialog",
    volunteerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzGKWMPCfpcZRj-0tECvF5S9HvcfVBqQN4ocWQEPePWUDraw/viewform?usp=dialog",
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-[#EFA92A] to-orange-50 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 text-[#790016] font-sanskrit tracking-wider"
            style={{ textShadow: "0 2px 10px rgba(234, 88, 12, 0.1)" }}
          >
            {eventDetails.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-12 text-[#C42727] font-['Playfair_Display'] leading-relaxed max-w-2xl mx-auto"
          >
            {eventDetails.description}
          </motion.p>

          {/* Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Date Card */}
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#F09304]/30 shadow-sm flex flex-col items-center hover:bg-white/70 transition-colors">
              <Calendar className="w-8 h-8 text-[#D7572A] mb-3" />
              <h3 className="font-bold text-[#790016] mb-1 font-['Playfair_Display']">
                Date
              </h3>
              <p className="text-[#C42727]">{eventDetails.date}</p>
            </div>

            {/* Time Card */}
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#F09304]/30 shadow-sm flex flex-col items-center hover:bg-white/70 transition-colors">
              <Clock className="w-8 h-8 text-[#D7572A] mb-3" />
              <h3 className="font-bold text-[#790016] mb-1 font-['Playfair_Display']">
                Time
              </h3>
              <p className="text-[#C42727]">{eventDetails.time}</p>
            </div>

            {/* Location Card */}
            <a
              href={eventDetails.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#F09304]/30 shadow-sm flex flex-col items-center hover:bg-white/70 transition-all group"
            >
              <MapPin className="w-8 h-8 text-[#D7572A] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-[#790016] mb-1 font-['Playfair_Display']">
                Location
              </h3>
              <p className="text-[#C42727] whitespace-pre-line text-center group-hover:text-[#790016]">
                {eventDetails.location}
              </p>
              <span className="text-xs mt-2 text-[#D7572A] opacity-70 italic">
                Click for Directions
              </span>
            </a>
          </motion.div>

          {/* Conditional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 border-t border-[#F09304]/30 flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            {!isPast ? (
              /* This shows before the event ends */
              <div className="flex flex-col md:flex-row gap-6 jusify-center items-center">
                <a
                  href={eventDetails.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-[#D7572A] text-white rounded-full font-['Playfair_Display'] text-lg hover:bg-[#DE6A10] transition-all shadow-md hover:shadow-lg flex items-center gap-3 transform hover:-translate-y-1"
                >
                  <Ticket className="w-5 h-5" />
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={eventDetails.volunteerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-[#D7572A] text-white rounded-full font-['Playfair_Display'] text-lg hover:bg-[#DE6A10] transition-all shadow-md hover:shadow-lg flex items-center gap-3 transform hover:-translate-y-1"
                >
                  <UserPlus className="w-5 h-5" />
                  Want to Volunteer?
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ) : (
              /* This shows after the event ends */
              <div className="py-8 px-6 bg-white/40 rounded-3xl border border-dashed border-[#790016]/20 inline-block">
                <h2 className="text-2xl font-['Playfair_Display'] text-[#790016] mb-2 font-bold">
                  Event Concluded
                </h2>
                <p className="text-[#D7572A]">
                  Registration is now closed. See you at the next one!
                </p>
              </div>
            )}
        </motion.div>
        </div>
      </section>
    </div>
  );
}