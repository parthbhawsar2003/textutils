// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import About from './component/About';





function App() {
  const [mode,setMode]=useState('light');
const [alert,setalert]=useState(null);

const showalert=(message,type)=>{
setalert({
  msg:message,
  ty:type

})
setTimeout(() => {
  setalert(null)
}, 1000);


}


  const togglemode=()=>{

  

    

    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white'
      showalert('Light mode is enabled','success')
     
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='gray'
      showalert('Dark mode is enabled','success')
    
    }
  }
  
  

  
  return (
    <>

<Navbar title='Textutils'dropdownname='details' dropdown1='address' dropdown2='contact' mode={mode} togglemode={togglemode}  />
<Alert alert={alert} showalert={showalert}/>
<Textform heading=" Enter your text here" mode={mode} togglemode={togglemode} alert={alert}  showalert={showalert}/>
<About mode={mode} togglemode={togglemode} />


 </>
  );
}

export default App;
