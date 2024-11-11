import React from 'react'
import { CONTACT } from '../constants'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
    <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href='#' className="my-4 border-b">{CONTACT.email}</a>
    </div>
    </div>
  )
}

export default Contact