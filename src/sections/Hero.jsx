import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiElsevier } from "react-icons/si";
import Typewriter from 'typewriter-effect';
import NeuralNetworkBackground from '../components/NeuralNetworkBackground';
import { ChevronDown } from 'lucide-react';
import { FaGoogleScholar } from "react-icons/fa6";



const Hero = () => {
  const skills = ["SolidWorks", "AutoCAD", "Python", "ReactJS", "Adobe Photoshop", "ANSYS Fluent"];

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden py-10 md:py-0'>
      <div className='absolute inset-0 z-0'>
        <NeuralNetworkBackground />
      </div>
      
      <div className='container mx-auto px-6 relative z-10 mt-20'>
        {/* Responsive Grid: Col-1 di mobile, Col-2 di Desktop */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center'>
          
          {/* Left Side: Text Content */}
          {/* text-center di mobile, text-left di desktop */}
          <div className='order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-primary'>                
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
                Work Hard Play Harder
              </span>
            </div>

            <div className='space-y-4'>
              {/* Ukuran font disesuaikan: text-4xl di mobile, text-7xl di desktop */}
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fade-in'>
                Welcome to my <br />
                <span className="font-serif italic font-normal text-white">personal</span> 
                <span className='text-primary glow-text'> Website</span>
              </h1>
              
              <div className='flex flex-wrap justify-center lg:justify-start items-center gap-x-2 text-xl md:text-2xl font-semibold opacity-90'>
                <span>Hi there, I'm a</span>
                <span className="text-primary">
                  <Typewriter
                    options={{
                      strings: ['Researcher', 'Engineer', 'Programmer', 'Tech Enthusiast'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </div>

            {/* Tombol yang lebih lebar di mobile untuk kemudahan klik */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 animate-fade-in">
              <button className='w-full sm:w-auto cursor-pointer border border-border text-foreground hover:border-primary/50 group px-8 py-3.5 rounded-full font-medium animated-border transition-all'>
                Contact me
              </button>
            </div>

            {/* Social Icons - Center di mobile */}
            <div className='flex items-center justify-center lg:justify-start gap-x-3 mt-6'>
              {[
                { icon: FaLinkedin, label: "Linkedin", url: "https://www.linkedin.com/in/fairuz-milkiy-kuswa-6a4016110/" },
                { icon: FaGoogleScholar, label: "Google Scholar", url: "https://scholar.google.com/citations?user=suWxEcoAAAAJ&hl=ida" },
                { icon: FaResearchgate, label: "ResearchGate", url: "https://www.researchgate.net/profile/Fairuz-Kuswa" }, 
                { icon: SiElsevier, label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57931825700" },
                { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/fairuzmilky/" }
              ].map((social, index) => {
                const Icon = social.icon; 
                return (
                  <a key={index} href={social.url} className='p-3 rounded-full glass hover:text-primary transition-all duration-300'>
                    <Icon className="h-5 w-5 md:w-7 md:h-7" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: 3D Image */}
          {/* Memberikan ruang yang cukup agar 3D tidak terpotong di mobile */}
          <div className='order-1 lg:order-2 relative animate-fade-in animation-delay-300 px-4 md:px-0'>
            <div className='relative max-w-[280px] xs:max-w-[320px] md:max-w-md mx-auto [perspective:1200px]'>
              <div className='absolute inset-0 rounded-3xl bg-primary/20 blur-3xl animate-pulse' />
              <div className='relative animate-auto-3d'>
                <div className='relative glass rounded-3xl p-2 glow-border overflow-hidden shadow-2xl'>
                  <img 
                    src="/foto_fairuzmk.png" 
                    alt="Fairuz MK" 
                    className='w-full aspect-[4/5] object-cover rounded-2xl [transform:translateZ(30px)]'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none' />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Marquee: Hidden di layar sangat kecil jika terlalu ramai, atau dikecilkan */}
        <div className='mt-16 md:mt-24 animate-fade-in'>
          <p className='text-[10px] uppercase tracking-widest text-muted-foreground mb-6 text-center'>Software I work with</p>
          <div className='relative mask-edge-gradient'> {/* Tambahkan efek pudar di pinggir */}
            <div className='flex animate-marquee space-x-8 md:space-x-12'>
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0">
                  <span className='text-lg md:text-xl font-bold text-muted-foreground/30 hover:text-primary/50 transition-colors cursor-default'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down - Sembunyikan di mobile jika layar terlalu pendek */}
      <div className='hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-fade-in'>
        <div className='flex flex-col items-center text-muted-foreground'>
          <span className='text-[10px] tracking-[0.2em]'>SCROLL</span>
          <ChevronDown className='animate-bounce w-5 h-5'/>
        </div>
      </div>
    </section>
  );
};

export default Hero