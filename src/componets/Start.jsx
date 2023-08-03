import { useRef } from "react"


export default function Start({setUsername}) {
  const inputRef = useRef();
  const handleclick =()=>{
    inputRef.current.value &&   setUsername(inputRef.current.value);
  };
   
  return (
    <div className='start'>
      <input placeholder='enter your name' type="text" className="startInput"
      ref={inputRef} 
        /> 
      <button className="startButton" onClick={handleclick}>Start</button>
       

      
    </div>
  )
}
