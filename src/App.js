import React, { useState, useEffect } from "react";
import "./index.css";
import heroImg from "./assets/hero.png";
import studentImg from "./assets/student.png";
import residentialImg from "./assets/residential.png";
import landlordImg from "./assets/landlord.png";
import tenantImg from "./assets/tenant.png";
import berlinImg from "./assets/berlin_city.png";
import hamburgImg from "./assets/hamburg_city.png";
import munichImg from "./assets/munich_city.png";
import lifestyleWorking from "./assets/lifestyle_working.png";
import interiorDetail from "./assets/interior_detail.png";
import smartKeyless from "./assets/smart_keyless.png";
import communityRooftop from "./assets/community_rooftop.png";
import curationBox from "./assets/curation_box.png";
import handoverBox from "./assets/handover_box.png";
import leasingBox from "./assets/leasing_box.png";
import discoveryMockup from "./assets/discovery_mockup.png";
import bookingSuccess from "./assets/booking_success.png";
import conciergeWelcome from "./assets/concierge_welcome.png";
import frictionlessLiving from "./assets/frictionless_living.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-16 px-8 flex items-center justify-between rounded-full transition-all duration-700 z-[1000] border border-white/20 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-kinetic top-4 py-2"
          : "bg-white/10 backdrop-blur-md shadow-inner-glow opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-xl font-black tracking-tighter text-deep-onyx italic">
        Fixoria
      </div>
      <div className="hidden md:flex items-center gap-8">
        {["Home", "Properties", "Investors", "Landlords"].map((link) => (
          <a
            key={link}
            href="/"
            className="text-[9px] font-black uppercase tracking-[0.2em] text-text-main hover:text-accent transition-all"
          >
            {link}
          </a>
        ))}
        <button className="bg-deep-onyx text-white px-6 py-2.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] shadow-kinetic hover:bg-accent transition-all">
          Contact
        </button>
      </div>
    </nav>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-white border border-black/5 rounded-[30px] p-8 md:p-10 mb-5 transition-all duration-500 cursor-pointer ${
        isOpen
          ? "bg-pastel-pink shadow-soft translate-x-2"
          : "hover:translate-x-2 hover:bg-pastel-pink/50"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center text-lg md:text-xl font-bold">
        <span>{question}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[300px] mt-5" : "max-h-0"}`}
      >
        <p className="text-text-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-secondary selection:bg-accent/20 relative font-['Inter']">
      {/* Structural Elements Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Hairline Grid Overlay */}
        <div className="absolute inset-0 bg-dot opacity-40"></div>
        <div className="absolute inset-y-0 left-1/4 w-px bg-black/[0.03]"></div>
        <div className="absolute inset-y-0 left-2/4 w-px bg-black/[0.03]"></div>
        <div className="absolute inset-y-0 left-3/4 w-px bg-black/[0.03]"></div>

        {/* Soft Organic Background Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-curator-teal/5 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="bg-noise"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Replicated Image Hero Section */}
        <section className="bg-white p-2 md:p-6 min-h-screen">
          <div className="relative h-[90vh] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-2xl">
            {/* Immersive Background */}
            <div
              className="absolute inset-0 bg-cover bg-center animate-slow-pan transform scale-110"
              style={{ backgroundImage: `url(${heroImg})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

            {/* Integrated Header */}
            <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white font-black text-sm">
                  t
                </div>
                <span className="text-white text-xl font-black tracking-tighter">
                  Fixoria
                </span>
              </div>

              <nav className="hidden md:flex items-center gap-8 text-white/80 text-[10px] font-black uppercase tracking-widest">
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
                <a href="/" className="hover:text-white transition-colors">
                  Properties
                </a>
                <a href="/" className="hover:text-white transition-colors">
                  Agents
                </a>
                <a href="/" className="hover:text-white transition-colors">
                  About
                </a>
                <a href="/" className="hover:text-white transition-colors">
                  Contact
                </a>
              </nav>

              <button className="bg-white text-deep-onyx px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-accent hover:text-white transition-all shadow-kinetic">
                Book Appointment
                <div className="w-5 h-5 bg-deep-onyx rounded-full flex items-center justify-center text-white">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </header>

            {/* Main Hero Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 pb-32">
              <div className="reveal">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
                  Discover your perfect <br />
                  <span className="text-white/90">hangout spot!</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed font-medium">
                  Discover the perfect property that fits your lifestyle and
                  budget from our extensive listings across the country.
                </p>
                <button className="bg-white text-deep-onyx px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-4 hover:scale-105 transition-all shadow- kinetic">
                  Explore Properties
                  <div className="w-8 h-8 bg-deep-onyx rounded-full flex items-center justify-center text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats Counter Bar (Bottom Right) */}
            <div
              className="absolute bottom-0 right-0 bg-white pr-10 pl-16 py-10 md:py-14 rounded-tl-[4rem] md:rounded-tl-[6rem] flex items-center gap-12 md:gap-20 z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.1)] reveal"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-deep-onyx tracking-tighter">
                  12+
                </span>
                <span className="text-[10px] md:text-xs font-bold text-text-mist uppercase tracking-widest mt-1">
                  Years Experience
                </span>
              </div>
              <div className="w-px h-16 bg-black/5"></div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-deep-onyx tracking-tighter">
                  200+
                </span>
                <span className="text-[10px] md:text-xs font-bold text-text-mist uppercase tracking-widest mt-1">
                  Successful Projects
                </span>
              </div>
              <div className="w-px h-16 bg-black/5"></div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-deep-onyx tracking-tighter">
                  100+
                </span>
                <span className="text-[10px] md:text-xs font-bold text-text-mist uppercase tracking-widest mt-1">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Design Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5">
            <div className="reveal flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
              <div className="flex-1">
                <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-8 inline-block shadow-soft border border-black/5">
                  Philosophy
                </span>
                <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter text-text-main">
                  Curation{" "}
                  <span className="text-text-mist font-medium">is our</span>{" "}
                  <br />
                  <span className="italic font-serif">true</span> north
                </h2>
                <p className="text-xl text-text-muted mb-12 leading-relaxed font-medium">
                  We believe that{" "}
                  <span className="text-text-main">your surroundings</span>{" "}
                  shape your mindset. Every Fixoria apartment is a{" "}
                  <span className="text-text-mist">
                    canvas of modern Scandinavian design
                  </span>
                  , curated with premium materials and bespoke furniture that
                  tells a{" "}
                  <span className="text-text-main italic">
                    story of elegance
                  </span>{" "}
                  and function.
                </p>
                <div className="flex gap-12">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-4xl font-black text-accent tracking-tighter">
                      100%
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                      Handpicked Decor
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-4xl font-black text-accent tracking-tighter">
                      A+
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                      Energy Efficiency
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-[1.2] relative h-[400px] md:h-[600px] w-full">
                <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-[40px] overflow-hidden shadow-float z-10">
                  <img
                    src={interiorDetail}
                    alt="Interior Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-[40px] border-[15px] border-white overflow-hidden shadow-float z-20">
                  <img
                    src={lifestyleWorking}
                    alt="Lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Purpose Section - The Urban Manifesto */}
        <section className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/[0.02] -skew-x-12 transform origin-top-right"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="reveal mb-24 max-w-4xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent/40 block mb-6">
                Section 03 // Our Purpose
              </span>
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-[-0.08em] text-text-main">
                ELEVATING <br />
                <span className="text-accent italic font-serif font-light">
                  the human
                </span>{" "}
                <br />
                EXPERIENCE.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Pillar 01 */}
              <div className="reveal group" style={{ animationDelay: "0.1s" }}>
                <div className="h-px bg-accent/20 mb-8 w-full group-hover:bg-accent transition-all duration-700"></div>
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                    01 // DESIGN
                  </span>
                  <div className="w-12 h-12 rounded-full border border-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all transform group-hover:rotate-12">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">
                  Architectural Integrity
                </h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  We don't just provide rooms; we architect lifestyle ecosystems
                  where every curve and material choice is intentional.
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="reveal group" style={{ animationDelay: "0.2s" }}>
                <div className="h-px bg-accent/20 mb-8 w-full group-hover:bg-accent transition-all duration-700"></div>
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                    02 // TECH
                  </span>
                  <div className="w-12 h-12 rounded-full border border-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all transform group-hover:-rotate-12">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">
                  Frictionless Living
                </h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  Smart access, integrated utilities, and 24/7 digital support
                  ensure your focus remains on what truly matters.
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="reveal group" style={{ animationDelay: "0.3s" }}>
                <div className="h-px bg-accent/20 mb-8 w-full group-hover:bg-accent transition-all duration-700"></div>
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                    03 // COMMUNITY
                  </span>
                  <div className="w-12 h-12 rounded-full border border-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all transform group-hover:scale-110">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">
                  Human Connection
                </h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  Curating inspired neighborhoods of like-minded professionals
                  and creators in the heart of global cities.
                </p>
              </div>
            </div>

            {/* Bottom Stats Row */}
            <div
              className="reveal mt-32 grid grid-cols-2 md:grid-cols-4 gap-12"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
                <span className="text-4xl md:text-6xl font-black text-accent block mb-2 tracking-tighter">
                  15+
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-text-mist">
                  Years in Curation
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black text-accent block mb-2 tracking-tighter">
                  500+
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-text-mist">
                  Smart Residences
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black text-accent block mb-2 tracking-tighter">
                  12+
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-text-mist">
                  Global Cities
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black text-accent block mb-2 tracking-tighter">
                  98%
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-text-mist">
                  Tenant Satisfaction
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Verticals - Modernized */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5">
            <div className="reveal mb-20 text-center md:text-left">
              <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-8 inline-block shadow-soft border border-black/5">
                Verticals
              </span>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-text-main">
                Adaptive{" "}
                <span className="text-text-mist font-medium">living</span>{" "}
                <br />
                <span className="italic font-serif">modules</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="reveal bg-white rounded-[50px] overflow-hidden shadow-soft hover:-translate-y-4 hover:shadow-float transition-all duration-500 group">
                <div className="h-[400px] relative overflow-hidden">
                  <img
                    src={studentImg}
                    alt="Student Housing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 right-8">
                    <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full font-bold text-xs shadow-soft">
                      Tier 1 Locations
                    </span>
                  </div>
                </div>
                <div className="p-12 md:p-16">
                  <h3 className="text-3xl font-black mb-4 tracking-tighter text-text-main">
                    The Academic Hub
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-8 font-medium">
                    Fully managed{" "}
                    <span className="text-text-main">student residences</span>{" "}
                    with a focus on{" "}
                    <span className="text-text-mist">
                      community and inspiration
                    </span>
                    .
                  </p>
                  <div className="pt-4 border-t border-black/5">
                    <a
                      href="/"
                      className="font-black text-[10px] uppercase tracking-[0.2em] text-accent hover:translate-x-2 inline-block transition-transform"
                    >
                      Explore Units →
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="reveal bg-white rounded-[50px] overflow-hidden shadow-soft hover:-translate-y-4 hover:shadow-float transition-all duration-500 group"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="h-[400px] relative overflow-hidden">
                  <img
                    src={residentialImg}
                    alt="Professional"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 right-8">
                    <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full font-bold text-xs shadow-soft">
                      Executive Living
                    </span>
                  </div>
                </div>
                <div className="p-12 md:p-16">
                  <h3 className="text-3xl font-black mb-4 tracking-tighter text-text-main">
                    The Urban Professional
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-8 font-medium">
                    High-end{" "}
                    <span className="text-text-main">apartment suites</span>{" "}
                    integrated with{" "}
                    <span className="text-text-mist">
                      workspaces and luxury
                    </span>{" "}
                    amenities.
                  </p>
                  <div className="pt-4 border-t border-black/5">
                    <a
                      href="/"
                      className="font-black text-[10px] uppercase tracking-[0.2em] text-accent hover:translate-x-2 inline-block transition-transform"
                    >
                      Explore Suites →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Offerings Section */}
        <section className="reveal bg-pastel-yellow rounded-[100px] mx-[2%] py-20 md:py-28 px-5 md:px-[5%]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider mb-6 inline-block">
                  Our Services
                </span>
                <h2 className="text-4xl md:text-6xl font-black max-w-[600px] leading-[1.1] tracking-tighter">
                  Curated lifestyle for the modern tenant
                </h2>
              </div>
              <button className="border-2 border-accent text-accent px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all">
                View all services
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
              <div className="reveal relative bg-white rounded-[60px] p-12 md:p-16 flex flex-col justify-end min-h-[400px] md:min-h-[830px] overflow-hidden group lg:row-span-2 shadow-soft hover:shadow-float transition-all duration-500 border border-black/5">
                <div className="absolute inset-0 z-0">
                  <img
                    src={curationBox}
                    alt="Curation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[1.1] brightness-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-[25px] flex items-center justify-center mb-8 shadow-soft text-3xl">
                    🛋️
                  </div>
                  <div className="absolute top-0 right-0">
                    <span className="bg-accent text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-float">
                      Signature
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-5 tracking-tighter">
                    Design-Led Curation
                  </h3>
                  <p className="text-lg text-text-muted leading-relaxed max-w-md">
                    Every Fixoria apartment is an architectural canvas. We blend
                    Scandinavian minimalism with functional luxury to create
                    spaces that inspire your daily life.
                  </p>
                </div>
              </div>

              <div
                className="reveal relative bg-white rounded-[60px] p-12 md:p-16 flex flex-col justify-end min-h-[400px] overflow-hidden group shadow-soft hover:shadow-float transition-all border border-black/5"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute top-0 left-0 w-full h-[200px] z-0">
                  <img
                    src={handoverBox}
                    alt="Handover"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40"></div>
                </div>
                <div className="relative z-10 pt-10">
                  <div className="w-20 h-20 bg-white rounded-[25px] flex items-center justify-center mb-8 shadow-soft text-3xl">
                    ⚡
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tighter">
                    Seamless Handover
                  </h3>
                  <p className="text-lg text-text-muted leading-relaxed">
                    Instant fiber internet and smart utilities ready from second
                    one.
                  </p>
                </div>
              </div>

              <div
                className="reveal relative bg-white rounded-[60px] p-12 md:p-16 flex flex-col justify-end min-h-[400px] overflow-hidden group shadow-soft hover:shadow-float transition-all border border-black/5"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute top-0 left-0 w-full h-[200px] z-0">
                  <img
                    src={leasingBox}
                    alt="Leasing"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40"></div>
                </div>
                <div className="relative z-10 pt-10">
                  <div className="w-20 h-20 bg-white rounded-[25px] flex items-center justify-center mb-8 shadow-soft text-3xl">
                    🔄
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tighter">
                    Agile Leasing
                  </h3>
                  <p className="text-lg text-text-muted leading-relaxed">
                    Flexible terms that adapt to your fast-paced professional
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Journey Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5">
            <div className="reveal text-center mb-24">
              <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-8 inline-block shadow-soft border border-black/5">
                Our Process
              </span>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] text-text-main">
                Discover the <span className="italic font-serif">Fixoria</span>{" "}
                <br />
                <span className="text-text-mist font-medium">experience</span>
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto py-10">
              {/* Timeline center line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block"></div>

              <div className="flex flex-col gap-24 md:gap-32">
                <div className="reveal flex flex-col lg:flex-row items-center justify-between relative group">
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 bg-accent border-[6px] border-white rounded-full z-10 shadow-[0_0_30px_rgba(108,92,231,0.4)] hidden lg:block"></div>
                  <div className="w-full lg:w-[45%] h-[300px] md:h-[450px] rounded-[40px] overflow-hidden shadow-float group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={discoveryMockup}
                      alt="Discovery"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full lg:w-[45%] bg-white p-10 md:p-16 rounded-[50px] shadow-soft border border-black/5 relative z-10 flex flex-col gap-5 mt-10 lg:mt-0">
                    <span className="text-6xl md:text-9xl font-black text-pastel-blue absolute -top-10 right-10 -z-10 opacity-60 font-serif">
                      01
                    </span>
                    <span className="bg-pastel-pink text-[#ff6b81] px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest self-start">
                      The Search
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
                      Digital Discovery
                    </h3>
                    <p className="text-lg text-text-muted leading-relaxed">
                      Explore our curated collection through an interface
                      designed for speed. High-fidelity visuals and AI matching
                      help you find your home in record time.
                    </p>
                  </div>
                </div>

                <div
                  className="reveal flex flex-col lg:flex-row-reverse items-center justify-between relative group"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 bg-accent border-[6px] border-white rounded-full z-10 shadow-[0_0_30px_rgba(108,92,231,0.4)] hidden lg:block"></div>
                  <div className="w-full lg:w-[45%] h-[300px] md:h-[450px] rounded-[40px] overflow-hidden shadow-float group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={bookingSuccess}
                      alt="Booking"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full lg:w-[45%] bg-white p-10 md:p-16 rounded-[50px] shadow-soft border border-black/5 relative z-10 flex flex-col gap-5 mt-10 lg:mt-0">
                    <span className="text-6xl md:text-9xl font-black text-pastel-blue absolute -top-10 left-10 -z-10 opacity-60 font-serif">
                      02
                    </span>
                    <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest self-start">
                      The Commitment
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
                      One-Click Reservation
                    </h3>
                    <p className="text-lg text-text-muted leading-relaxed">
                      Secure your space instantly with digital signatures and
                      zero paperwork. A seamless bridge between finding and
                      belonging.
                    </p>
                  </div>
                </div>

                <div
                  className="reveal flex flex-col lg:flex-row items-center justify-between relative group"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 bg-accent border-[6px] border-white rounded-full z-10 shadow-[0_0_30px_rgba(108,92,231,0.4)] hidden lg:block"></div>
                  <div className="w-full lg:w-[45%] h-[300px] md:h-[450px] rounded-[40px] overflow-hidden shadow-float group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={conciergeWelcome}
                      alt="Onboarding"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full lg:w-[45%] bg-white p-10 md:p-16 rounded-[50px] shadow-soft border border-black/5 relative z-10 flex flex-col gap-5 mt-10 lg:mt-0">
                    <span className="text-6xl md:text-9xl font-black text-pastel-blue absolute -top-10 right-10 -z-10 opacity-60 font-serif">
                      03
                    </span>
                    <span className="bg-pastel-pink text-[#ff6b81] px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest self-start">
                      The Welcome
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
                      Concierge Onboarding
                    </h3>
                    <p className="text-lg text-text-muted leading-relaxed">
                      Arrive to a home that is truly ready. From climate control
                      to welcome kits, our team ensures your first second is
                      exceptional.
                    </p>
                  </div>
                </div>

                <div
                  className="reveal flex flex-col lg:flex-row-reverse items-center justify-between relative group"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 bg-accent border-[6px] border-white rounded-full z-10 shadow-[0_0_30px_rgba(108,92,231,0.4)] hidden lg:block"></div>
                  <div className="w-full lg:w-[45%] h-[300px] md:h-[450px] rounded-[40px] overflow-hidden shadow-float group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={frictionlessLiving}
                      alt="Living"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full lg:w-[45%] bg-white p-10 md:p-16 rounded-[50px] shadow-soft border border-black/5 relative z-10 flex flex-col gap-5 mt-10 lg:mt-0">
                    <span className="text-6xl md:text-9xl font-black text-pastel-blue absolute -top-10 left-10 -z-10 opacity-60 font-serif">
                      04
                    </span>
                    <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest self-start">
                      The Experience
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
                      Zero-Friction Living
                    </h3>
                    <p className="text-lg text-text-muted leading-relaxed">
                      No maintenance worries, no utility setup. Just pure,
                      elevated living with 24/7 digital support at your
                      fingertips.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="reveal text-center mt-24"
              style={{ animationDelay: "0.8s" }}
            >
              <button className="bg-accent text-white px-12 py-5 rounded-full font-bold shadow-float hover:-translate-y-1 transition-all">
                Start Your Journey
              </button>
            </div>
          </div>
        </section>

        {/* Landlord - Partner Section */}
        <section className="bg-primary text-white rounded-[100px] mx-[2%] py-20 md:py-28 px-5 md:px-[5%]">
          <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="reveal flex-1">
                <span className="bg-white/10 text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider mb-8 inline-block">
                  Partnership
                </span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                  Scale your portfolio
                </h2>
                <p className="text-xl text-white/70 mb-12 leading-relaxed">
                  Join 100+ property owners who have transformed their assets
                  into high-yield, premium residences with Fixoria.
                </p>
                <div className="flex flex-col gap-5 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-soft"></div>
                    <p className="font-semibold text-lg">
                      Guaranteed Rental Income
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-soft"></div>
                    <p className="font-semibold text-lg">
                      End-to-End Asset Management
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-soft"></div>
                    <p className="font-semibold text-lg">
                      Rigorous Tenant Screening
                    </p>
                  </div>
                </div>
                <button className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-float hover:-translate-y-1 transition-all">
                  Partner with us
                </button>
              </div>
              <div className="reveal flex-1" style={{ animationDelay: "0.2s" }}>
                <img
                  src={landlordImg}
                  alt="Landlord"
                  className="rounded-[40px] w-full h-[300px] md:h-[600px] object-cover shadow-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Prime Locations - Redesigned */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5">
            <div className="reveal text-center mb-20">
              <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider mb-6 inline-block">
                Geographic Presence
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                Prime urban locations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[600px] gap-6">
              <div className="reveal relative rounded-[40px] overflow-hidden group col-span-1 md:col-span-2 shadow-soft hover:shadow-float transition-all duration-500 cursor-pointer">
                <img
                  src={berlinImg}
                  alt="Berlin"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="text-3xl font-black tracking-tighter mb-2">
                    Berlin
                  </h3>
                  <p className="opacity-80 text-sm mb-4">
                    Mitte, Prenzlauer Berg, Kreuzberg
                  </p>
                  <div className="text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full self-start">
                    120+ Units Available
                  </div>
                </div>
              </div>
              <div
                className="reveal relative rounded-[40px] overflow-hidden group shadow-soft hover:shadow-float transition-all duration-500 cursor-pointer"
                style={{ animationDelay: "0.1s" }}
              >
                <img
                  src={hamburgImg}
                  alt="Hamburg"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="text-3xl font-black tracking-tighter mb-2">
                    Hamburg
                  </h3>
                  <p className="opacity-80 text-sm">Altona, Winterhude</p>
                </div>
              </div>
              <div
                className="reveal relative rounded-[40px] overflow-hidden group shadow-soft hover:shadow-float transition-all duration-500 cursor-pointer"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={munichImg}
                  alt="Munich"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="text-3xl font-black tracking-tighter mb-2">
                    Munich
                  </h3>
                  <p className="opacity-80 text-sm">Schwabing, Maxvorstadt</p>
                </div>
              </div>
            </div>

            <div className="reveal text-center mt-16">
              <button className="border-2 border-accent text-accent px-10 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all">
                Explore all 15+ Cities
              </button>
            </div>
          </div>
        </section>

        {/* Amenities Section - Modern Living Redesign */}
        <section className="reveal bg-pastel-yellow rounded-[100px] mx-[2%] py-20 md:py-28 px-5 md:px-[5%] mb-10">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <span className="bg-pastel-blue text-accent px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider mb-6 inline-block">
                Modern Living
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                Designed for Modern Living
              </h2>
              <p className="text-xl text-text-muted mt-6 max-w-2xl mx-auto">
                We've anticipated every need of the urban resident, creating a
                holistic ecosystem of luxury and convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="reveal bg-white p-10 rounded-[40px] shadow-soft hover:shadow-float hover:-translate-y-2 transition-all duration-500 border border-black/5">
                <span className="text-5xl mb-8 inline-block">⚡</span>
                <h3 className="text-2xl font-black mb-4 tracking-tighter">
                  High-Speed Wi-Fi
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Redundant enterprise-grade internet to power your remote work
                  and streaming.
                </p>
              </div>
              <div
                className="reveal bg-white p-10 rounded-[40px] shadow-soft hover:shadow-float hover:-translate-y-2 transition-all duration-500 border border-black/5"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="text-5xl mb-8 inline-block">🧹</span>
                <h3 className="text-2xl font-black mb-4 tracking-tighter">
                  Professional Cleaning
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Bi-weekly hotel-standard linen changes and deep cleaning
                  service included.
                </p>
              </div>
              <div
                className="reveal bg-white p-10 rounded-[40px] shadow-soft hover:shadow-float hover:-translate-y-2 transition-all duration-500 border border-black/5"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-5xl mb-8 inline-block">🍳</span>
                <h3 className="text-2xl font-black mb-4 tracking-tighter">
                  Gourmet Ready
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Kitchens equipped with high-end appliances and designer
                  dinnerware.
                </p>
              </div>
              <div
                className="reveal bg-white p-10 rounded-[40px] shadow-soft hover:shadow-float hover:-translate-y-2 transition-all duration-500 border border-black/5"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-5xl mb-8 inline-block">🔌</span>
                <h3 className="text-2xl font-black mb-4 tracking-tighter">
                  All-In-One Billing
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Heating, electricity, and taxes all consolidated into a single
                  monthly fee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Living Section */}
        <section className="bg-pastel-blue rounded-[100px] mx-[2%] py-20 md:py-28 px-5 md:px-[5%] mb-10">
          <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="reveal flex-1">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider mb-8 inline-block">
                  Tech-First
                </span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                  Living in the future
                </h2>
                <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-xl">
                  Experience a truly frictionless lifestyle. From keyless entry
                  via your smartphone to integrated smart home systems, we blend
                  technology seamlessly into your daily routine.
                </p>
                <ul className="flex flex-col gap-5 mb-10">
                  {[
                    "Digital Check-in & Keyless Entry",
                    "One-App Support & Maintenance",
                    "Community Rooftops & Social Events",
                    "Automated Utility Management",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-lg font-semibold"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-accent text-white px-10 py-5 rounded-full font-bold shadow-float hover:-translate-y-1 transition-all">
                  Learn about the App
                </button>
              </div>
              <div
                className="reveal flex-1 grid grid-cols-2 gap-6"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-float col-span-1 group">
                  <img
                    src={smartKeyless}
                    alt="Smart Entry"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-soft">
                      Keyless Access
                    </span>
                  </div>
                </div>
                <div className="relative h-[300px] md:h-[500px] rounded-[40px] overflow-hidden shadow-float col-span-1 mt-20 group">
                  <img
                    src={communityRooftop}
                    alt="Rooftop"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-soft">
                      Social Spaces
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-pastel-pink rounded-[100px] mx-[2%] py-16 md:py-24 px-5 md:px-[5%] mb-10">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="reveal flex-1 rounded-[50px] overflow-hidden shadow-float h-[400px] md:h-[600px]">
                <img
                  src={tenantImg}
                  alt="Tenant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="reveal flex-1">
                <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px] mb-6 inline-block">
                  Testimonials
                </span>
                <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter text-text-main">
                  What our{" "}
                  <span className="text-text-mist font-medium">tenants</span>{" "}
                  <br />
                  <span className="italic font-serif">actually</span> say
                </h2>
                <div className="bg-white/60 backdrop-blur-md p-10 md:p-12 rounded-[50px] shadow-soft border border-white">
                  <p className="text-2xl md:text-3xl italic mb-10 text-text-main leading-snug tracking-tight">
                    "Fixoria made my move to Berlin incredibly smooth. The
                    apartment was exactly as described – beautifully furnished
                    and in a perfect location."
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-accent/10 rounded-full border-2 border-accent/20"></div>
                    <div>
                      <h4 className="font-black text-xl tracking-tighter">
                        Sarah Jenkins
                      </h4>
                      <p className="text-sm font-bold text-text-muted uppercase tracking-widest">
                        Tech Professional from London
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Final CTA Section */}
        <section className="py-16 md:py-24 px-5">
          <div className="container mx-auto text-center">
            <div className="bg-white/40 backdrop-blur-3xl border border-white/60 p-16 md:p-24 rounded-[60px] shadow-soft max-w-5xl mx-auto">
              <h2 className="reveal text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                Stay in the loop
              </h2>
              <p className="reveal text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                Get notified about new listings and corporate housing
                opportunities in your favorite cities.
              </p>
              <div className="reveal flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white px-8 py-5 rounded-full border border-black/5 shadow-soft outline-none focus:border-accent transition-all flex-[2]"
                />
                <button className="bg-accent text-white px-10 py-5 rounded-full font-bold shadow-float hover:-translate-y-1 transition-all flex-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-transparent">
          <div className="container mx-auto px-5 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tighter">
              Common questions
            </h2>
            <div className="flex flex-col gap-4">
              <FAQItem
                question="When is the booking fee due?"
                answer="The booking fee is due at the time of reservation to secure the apartment. Payment details will be provided during the booking process."
              />
              <FAQItem
                question="Do you offer corporate rentals?"
                answer="Yes, we work with businesses to provide housing for employees. For corporate bookings, please contact our client relations team directly."
              />
              <FAQItem
                question="What’s included in the rent?"
                answer="Our apartments include utilities (electricity, water, heating), Wi-Fi, and all furnishings. Kitchenware, bedding, and cleaning services are also included."
              />
              <FAQItem
                question="How does the rental process work?"
                answer="Our process is streamlined and intuitive. From browsing to signing the lease, everything can be managed online for your convenience."
              />
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5">
            <div className="reveal relative bg-deep-onyx rounded-[100px] p-12 md:p-24 overflow-hidden group shadow-kinetic">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-[-0.05em] leading-[0.85]">
                  Ready{" "}
                  <span className="text-white/40 font-medium">to find</span>{" "}
                  <br />
                  your{" "}
                  <span className="italic font-serif text-white/80">
                    nexus?
                  </span>
                </h2>
                <p className="text-xl text-white/60 mb-12 leading-relaxed font-medium">
                  Join 1000+ <span className="text-white">happy tenants</span>{" "}
                  who found their perfect living space with Fixoria. Experience
                  the <span className="text-white/40 italic">future</span> of
                  urban living.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="bg-white text-deep-onyx px-10 py-5 rounded-full font-black text-sm shadow-kinetic hover:scale-105 transition-all">
                    Browse Apartments
                  </button>
                  <button className="bg-transparent text-white border border-white/20 px-10 py-5 rounded-full font-black text-sm hover:bg-white/10 transition-all">
                    Talk to an Expert
                  </button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:scale-110 transition-transform duration-[4s]">
                Fixoria
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Ultra Modern */}
        <footer className="bg-deep-onyx text-white rounded-t-[100px] mt-20 pt-32 pb-16">
          <div className="container mx-auto px-5 lg:px-[10%]">
            <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-24">
              <div>
                <h2 className="text-4xl font-black tracking-tighter mb-8 italic">
                  Fixoria
                </h2>
                <p className="text-white/40 text-lg leading-relaxed max-w-[300px] font-medium">
                  Exceptional <span className="text-white">living</span>{" "}
                  experiences through{" "}
                  <span className="text-white/20 italic">meticulously</span>{" "}
                  curated urban residences.
                </p>
              </div>

              <div>
                <h4 className="text-accent text-[10px] uppercase font-black tracking-[0.2em] mb-10 text-lg">
                  Organization
                </h4>
                <ul className="flex flex-col gap-6">
                  {["The Team", "Career", "Press Kit", "Sustainability"].map(
                    (link, i) => (
                      <li key={i}>
                        <a
                          href="/"
                          className="text-white/40 hover:text-white transition-all text-sm font-black uppercase tracking-widest"
                        >
                          {link}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-accent text-[10px] uppercase font-black tracking-[0.2em] mb-10 text-lg">
                  Resources
                </h4>
                <ul className="flex flex-col gap-6">
                  {[
                    "Help Center",
                    "Safety Guides",
                    "Partner Hub",
                    "Community",
                  ].map((link, i) => (
                    <li key={i}>
                      <a
                        href="/"
                        className="text-white/40 hover:text-white transition-all text-sm font-black uppercase tracking-widest"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-accent text-[10px] uppercase font-black tracking-[0.2em] mb-10 text-lg">
                  Contact
                </h4>
                <ul className="flex flex-col gap-6">
                  <li>
                    <a
                      href="/"
                      className="text-white/60 hover:text-white transition-all text-sm font-black uppercase tracking-widest"
                    >
                      hello@fixoria.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white/60 hover:text-white transition-all text-sm font-black uppercase tracking-widest"
                    >
                      Press Inquiries
                    </a>
                  </li>
                  <li>
                    <p className="text-white/20 text-sm font-black uppercase tracking-widest leading-relaxed">
                      Hausvogteipl. 12, <br /> 10117 Berlin
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="reveal flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
              <p className="text-white/10 text-[10px] font-black uppercase tracking-[0.2em]">
                © 2025 Fixoria GmbH. All rights reserved.
              </p>
              <div className="flex gap-12 text-white/20">
                {["Instagram", "LinkedIn", "Twitter"].map((social, i) => (
                  <a
                    key={i}
                    href="/"
                    className="hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.2em]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
