import { useState} from 'react'
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
    }

    //This function validates the checkbox/consent
    const validateConsent = (e) => {
        const {checked} = e.target;
        setConsent(checked)
    }
    
    // this function updates the style if input has error messages
    const errorStyle = (name) => {
        return name in errorInfo ? "danger--input" : ""
    }
    //this function validates the form
    const validateForm = (values) => {
        const errormsgs = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstname) {
            errormsgs.firstname = "Please enter your firstname";
        }
        if(!values.lastname) {
            errormsgs.lastname = "Please enter your lastname";
        }
        if(!values.email) {
            errormsgs.email = "Please enter your email address";
        }
        else if(!emailRegex.test(values.email)) {
            errormsgs.email = "Please enter a valid email address";
        }
        if(!values.message) {
            errormsgs.message = "Please enter a message";
        }
        if(consent === false) {
            errormsgs.consent = "Please tick the box";
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
                            className={`${errorStyle("firstname")}`}
                        />
                        <p className="danger">{errorInfo.firstname}</p>
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
                            className={`${errorStyle("lastname")}`}
                        />
                        <p className="danger">{errorInfo.lastname}</p>
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
                        className={`${errorStyle("email")}`}
                    />
                    <p className="danger">{errorInfo.email}</p>
                </label>
                <label htmlFor="message">
                    <p>Message</p>
                    <textarea 
                        id='message' 
                        name='message' 
                        placeholder='Send me a message and i will reply as soon as possible...'
                        value={formControl.message}
                        onChange={handleChange} 
                        className={`${errorStyle("message")}`}
                    >
                    </textarea>
                    <p className="danger">{errorInfo.message}</p>
                </label>
                
                <label htmlFor="consent" className='consent--container'>
                    <input 
                        type="checkbox" 
                        id='consent' 
                        name='consent'
                        onChange={validateConsent}
                    />
                    <span>You are agreeing to provide a data to your Jesse Ogbonna who may contact you</span>
                    <p className="danger">{errorInfo.consent}</p>
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
