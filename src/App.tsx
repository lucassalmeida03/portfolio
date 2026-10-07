import { About } from "./components/About"
import Courses from "./components/Courses"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import Projects from "./components/Projects"
import Socials from "./components/Socials"

function App() {

  return (
<div>
  <Header/>
  <main>
    <Hero/>
    <About/>
    <Courses/>
    <Projects/>
    <Socials/>
  </main>
   <footer className="bg-[#0C0E14] flex justify-center py-4"><p className="text-white text-[12px]">Desenvolvido por <span className="text-blue-400 text-[12px]">Lucas Pires</span></p></footer>
</div>
  )

}
export default App
