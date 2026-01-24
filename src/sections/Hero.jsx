import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiScopus } from "react-icons/si";
import Typewriter from 'typewriter-effect';
import NeuralNetworkBackground from '../components/NeuralNetworkBackground';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const skills = [
    "SolidWorks",  "SolidWorks Electrical", "AutoCAD", "ANSYS Fluent", "Python", "Visual Studio", "ReactJS", "Adobe Photoshop", "Adobe Illustrator"
  ];
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      <div className='absolute inset-0'>
        {/* Background */}
        {/* <img src="" alt="Hero Image" className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'/> */}
      </div>
      
      {/* Green dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* {[...Array(30)].map((_, i) => (
          <div 
          className='absolute w-1.5 h-1.5 rounded-full opacity 60'
          style={{ 
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${5 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
           }}/>

        ))} */}
      <NeuralNetworkBackground/>
        
      </div>
      
      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10 '>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left */}
            <div className='space-y-8'>
              <div className='animate-fade-in'>
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>                
                  <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>Work Hard Play Harder
                  
                </span>
              </div>
              {/* Headline */}
              <div className='space-y-3'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in'>
                  Welcome to my 
                  <br />
                  <span className="font-serif italic font-normal text-white">personal 
                  </span> 
                  <span className='text-primary glow-text animation-delay-100'> Website</span>
                  
                  
                </h1>
                <div className='flex flex-wrap items-center gap-x-2 text-2xl font-semibold animate-fade-in animation-delay-300'>
                <span>Hi there, I'm a</span>
                
                <span className="text-primary"> {/* Tambahkan warna primer di sini agar teks menonjol */}
                  <Typewriter
                    options={{
                      strings: [
                        'Researcher', 
                        'Engineer', 
                        'Programmer',
                        'Tech Enthusiast'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                      delay: 75, // Kecepatan mengetik (ms)
                      wrapperClassName: "typewriter-text", // Kamu bisa kasih class khusus untuk CSS tambahan
                      cursorClassName: "text-primary animate-pulse" // Memberi warna pada kursor kerdip
                    }}
                  />
                </span>
              </div>
                  
                
                
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">  
                <button className='relative cursor-pointer bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 group px-6 py-3 rounded-full font-medium overflow-visible animated-border'>
                  Contact me
                </button>
              </div>

              {/* Social Button */}
              <div className='flex items-center gap-x-3 mt-4 animate-fade-in animation-delay-800'>
                <span className='text-sm text-muted-foreground'>Follow me: </span>
                
                {[
                  { icon: FaLinkedin, href: "#", label: "Linkedin" },
                  { icon: FaResearchgate, href: "#", label: "ResearchGate" }, 
                  { icon: SiScopus, href: "#", label: "Linkedin" },
                  { icon: FaFacebookF, href: "#", label: "Facebook" },
                  { icon: FaInstagram, href: "#", label: "Instagram" }
                ].map((social, index) => {
                  // Ambil referensi komponen
                  const Icon = social.icon; 
                  
                  return (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={social.label} // Penting untuk SEO & Aksesibilitas
                      className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

            </div>
            {/* Right */}
            <div className='relative animate-fade-in animation-delay-300'>
              {/* Profile image */}
              <div className='relative max-w-md mx-auto'>
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'/>
                <div className='relative max-w-md mx-auto [perspective:1200px]'>
                {/* Layer Glow statis di belakang */}
                <div className='absolute inset-0 rounded-3xl bg-primary/10 blur-3xl' />
                
                {/* Container yang bergerak 3D otomatis */}
                <div className='relative animate-auto-3d'>
                  
                  {/* Frame Kaca */}
                  <div className='relative glass rounded-3xl p-2 glow-border overflow-hidden'>
                    
                    {/* Foto - Kita kasih translateZ lebih tinggi agar 'keluar' dari frame */}
                    <img 
                      src="/FotoFairuz.jpg" 
                      alt="Fairuz MK" 
                      className='w-full aspect-[4/5] object-cover rounded-2xl shadow-xl [transform:translateZ(30px)]'
                    />
                    
                    {/* Efek Kilatan (Shimmer) agar terlihat seperti kaca beneran */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none' />
                  </div>

                </div>
              </div>
              </div>

            </div>
          </div>

          {/* Skills */}
          <div className='mt-20 animate-fade-in animation-delay-500'>
            <p className='text-sm text-muted-foreground mb-4 text-center'>Software I work with</p>
              <div className='relative overflow-hidden'>
                <div className='flex animate-marquee space-x-6'>
                  {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex-shrink-0 px-8 py-4">
                      <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10 animate-fade-in animation-delay-700'>
          <a href="#about" className='flex flex-col items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer'>
            <span className='text-xs tracking-wider'>SCROLL</span>
            <ChevronDown className='animate-bounce w-6 h-6'/>
          </a>
        </div>
    </section>
  )
}

export default Hero