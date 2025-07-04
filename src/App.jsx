
import Navbar from "./component/Navbar"

const navbarItem = {
  About: "About",
  Skills: "Skills",
  Project: "Projects"
  
}

const App = () => {

  return (
    <>
      <Navbar navbarItem={navbarItem} />
    </>
  )
}

export default App