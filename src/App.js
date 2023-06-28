import React , {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

const App = () => {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type)=>{

    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      
      setalert(null);

    }, 1500);

  }

  const togglemode = () =>{

       if(mode === "light"){
        setmode('dark');
        document.body.style.backgroundColor = "#042743";

        showalert("Dark mode has been enabled", "success")
       }
      

       else{
        setmode("light")
        document.body.style.backgroundColor = "white";
        
        showalert("Light mode has been enabled", "success")
       }

  }

  return (
  <>
<div>
    <Navbar title="TextUtils" mode={mode} togglemode = {togglemode}/>
    </div>
    <Alert alert = {alert}/>
    <div className="container my-3">

           <TextForm mode ={mode} heading = "Enter the text to analyse below" />       

    </div>

  </>

  );
}

export default App;
