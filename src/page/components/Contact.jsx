import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
    
    const userInfo = {
        firstname: "", 
        lastname: "", 
        email: "", 
        message: ""
    }

    // STATES
    const [formControl, setFormControl] = useState(userInfo); 
    const [errorInfo, setErrorInfo] = useState({});
    const [isSummited, setisSummited] = useState(false);
    const [consent, setConsent] = useState(false)

    //USE EFFECTS
    useEffect(() => {
        if((Object.keys(errorInfo).length === 0 && consent) && isSummited){
            console.log(formControl)
        }
    }, [errorInfo])

    // FUNCTIONS
    
    // This function updates the value of the input element as you type
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormControl({...formControl, [name]: value});
    }
    
    //This function handles submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorInfo(validateForm(formControl));
        setisSummited(true)

        // setTimeout(() => {
        //     setisSummited(false)
        //     setFormControl(userInfo)
        //     // setErrorInfo({})
        //     setConsent(false)
        // }, 3000)
    }

    const validateConsent = (e) => {
        const {checked} = e.target;
        setConsent(checked)
    }
    
    //this function validates the form
    const validateForm = (values) => {
        const errormsgs = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstname) {
            errormsgs.firstname = "Enter your firstname"
        }
        if(!values.lastname) {
            errormsgs.lastname = "Enter your lastname"
        }
        if(!values.email) {
            errormsgs.email = "Enter your email address"
        }
        else if(!emailRegex.test(values.email)) {
            errormsgs.email = "Enter a valid email address"
        }
        if(!values.message) {
            errormsgs.message = "what message would you like pass?"
        }
        if(consent === false) {
            errormsgs.consent = "consent needed"
        }
        return errormsgs 
    }

  return (
    <div className='main--container contact'>
        <>
        {(Object.keys(errorInfo).length === 0 && isSummited) ? (
            <div className='submit--page'>
            <h4>Messeage sent</h4>
            <Link to="/" className='btn btn--link'>Return to Linktree</Link>
            </div>
            ) : (
              <>
              <header>
            <pre>{JSON.stringify(formControl, undefined, 2)}</pre>
            
            
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind</p>
        </header>
        <main>
            <form onSubmit={handleSubmit}>
               <div className='name--container flex'>
                <label htmlFor="first_name">
                        <p>First name</p>
                        <input 
                            type="text" 
                            id='first_name' 
                            name='firstname' 
                            placeholder='Enter your first name'
                            value={formControl.firstname}
                            onChange={handleChange}
                        />
                        <p>{errorInfo.firstname}</p>
                    </label>
                    <label htmlFor="last_name">
                        <p>Last name</p>
                        <input 
                            type="text" 
                            id='last_name' 
                            name='lastname' 
                            placeholder='Enter your last name'
                            value={formControl.lastname}
                            onChange={handleChange}
                        />
                        <p>{errorInfo.lastname}</p>
                    </label>
               </div>

                <label htmlFor="email">
                    <p>Email</p>
                    <input 
                        type="text" 
                        id='email' 
                        name='email' 
                        placeholder='yourname@email.com' 
                        value={formControl.email} 
                        onChange={handleChange}
                    />
                    <p>{errorInfo.email}</p>
                </label>
                <label htmlFor="message">
                    <p>Message</p>
                    <textarea 
                        id='message' 
                        name='message' 
                        placeholder='Send me a message and i will reply as soon as possible...'
                        value={formControl.message}
                        onChange={handleChange} 
                    >
                    </textarea>
                    <p>{errorInfo.message}</p>
                </label>
                
                <label htmlFor="consent" className='consent--container'>
                    <input 
                        type="checkbox" 
                        id='consent' 
                        name='consent'
                        onChange={validateConsent}
                    />
                    <span>You are agreeing to provide a data to your Jesse Ogbonna who may contact you</span>
                    <p>{errorInfo.consent}</p>
                </label>

                <button id='btn__submit' className='btn'>Send message</button>
            </form>
        </main>
              </> 
            )}

        </>
        
    </div>
  )
}

export default Contact
