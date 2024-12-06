import Form from "next/form";
import { useEffect, useState } from "react";


export function Step2(paso: any ){
    const [selectedTopics, setSelectedTopics] = useState<string[]>(() => {
        if (typeof window !== 'undefined') {
          const storedTopics = localStorage.getItem('selectedTopics');
          return storedTopics ? JSON.parse(storedTopics) : [];
        }
        return [];
      });

      useEffect(()=>{
        localStorage.setItem('selectedTopics', JSON.stringify(selectedTopics));
     },[selectedTopics]);

 const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement> )=>{
    const {value, checked} = event.target
    if (checked) {
        setSelectedTopics([...selectedTopics, value]);
    }else{
        setSelectedTopics(selectedTopics.filter((topic) => topic !== value));
    }
 };

    return(
       <>
          <p className='text-xl pb-8 font-bold '>Which topics you are interested in?</p>
           <Form action={''} className='grid space-y-4 ' >

            <div>
            <input type="checkbox" checked={selectedTopics.includes('Software Development')} onChange={handleCheckboxChange} id="react-option" value="Software Development" className="hidden peer "/>
        <label htmlFor="react-option" className=" w-96 inline-flex items-center justify-between py-3 px-5 text-[#A1A1A9] bg-[#4D5562] rounded-lg cursor-pointer peer-checked:border-none peer-checked:text-white peer-checked:bg-[#652CD1]  ">                           
            <div className="block">
                <div className=" font-semibold  ">Software Development</div>
            </div>
        </label>
            </div>

            <div>
            <input type="checkbox" checked={selectedTopics.includes('User Experience')} onChange={handleCheckboxChange} id="option2" value="User Experience" className="hidden peer "/>
        <label htmlFor="option2" className=" w-96 inline-flex items-center justify-between py-3 px-5 text-[#A1A1A9] bg-[#4D5562] rounded-lg cursor-pointer peer-checked:border-none peer-checked:text-white peer-checked:bg-[#652CD1]  ">                           
            <div className="block">
                <div className=" font-semibold  ">User Experience</div>
            </div>
        </label>
            </div>

            <div>
            <input type="checkbox" checked={selectedTopics.includes('Graphic Design')} onChange={handleCheckboxChange} id="option3" value="Graphic Design" className="hidden peer "/>
        <label htmlFor="option3" className=" w-96 inline-flex items-center justify-between py-3 px-5 text-[#A1A1A9] bg-[#4D5562] rounded-lg cursor-pointer peer-checked:border-none peer-checked:text-white peer-checked:bg-[#652CD1] mb-8  ">                           
            <div className="block" >
                <div className=" font-semibold  ">Graphic Design</div>
            </div>
        </label>
            </div>
            <div  onClick={ selectedTopics.length ? paso :()=>{}} className="  justify-self-center mt-7 rounded-3xl bg-[#845EEE] py-2 text-white flex justify-center w-max px-8 cursor-pointer">
                <p>Continue</p>
        </div>
        
           </Form> 
        </>
    )
}