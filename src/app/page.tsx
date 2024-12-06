
'use client'
import Image from "next/image";
import { Register } from "./components/register";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/step3";
import { useState } from "react";



export default function Home() {
  const [pasoActual, setPasoActual] = useState(0);
  

  
  const nextStep = ()=>{
    if(pasoActual < steps.length -1){
      setPasoActual(pasoActual  + 1)
     
    }
  }
  const steps = [
    {step: <Register paso={nextStep}  /> },
    {step: <Step2 paso={nextStep} />},
    {step: <Step3/>},
  ]
 
  return (
    <>
    <div className=" -z-10 absolute left-0 top-0 w-[638px]  h-[638px] overflow-hidden ">
      <Image src={'blur-radial.svg'} alt="" width={1200} height={900} className=" absolute left-[-280px] top-[-280px] " />
    </div>
    <div className="  -z-10 absolute right-0 bottom-0 w-[638px]  h-[638px] overflow-hidden   ">
      <Image src={'blur-radial.svg'} alt="" width={1200} height={900} className=" absolute right-[-280px] bottom-[-280px] "/>
    </div>
    <div className=" ">
      <main className="flex justify-center items-center m-auto h-screen flex-col ">
        <div className="bg-[#4D5562] p-9 rounded-lg  bg-opacity-25 text-white border border-[#A1A1A9] w-[458px] ">
        {steps[pasoActual].step}
        </div>
       <div className="text-[#4D5562] mt-6 flex space-x-5 items-center">
        <p>Step {pasoActual +1} of  {steps.length}</p>
        <div className={`w-3 h-3 bg-[#4D5562] rounded-full cursor-pointer ${pasoActual === 0 ? ' bg-[#845EEE] shadow-[0px_0px_0px_6px_rgba(132,_94,_238,_0.3)] ':' bg-[#845EEE]' }`} onClick={ pasoActual <= 0 ? ()=>{} : ()=>setPasoActual(0) }  ></div>


        <div className={`w-3 h-3 bg-[#4D5562] rounded-full cursor-pointer ${pasoActual === 1 ? ' bg-[#845EEE] shadow-[0px_0px_0px_6px_rgba(132,_94,_238,_0.3)] ':'' } ${pasoActual < 1 ? 'bg-[#4D5562]':''} ${pasoActual > 1 ? 'bg-[#845EEE]' : ''}  `} onClick={ pasoActual <= 1 ? ()=>{} : ()=>setPasoActual(1) }  ></div>


        <div className={`w-3 h-3 bg-[#4D5562] rounded-full cursor-pointer ${pasoActual === 2 ? ' bg-[#845EEE] shadow-[0px_0px_0px_6px_rgba(132,_94,_238,_0.3)] ':'' } ${pasoActual < 2 ? 'bg-[#4D5562]':''} ${pasoActual > 2 ? 'bg-[#845EEE]' : ''}  `} onClick={ pasoActual <= 2 ? ()=>{} : ()=>setPasoActual(2) }  ></div>
       </div>
      </main>
    </div>
    </>
  );
}
