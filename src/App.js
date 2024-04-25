
import './App.css';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
const home=function () { 
  const firstName="Urva";
  const secondName="Til Wusqa";
  return (
      <div>
      <Nav/>
      <Introduction fname={firstName} sname={secondName}/>
      <Education/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
  );
};
export default home;