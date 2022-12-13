import './App.css';
import Header from './header.js';
import Contact from './contact.js'
import Footer from './footer'
import About from './About';
import Projects from './Projects';
function App(){
  return(
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;