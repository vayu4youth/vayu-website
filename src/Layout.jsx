import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
// I added 'Calendar' to this list below:
import { Users, BookOpen, Home, Calendar } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: createPageUrl("Home"), icon: Home },
    { name: "About", path: createPageUrl("About"), icon: BookOpen },
    { name: "Team", path: createPageUrl("Team"), icon: Users },
    { name: "Events", path: createPageUrl("Events"), icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-orange-50 border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <img
                src="/logos/APSA_logo.png"
                alt="APSA Logo"
                className="w-12 h-12 object-contain"
              />
              <img
                src="/logos/VAYU_logo.png"
                alt="VAYU Logo"
                className="w-12 h-12 object-contain rounded-full"
              />
              <span className="inline-block text-2xl font-bold text-[#C42727] drop-shadow-sm font-['Playfair_Display'] tracking-widest">
                VAYU
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-orange-100 text-[#D7572A] shadow-sm"
                      : "text-[#C42727] hover:text-[#790016] hover:bg-orange-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-semibold font-['Playfair_Display']">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-orange-600 p-2"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-orange-600"></span>
                <span className="block w-6 h-0.5 bg-orange-600"></span>
                <span className="block w-6 h-0.5 bg-orange-600"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? "bg-orange-100 text-[#D7572A]"
                      : "text-[#C42727] hover:text-[#790016] hover:bg-orange-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-semibold font-['Playfair_Display']">{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-orange-50 border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="/logos/APSA_logo.png"
                alt="APSA Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-2xl font-bold text-[#C42727] font-['Playfair_Display'] tracking-widest">
                VAYU
              </span>
              <img
                src="/logos/VAYU_logo.png"
                alt="VAYU Logo"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
            <p className="text-2xl md:text-3xl font-sanskrit text-[#790016] mb-2"
              style={{ fontFamily: 'serif' }}>
              समानी व आकूतिः। समाना हृदयानि वः।
            </p>
            <p className="text-lg text-[#D7572A] italic mb-2 font-['Source_Sans_3']">
              Let our resolutions be the same. Let our hearts be the same.
            </p>
            <p 
              style={{ fontFamily: "'Nunito'" }}
              className="text-sm text-[#F09304] mb-2">
              (Rigveda 10.191.4)
            </p>
            <div className="mt-8 pt-6 border-t border-[#F09304]">
              <p className="text-[#790016] font-semibold font-['Playfair_Display']">
                VAYU – Vedic Association for Youth Unity
              </p>
              <p className="mt-2 text-[#D7572A] italic text-sm mt-1 font-['Source_Sans_3']">
                An <a href="http://aryasamaj.com" target = "_blank"><u>APSA</u></a> Initiative
              </p>
              <p 
                style={{ fontFamily: "'Nunito'" }}
                className="text-[#F09304] text-sm mt-2">
                Reconnecting youth with their heritage.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}