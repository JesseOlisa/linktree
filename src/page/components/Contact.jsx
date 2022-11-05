import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='main--container contact'>
        <header>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind</p>
        </header>
        <main>
            <form>
               <div className='name--container flex'>
                <label htmlFor="first_name">
                        <p>First name</p>
                        <input 
                            type="text" 
                            id='first_name' 
                            name='firstname' 
                            placeholder='Enter your first name' 
                        />
                    </label>
                    <label htmlFor="last_name">
                        <p>Last name</p>
                        <input 
                            type="text" 
                            id='last_name' 
                            name='lastname' 
                            placeholder='Enter your last name' 
                        />
                    </label>
               </div>

                <label htmlFor="email">
                    <p>Email</p>
                    <input 
                        type="text" 
                        id='email' 
                        name='email' 
                        placeholder='yourname@email.com' 
                    />
                </label>
                <label htmlFor="message">
                    <p>Message</p>
                    <textarea 
                        id='message' 
                        name='message' 
                        placeholder='Send me a message and i will reply as soon as possible...'
                    >
                    </textarea>
                </label>
                
                <label htmlFor="consent" className='consent--container'>
                    <input 
                        type="checkbox" 
                        id='consent' 
                        name='consent' 
                    />
                    <span>You are agreeing to provide a data to your Jesse Ogbonna who may contact you</span>
                </label>

                <button id='btn__submit' className='btn'>Send message</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
