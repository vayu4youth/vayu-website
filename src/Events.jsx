import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

export default function Events() {
  // Events Database
  const allEvents = [
    {
      id: "vayu-summit-1",
      title: "THE FIRST VAYU SUMMIT",
      date: new Date("2026-04-18"), 
      month: "April",
      day: "18",
      year: "2026",
      path: "/FirstVayuSummit",
      description: "A day of unity, culture, and growth. Join our first ever summit in New Jersey for an unforgettable experience of Vedic wisdom and youth empowerment.",
    }
  ];

  const today = new Date();
  const upcomingEvents = allEvents.filter(event => event.date >= today);
  const pastEvents = allEvents.filter(event => event.date < today);

  return (
    <div className="bg-white px-6 py-12 md:py-20 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">

        {/* SECTION 1: UPCOMING */}
        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-[#790016] mb-12 border-b border-orange-100 pb-4 text-center md:text-left">
              Upcoming Events
            </h1>
            {upcomingEvents.map(event => (
              <EventTile key={event.id} event={event} isPast={false} />
            ))}
          </div>
        )}

        {/* SECTION 2: PAST */}
        {pastEvents.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-['Playfair_Display'] text-gray-400 mb-8 text-center md:text-left">
              Past Events
            </h2>
            <div className="space-y-6">
              {pastEvents.map(event => (
                <EventTile key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for future events */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 py-16 border-t border-dashed border-[#F09304]/40 text-center w-full"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6 shadow-sm">
            <Calendar className="w-7 h-7 text-[#D7572A]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl text-[#790016] font-['Playfair_Display'] font-semibold italic">
            More events coming soon...
          </h2>
          
          <p className="text-[#C42727] mt-3 font-medium text-lg">
            Stay tuned to our WhatsApp and Instagram for updates!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// HELPER COMPONENT
function EventTile({ event, isPast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
      <Link to={event.path}>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className={`flex flex-col md:flex-row border rounded-3xl overflow-hidden mb-8 transition-all duration-300 ${
            isPast ? "bg-gray-50 border-gray-200 opacity-75" : "bg-white border-orange-100 hover:shadow-xl shadow-sm"
          }`}
        >
          <div className={`md:w-64 p-10 flex flex-col items-center justify-center shrink-0 ${
            isPast ? "bg-gray-300 text-gray-600" : "bg-gradient-to-br from-[#EFA92A] to-[#F09304] text-[#790016]"
          }`}>
            <span className="text-lg font-bold uppercase tracking-widest mb-1">{event.month}</span>
            <span className="text-7xl font-bold leading-none">{event.day}</span>
            <span className="text-lg font-semibold mt-2 border-t border-black/10 pt-2 w-full text-center">{event.year}</span>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-center">
            <h3 className={`text-3xl font-['Playfair_Display'] font-bold mb-4 ${isPast ? "text-gray-500" : "text-[#790016]"}`}>
              {event.title}
            </h3>
            <p className={`${isPast ? "text-gray-400" : "text-[#C42727]"} mb-6 font-medium leading-relaxed`}>
              {event.description}
            </p>
            <div className={`flex items-center gap-2 font-bold ${isPast ? "text-gray-400" : "text-[#D7572A]"}`}>
              {isPast ? "View Recap" : "View Details"} <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}