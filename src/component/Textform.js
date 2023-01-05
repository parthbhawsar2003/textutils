import React, { useInsertionEffect, useState, useSyncExternalStore } from 'react'

export default function Textform(props) {
    const [text,settext]=useState("Enter string here")
    const textonchange=(event)=>{
settext(event.target.value)
    }
    const textupcase=()=>{
      settext(text.toUpperCase())
      props.showalert('Converted in uppercase','success')
    }
    const textlocase=()=>{
      settext(text.toLowerCase())
      props.showalert('Converted in lowercase','success')
    }
    const cleartext=()=>{
      settext("")
      props.showalert('Text is cleared','success')
    }
  return (


<div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1 className="heading">{props.heading}</h1>
  <label htmlfor="box " className="form-label mx-5"></label>
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white'}} id="box" value={ text} onChange={textonchange} rows="8"  ></textarea>
{/* button to change in uppercase */}
<button type="button" className="btn btn-primary  " id='bet' onClick={textupcase}>Change to Uppercase</button>
{/* button to change in lowercase */}
<button type="button" className="btn btn-primary my-2" id='bt' onClick={textlocase}>Change to lowercase</button>
{/* button to clear text */}
<button type="button" className="btn btn-primary my-2" id='bt' onClick={cleartext}>Clear text</button>

<h1 className="head">Number of words and charcter</h1>
<p className="head">{text.split(" ").filter((element)=>{ return element.length !==0 })  .length } Words and {text.length} Characters</p>
<p className="head">{text.length *0.08} second</p>
<h1 className="head">Preview</h1>
<p className="head">{text.length>1?text:'Enter your text here'}</p>



</div>

   
  )
}

