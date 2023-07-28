import React from 'react'
import ContactForm from './elements/ContactForm'
import  './ContactContent.css'


const ContactContent = () => {
  return (
    <div className='contact__content__container'>
         <h2 style={{fontFamily: 'Teko', color: "white"}}> CONTACT</h2> <br/>
         <a className='email' href="#" style={{textDecoration:'none', color: '##FFB600', fontWeight:'700'}}>  
        roniebenitez01@gmail.com</a>
        <div style={{width:'100%', padding: '5%'}}>        
          <ContactForm/>
        </div>


    </div>
  )
}

export default ContactContent