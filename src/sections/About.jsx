import React from 'react'

const About = () => {

  const highlights =[
    {
      icon: "💻" ,
      tittle: "Full-Stack Development",
      description: "Experienced in building robust web applications using modern technologies like React, Node.js, and MongoDB."
    },
    {
      icon: "🎨" ,
      tittle: "UI/UX Design",
      description: "Skilled in creating user-friendly interfaces with a focus on usability and aesthetics using tools like Figma and Adobe XD."
    },
    {
      icon: "⚙️" ,
      tittle: "DevOps",
      description: "Proficient in CI/CD pipelines, containerization with Docker, and cloud services like AWS and Azure for efficient deployment."
    },
    {
      icon: "🔒" ,
      tittle: "Cybersecurity",
      description: "Knowledgeable in implementing security best practices to protect applications from vulnerabilities and threats."
    }
  ]
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>

          <h2 className='text-4xl md:text-5xl fontbold leading-tght animate-fade-in animation-delay-100 text-secondary-foreground'>
            Building the future,
            <span className='font-serif italic font-normal text-white'> {" "}
              one component at a time
            </span>
          </h2>
          <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, esse. Repellat dignissimos eius molestiae, ad culpa voluptatibus nostrum quis distinctio cumque porro beatae unde sint corrupti facilis autem odit laborum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tenetur fugiat, veniam quos impedit, totam necessitatibus consequuntur ratione eos facere fugit quasi modi. Eveniet autem molestias voluptas quis in iste.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illo nostrum exercitationem cumque odit cum a velit, assumenda vitae dicta praesentium similique dolorum laboriosam, ducimus, ipsa iste. Placeat, sapiente animi.</p>

              <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                <p className='text-lg font-medium italic text-foreground'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsum, minus neque, modi aliquid sequi reiciendis aliquam explicabo omnis beatae odit quae possimus saepe commodi! Est repellendus autem unde ducimus!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='grid sm:grid-cols-2 gap-6 animate-fade-in animation-delay-400'>
            {highlights.map((item, idx) => (
               <div key={idx} className="glass p-6 rounded-2xl animat-fade-in animation-delay-{500 + idx * 100} glow-border">
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.tittle}</h3>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
               </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About