
import About from "./component/about/About"
import Footer from "./component/footer/Footer"
import Navbar from "./component/Navbar"
import Project from "./component/project/Project"
import Skills from "./component/skills/Skills"



const App = () => {

  return (
    <>
      <div className="bg-[#050411]">

        <Navbar />
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>

    </>
  )
}

export default App