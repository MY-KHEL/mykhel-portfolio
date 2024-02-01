
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
const [theme,setTheme] = useState(null)

useEffect(()=>{
  if( window.matchMedia('(prefer-color-scheme:dark').matches){
    setTheme('dark')
  }
  else {
    setTheme("light")
  }
},[])

useEffect(()=>{
  if (theme === "dark"){
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }
},
[theme])

const handleTheme = ()=>{
  setTheme(theme ==='dark'? 'light': 'dark');
  console.log(theme);
}
  return (
    <div className="App dark:bg-black dark:text-white pb-4">
      <div className='bg-gradient-to-r from-one to-two dark:bg-none '>
      <Navbar theme={theme} handleTheme={handleTheme}/>
      <HeroSection/>
      </div>
     <About/>
     <Services/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
