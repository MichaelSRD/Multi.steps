'use client'
import { useEffect, useState } from "react";

export function Step3(){
  const [confirm, setConfirm] = useState(false);
  const [ formData, setFormData ] = useState({
    name:'',
    email:'',
  });
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  
  useEffect(()=>{
    const data = localStorage.getItem('formData');
    const topics = localStorage.getItem('selectedTopics');
    if (data && topics) {
      setFormData(JSON.parse(data));
      setSelectedTopics(JSON.parse(topics));
    }
  },[]);
  
    return (
        <>
          <p className='text-xl pb-8 font-bold '>Summary</p>
          <div className="flex space-x-2 font-bold">
            <span className="text-[#A1A1A9]">Name:</span>
            <p>{formData.name}</p>
          </div>
          <div className="flex space-x-2 font-bold">
            <span className="text-[#A1A1A9]">Email:</span>
            <p>{formData.email}</p>
          </div>
          <div className="mb-6 mt-4 font-bold">
            <p className="text-[#A1A1A9]">Topics:</p>
            <ul className=" list-disc pl-7 ">
              { selectedTopics.map((item,index)=>(
                <li key={index} >{item}</li>
              ))}
            </ul>
          </div>
          <div onClick={()=>setConfirm(!confirm)}  className={` ${ confirm ? 'justify-self-center mt-7 rounded-3xl bg-[#30d65a] py-2 text-white flex justify-center w-max px-8 cursor-pointer' : "justify-self-center mt-7 rounded-3xl bg-[#845EEE] py-2 text-white flex justify-center w-max px-8 cursor-pointer"}`}>
                <p>{confirm ? 'Succes':'Confirm'}</p>
        </div>
            </>
    )
}