
import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"


function App() {


  return (
    <>
     <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <Experience userId="699050aa2890f5692974b86f"/>
        <Projects userId="699050aa2890f5692974b86f"/>
        <Contact/>
      </main>
     </div>
    </>
  )
}

export default App
