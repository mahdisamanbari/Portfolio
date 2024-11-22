import React, { useState } from 'react'
import { CONTACT } from '../constants'
import emailjs from "@emailjs/browser"
import { FiSend } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const[formData , setFormData]=useState({
    name:'',
    email:'',
    message:'',
  })
  const[errors , setErrors] =useState({})
  const[isSending , setIsSending] =useState(false)

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const validate = ()=>{
    let errors={};
    if(!formData.name){
      errors.name = "Name is required"
    }
    if(!formData.email){
      errors.email = "Email is required"
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errors.email = "Email is invalid"
    }
    if(!formData.message){
      errors.message = "Message is required"
    }
    return errors;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors=validate();
    if (Object.keys(validationErrors).length>0){
      setErrors(validationErrors);
    }else{
      setErrors({});
      setIsSending(true);

      emailjs
            .send(
              "service_dg3k53q",
              "template_9e0bg4z",
              formData,
              "oPevSh7Jb831p9Uxj",
            )
            .then((response)=>{
              toast.success("Messege sent successfully");
              setFormData({name:"",email:"",messege:""})
            })
            .catch((error)=>{
              console.log("FAILED...",error);
              toast.error("Failed to send message. please try again later.")
            })
            .finally(()=>{
              setIsSending(false);
            })

    }
  }







  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="mb-8 flex flex-wrap justify-center">
        <Toaster/>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex w-full space-x-4">
            <div className="w-full lg:w-1/2">
              <input type="text"
                  id='name'
                  name='name'
                  value={formData.name}
                  placeholder='Name'
                  onChange={handleChange}
                  className="mb-8 w-full appearance-none rounded-lg 
                  border border-stone-50/30 bg-transparent px-3 py-2 
                  text-sm focus:border-stone-400 focus:outline-none"
                   />
                   {errors.name && (
                      <p className="text-sm text-rose-800 ">{errors.name}</p>
                   )}
            </div>
            <div className="w-full lg:w-1/2">
              <input type="text"
                  id='email'
                  name='email'
                  value={formData.email}
                  placeholder='Email'
                  onChange={handleChange}
                  className="mb-8 w-full appearance-none rounded-lg 
                  border border-stone-50/30 bg-transparent px-3 py-2 
                  text-sm focus:border-stone-400 focus:outline-none"
                  />
                   {errors.email && (
                      <p className="text-sm text-rose-800 ">{errors.email}</p>
                   )}
            </div>
          </div>
          <div className="mb-4">
              <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  placeholder='Message'
                  onChange={handleChange}
                  className="mb-8 w-full appearance-none rounded-lg 
                  border border-stone-50/30 bg-transparent px-3 py-2 
                  text-sm focus:border-stone-400 focus:outline-none"
                   rows='6'/>
                   {errors.message && (
                      <p className="text-sm text-rose-800 ">{errors.message}</p>
                   )}
            </div>
            <button type='submit' 
            className={`mb-8 w-full rounded border
            border-stone-50/30 bg-stone-200 px-4 py-2
            text-sm font-semibold text-stone-900 
            hover:bg-stone-300 ${isSending ?"cursor-not-allowed opacity-50":""}`}
            disabled={isSending}
            >
              <div className="flex items-center justify-center gap-2">
                {isSending ? 'Sending...' : "Send"}
                <FiSend />
              </div>

            </button>
        </form>
      </div>
      <div className='border-t border-neutral-900 pb-4'>
    
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href='#' className="my-4 border-b">{CONTACT.email}</a>
        </div>
      </div>
    </div>
    
  )
}

export default Contact