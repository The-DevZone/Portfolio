
import About from "./component/about/About"
import Footer from "./component/footer/Footer"
import Navbar from "./component/Navbar"
import Project from "./component/project/Project"



const App = () => {

  return (
    <>
      <div className="bg-[#050411]">

        <Navbar />
        <About />
        <Project />
        <Footer />
      </div>

    </>
  )
}

export default App