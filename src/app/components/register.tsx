'use client'
import Form from 'next/form'
import { useEffect, useState } from 'react';



export function Register( paso:any ){

  const [formData, setFormData]= useState({
    name: '',
    email: ''
  })
 useEffect(()=>{
   const savedata = localStorage.getItem('formData');
   if (savedata) {
     setFormData(JSON.parse(savedata))
   }
 },[])
  const handledSubmit = ()=>{
    localStorage.setItem('formData',JSON.stringify(formData) );
    paso();
  }
  
    return(
        <>
          <p className='text-xl pb-8 font-bold' >Register</p>
           <Form action={handledSubmit}  className='grid  ' >
            <label htmlFor="" className='mb-2' >Name</label>
            <input type="text" required defaultValue={formData.name}  name="name" onChange={ (e) => setFormData({ ...formData, name: e.target.value }) }   className='outline-none focus:border focus:border-[#652CD1] w-96 bg-[#394150] bg-opacity-25 border border-[#A1A1A9] rounded-lg  p-2 ' placeholder='enter your name' />
            <label htmlFor=""  className='mt-4 mb-2'>Email</label>
            <input type="email" required defaultValue={formData.email} onChange={ (e) => setFormData({ ...formData, email: e.target.value }) }  name="email"   className='outline-none focus:border focus:border-[#652CD1] w-96 bg-[#394150] bg-opacity-25 border border-[#A1A1A9] rounded-lg  p-2 ' placeholder='example@gmail.com' />
         <button className=" justify-self-center mt-7 rounded-3xl bg-[#845EEE] py-2 text-white flex justify-center w-max px-8 cursor-pointer" type="submit" >Continue</button>
           </Form> 
        </>
    )
}