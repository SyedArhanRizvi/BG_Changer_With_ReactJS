import { useState } from "react"


function App() {
        
       let [color, setColor] = useState("green");

       let hexaCode = ()=>{
        let rendomCode = Math.floor(Math.random() * 16777215);
        let hexaCode = "#" + rendomCode.toString(16);
          setColor(hexaCode);
         
       }
  

  return (
   
      <div className='h-screen w-full flex items-center content-center flex-wrap gap-10'
          style={{backgroundColor:color}}
      >
              <div className="bg-yellow-50 w-2/4 h-20 flex content-evenly gap-5 ml-80 rounded-lg overflow-hidden">
                <div className="h-full w-full bg-red-400 flex flex-wrap justify-center items-center gap-6">
                  <button className="h-10 w-28 bg-yellow-400 font-extrabold rounded-2xl"
                    onClick={()=>setColor("yellow")}
                  >Yellow</button>
                  <button className="h-10 w-28 bg-blue-800 font-extrabold rounded-2xl"
                    onClick={()=>setColor("blue")}
                  >Blue</button>
                  <button className="h-10 w-28 bg-orange-400 font-extrabold rounded-2xl" onClick={()=>{setColor("orange")}}>Orange</button>
                  <button className="h-10 w-28 bg-purple-400 font-extrabold rounded-2xl" onClick={()=>{setColor("purple")}}>Purple</button>
                  <button className="h-10 w-28 bg-gray-400 font-extrabold rounded-2xl" onClick={()=>{setColor("gray")}}>Gray</button>
                </div>
              </div>
              <div className=" w-2/4 h-20 flex content-evenly gap-5 ml-80 rounded-lg overflow-hidden">
                    <div className="h-full w-full flex justify-center items-center gap-6">
                      <button className="h-10 w-60 bg-teal-400 rounded-2xl font-serif font-extrabold" onClick={hexaCode}>Unique Color Generator</button>
                      {/* <button className="h-10 w-28 bg-indigo-700 rounded-2xl font-serif font-extrabold text-white">Copy</button>
                      <h1></h1> */}
                    </div>
              </div>
      </div>
   
  )
}

export default App
